import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  ChevronRight, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight, 
  BarChart3 
} from 'lucide-react';

const TestQuiz=()=> {
  const { courseId, quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResults, setQuizResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch quiz data on component mount
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/courses/${courseId}/quizzes/${quizId}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch quiz: ${response.status}`);
        }
        
        const data = await response.json();
        setQuiz(data);
        
        // Initialize time remaining from quiz duration (in minutes)
        setTimeRemaining(data.duration * 60);
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching quiz:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuizData();
  }, [courseId, quizId]);

  // Timer countdown effect
  useEffect(() => {
    if (!timeRemaining || timeRemaining <= 0 || quizCompleted) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-submit when time expires
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeRemaining, quizCompleted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const handleSelectAnswer = (questionId, answerId) => {
    if (quizCompleted) return;
    
    setSelectedAnswers(prev => {
      const updatedAnswers = { ...prev };
      
      // If question allows multiple answers
      if (quiz.questions[currentQuestionIndex].allowMultiple) {
        if (!updatedAnswers[questionId]) {
          updatedAnswers[questionId] = [];
        }
        
        if (updatedAnswers[questionId].includes(answerId)) {
          updatedAnswers[questionId] = updatedAnswers[questionId].filter(id => id !== answerId);
        } else {
          updatedAnswers[questionId] = [...updatedAnswers[questionId], answerId];
        }
      } else {
        // Single answer questions
        updatedAnswers[questionId] = answerId;
      }
      
      return updatedAnswers;
    });
  };

  const isAnswerSelected = (questionId, answerId) => {
    if (!selectedAnswers[questionId]) return false;
    
    if (Array.isArray(selectedAnswers[questionId])) {
      return selectedAnswers[questionId].includes(answerId);
    }
    
    return selectedAnswers[questionId] === answerId;
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmitQuiz = async () => {
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch(`/api/courses/${courseId}/quizzes/${quizId}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: selectedAnswers,
          timeSpent: quiz.duration * 60 - timeRemaining,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to submit quiz: ${response.status}`);
      }
      
      const results = await response.json();
      setQuizResults(results);
      setQuizCompleted(true);
      
    } catch (err) {
      console.error("Error submitting quiz:", err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Return to course page
  const handleReturnToCourse = () => {
    navigate(`/courses/${courseId}`);
  };

  // Review completed quiz
  const handleReviewQuiz = () => {
    // Navigation to review page would go here
    navigate(`/courses/${courseId}/quizzes/${quizId}/review`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-purple-800 font-medium">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Quiz</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={handleReturnToCourse}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Return to Course
          </button>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return null;
  }

  // Quiz results screen
  if (quizCompleted && quizResults) {
    const passThreshold = quiz.passPercentage || 70;
    const hasPassed = quizResults.percentageScore >= passThreshold;
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Quiz Results Header */}
            <div className="bg-purple-50 border-b border-purple-100 p-6">
              <h1 className="text-2xl font-bold text-purple-900">{quiz.title} - Results</h1>
              <p className="text-gray-600 mt-1">{quiz.description}</p>
            </div>
            
            {/* Results Summary */}
            <div className="p-6">
              <div className={`text-center p-6 mb-6 rounded-lg ${
                hasPassed ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'
              }`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-white bg-purple-600">
                  {hasPassed ? <CheckCircle size={32} /> : <XCircle size={32} />}
                </div>
                
                <h2 className="text-2xl font-bold mb-2">
                  {hasPassed ? 'Congratulations!' : 'Not Quite There Yet'}
                </h2>
                
                <p className={`text-lg font-medium ${hasPassed ? 'text-green-700' : 'text-red-700'}`}>
                  {hasPassed 
                    ? 'You passed the quiz!' 
                    : 'You did not meet the passing score for this quiz.'}
                </p>
              </div>
              
              {/* Score Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-purple-600 uppercase font-medium">Your Score</p>
                  <p className="text-3xl font-bold text-purple-900 mt-1">{quizResults.score} / {quizResults.totalPossible}</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-purple-600 uppercase font-medium">Percentage</p>
                  <p className="text-3xl font-bold text-purple-900 mt-1">{quizResults.percentageScore}%</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-purple-600 uppercase font-medium">Passing Score</p>
                  <p className="text-3xl font-bold text-purple-900 mt-1">{passThreshold}%</p>
                </div>
              </div>
              
              {/* Question Statistics */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-purple-900 mb-3">Question Summary</h3>
                <div className="flex items-center justify-around bg-gray-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-2 text-white bg-green-500">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-sm text-gray-600">Correct</p>
                    <p className="text-xl font-bold text-gray-800">{quizResults.correctCount}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-2 text-white bg-red-500">
                      <XCircle size={20} />
                    </div>
                    <p className="text-sm text-gray-600">Incorrect</p>
                    <p className="text-xl font-bold text-gray-800">{quizResults.incorrectCount}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-2 text-white bg-gray-400">
                      <AlertCircle size={20} />
                    </div>
                    <p className="text-sm text-gray-600">Unanswered</p>
                    <p className="text-xl font-bold text-gray-800">{quizResults.unansweredCount}</p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  onClick={handleReviewQuiz}
                  className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  <BarChart3 size={18} className="mr-2" />
                  Review Answers
                </button>
                
                <button
                  onClick={handleReturnToCourse}
                  className="flex items-center px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-md hover:bg-purple-50 transition-colors"
                >
                  Return to Course
                </button>
                
                {!hasPassed && (
                  <button
                    onClick={() => {
                      // Reset the quiz to attempt again
                      setSelectedAnswers({});
                      setCurrentQuestionIndex(0);
                      setQuizCompleted(false);
                      setQuizResults(null);
                      setTimeRemaining(quiz.duration * 60);
                    }}
                    className="flex items-center px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-md hover:bg-purple-50 transition-colors"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Current question from the quiz
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const questionProgress = `${currentQuestionIndex + 1} of ${quiz.questions.length}`;
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Quiz Header */}
          <div className="bg-purple-50 border-b border-purple-100 p-6">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div>
                <h1 className="text-2xl font-bold text-purple-900">{quiz.title}</h1>
                <p className="text-gray-600 mt-1">{quiz.description}</p>
              </div>
              
              {/* Timer Display */}
              <div className="flex items-center px-4 py-2 bg-white rounded-full border border-purple-200">
                <Clock size={18} className="text-purple-700 mr-2" />
                <span className="font-medium text-purple-900">{formatTime(timeRemaining)}</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-purple-700 mb-1">
                <span>{questionProgress}</span>
                <span>{Math.round((currentQuestionIndex + 1) / quiz.questions.length * 100)}% Complete</span>
              </div>
              <div className="w-full bg-purple-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${(currentQuestionIndex + 1) / quiz.questions.length * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Question Section */}
          <div className="p-6">
            {/* Question Text */}
            <div className="mb-6">
              <div className="text-sm text-purple-700 mb-2">
                Question {currentQuestionIndex + 1}
                {currentQuestion.allowMultiple && 
                  <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">
                    Multiple answers allowed
                  </span>
                }
              </div>
              <h2 className="text-xl font-medium text-gray-900">{currentQuestion.questionText}</h2>
              {currentQuestion.imageUrl && (
                <img 
                  src={currentQuestion.imageUrl} 
                  alt="Question visual" 
                  className="mt-4 rounded-lg max-h-64 object-contain"
                />
              )}
            </div>
            
            {/* Answer Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.answers.map((answer) => (
                <button
                  key={answer.id}
                  onClick={() => handleSelectAnswer(currentQuestion.id, answer.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    isAnswerSelected(currentQuestion.id, answer.id) 
                      ? 'bg-purple-50 border-purple-400' 
                      : 'border-gray-200 hover:border-purple-200 hover:bg-purple-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 mr-3 flex-shrink-0 rounded-full border ${
                      isAnswerSelected(currentQuestion.id, answer.id)
                        ? 'border-purple-600 bg-purple-600' 
                        : 'border-gray-300'
                    }`}>
                      {isAnswerSelected(currentQuestion.id, answer.id) && (
                        <div className="w-full h-full flex items-center justify-center">
                          <CheckCircle size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                    <span>{answer.text}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 flex items-center rounded-md ${
                  currentQuestionIndex === 0 
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-purple-700 hover:bg-purple-50'
                }`}
              >
                <ArrowLeft size={18} className="mr-1" />
                Previous
              </button>
              
              <div className="flex gap-3">
                {currentQuestionIndex < quiz.questions.length - 1 ? (
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center"
                  >
                    Next
                    <ArrowRight size={18} className="ml-1" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quiz'}
                    <ChevronRight size={18} className="ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Quiz Navigation Footer */}
          <div className="bg-gray-50 border-t border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <button
                onClick={handleReturnToCourse}
                className="text-gray-600 hover:text-purple-700 text-sm font-medium flex items-center"
              >
                <ArrowLeft size={16} className="mr-1" />
                Exit Quiz
              </button>
              
              <div className="flex flex-wrap gap-2">
                {quiz.questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      index === currentQuestionIndex
                        ? 'bg-purple-600 text-white'
                        : selectedAnswers[quiz.questions[index].id]
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-200 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestQuiz;