import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward, BookOpen, Bookmark, Download, Share2, MessageCircle, CheckCircle } from 'lucide-react';

const courseData = {
  title: "Advanced Frontend Development",
  description: "Learn modern web development techniques with practical examples",
  instructor: "Sarah Johnson",
  modules: [
    {
      title: "Module 1: Introduction",
      lessons: [
// In your courseData, update at least one video path to a sample video
// For example, for the first lesson:
{ 
  id: 1, 
  title: "Course Overview", 
  duration: "10:15", 
  active: true, 
  videoSrc: "public/M7T1V1.mp4" // Sample video from W3Schools
},        { id: 2, title: "Setting Up Your Environment", duration: "15:30", active: false, videoSrc: "" },
        { id: 3, title: "Web Development Fundamentals", duration: "20:45", active: false, videoSrc: "" },
      ]
    },
    {
      title: "Module 2: React Basics",
      lessons: [
        { id: 4, title: "Introduction to React", duration: "18:20", active: false, videoSrc: "FRONTEND/src/assets/videos/React/M7/M7T1V1.mp4" },
        { id: 5, title: "Components and Props", duration: "22:10", active: false, videoSrc: "" },
        { id: 6, title: "State and Lifecycle", duration: "25:35", active: false, videoSrc: "" },
      ]
    },
    {
      title: "Module 3: Advanced React",
      lessons: [
        { id: 7, title: "Hooks in Depth", duration: "30:15", active: false, videoSrc: "" },
        { id: 8, title: "Context API", duration: "22:40", active: false, videoSrc: "" },
        { id: 9, title: "Performance Optimization", duration: "24:30", active: false, videoSrc: "" },
      ]
    }
  ],
  notes: [
    { id: 1, title: "Key Concepts", content: "Remember that React components must start with a capital letter. Hooks can only be called at the top level of your component." },
    { id: 2, title: "Best Practices", content: "Always use the key prop when rendering lists. Avoid using index as key unless the list is static." },
    { id: 3, title: "Resources", content: "Additional documentation can be found at reactjs.org. Check the course resources for downloadable examples." }
  ]
};

export default function VideoCoursePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(courseData.modules[0].lessons[0]);
  const [activeTab, setActiveTab] = useState('notes');
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [completedLessons, setCompletedLessons] = useState([]);
  const [volume, setVolume] = useState(1);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [isDraggingSeekBar, setIsDraggingSeekBar] = useState(false);
  const [temporaryTime, setTemporaryTime] = useState(null);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  
  // Format time from seconds to MM:SS format
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };
  
  // Update video progress
 useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const updateProgress = () => {
    if (video.duration && !isDraggingSeekBar) {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);
      setCurrentTime(formatTime(video.currentTime));
      setDuration(formatTime(video.duration));

      if (progressValue > 98 && !completedLessons.includes(currentLesson.id)) {
        setCompletedLessons(prev => [...prev, currentLesson.id]);
      }
    }
  };

  const handleMetadataLoaded = () => {
    setDuration(formatTime(video.duration));
  };

  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('loadedmetadata', handleMetadataLoaded);

  return () => {
    video.removeEventListener('timeupdate', updateProgress);
    video.removeEventListener('loadedmetadata', handleMetadataLoaded);
  };
}, [currentLesson, completedLessons, isDraggingSeekBar]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowRight':
          skipForward();
          break;
        case 'ArrowLeft':
          skipBackward();
          break;
        case 'm':
          toggleMute();
          break;
        case 'f':
          toggleFullScreen();
          break;
        default:
          break;
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isMuted]);
  


  const playLesson = (lesson) => {
    // Only switch lesson, don't auto-mark as completed
    setCurrentLesson(lesson);
    setProgress(0);
    setCurrentTime("0:00");
    
    // Reset video and start playing
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setTimeout(() => {
        videoRef.current.play();
        setIsPlaying(true);
      }, 100);
    }
  };
  
  // Mouse events for dynamic seek bar
  const handleSeekBarMouseDown = (e) => {
    setIsDraggingSeekBar(true);
    updateSeekPosition(e);
  };
  
  const handleSeekBarMouseMove = (e) => {
    if (isDraggingSeekBar) {
      updateSeekPosition(e);
    }
  };
  
  const handleSeekBarMouseUp = (e) => {
    if (isDraggingSeekBar) {
      updateSeekPosition(e);
      setIsDraggingSeekBar(false);

      // Actually update the video time
      if (videoRef.current && videoRef.current.duration) {
        const seekPosition = calculateSeekPosition(e);
        videoRef.current.currentTime = seekPosition;
      }
      setTemporaryTime(null);
    }
  };
  
  // Calculate seek position
  const calculateSeekPosition = (e) => {
    if (!progressBarRef.current) return 0;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const clampedPos = Math.max(0, Math.min(1, pos));
    
    if (videoRef.current && videoRef.current.duration) {
      return clampedPos * videoRef.current.duration;
    }
    return 0;
  };
  
  // Update seek position during dragging
  const updateSeekPosition = (e) => {
    if (!progressBarRef.current) return;
    
    const seekPosition = calculateSeekPosition(e);
    const progressValue = (seekPosition / (videoRef.current?.duration || 1)) * 100;
    
    setProgress(progressValue);
    setTemporaryTime(formatTime(seekPosition));
  };
  
  const seekVideo = (e) => {
    if (videoRef.current) {
      const seekPosition = calculateSeekPosition(e);
      videoRef.current.currentTime = seekPosition;
    }
  };
  
  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };
  
  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };
  
  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };
  
  // Mark lesson as completed manually
  const markLessonAsCompleted = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
    } else {
      setCompletedLessons(prev => prev.filter(id => id !== lessonId));
    }
  };
  
  // Find module title for current lesson
  const getCurrentModuleTitle = () => {
    for (const module of courseData.modules) {
      for (const lesson of module.lessons) {
        if (lesson.id === currentLesson.id) {
          return module.title;
        }
      }
    }
    return "";
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden border border-purple-100">
              <div className="relative">
                {/* Video Player */}
                <video 
                  ref={videoRef}
                  className="w-full aspect-video bg-black"
                  poster="/api/placeholder/800/450"
                  onClick={togglePlay}
                >
                  <source src={currentLesson.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay Play Button (when paused) */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer" onClick={togglePlay}>
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </div>
                )}
                
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 transition-opacity opacity-100 hover:opacity-100 group-hover:opacity-100">
                  {/* Progress Bar */}
                  <div 
                    ref={progressBarRef}
                    className="w-full bg-white/30 rounded-full h-2 cursor-pointer mb-2"
                    onClick={seekVideo}
                    onMouseDown={handleSeekBarMouseDown}
                    onMouseMove={handleSeekBarMouseMove}
                    onMouseUp={handleSeekBarMouseUp}
                    onMouseLeave={() => {
                      if (isDraggingSeekBar) {
                        setIsDraggingSeekBar(false);
                        setTemporaryTime(null);
                      }
                    }}
                  >
                    <div 
                      className="bg-purple-500 h-2 rounded-full relative" 
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <button onClick={togglePlay} className="p-2 rounded-full hover:bg-white/10 transition-all">
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                      <button onClick={skipBackward} className="p-2 rounded-full hover:bg-white/10 transition-all">
                        <SkipBack size={20} />
                      </button>
                      <button onClick={skipForward} className="p-2 rounded-full hover:bg-white/10 transition-all">
                        <SkipForward size={20} />
                      </button>
                      <div className="relative" onMouseEnter={() => setShowVolumeControl(true)} onMouseLeave={() => setShowVolumeControl(false)}>
                        <button onClick={toggleMute} className="p-2 rounded-full hover:bg-white/10 transition-all">
                          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        
                        {/* Volume Slider */}
                        {showVolumeControl && (
                          <div className="absolute bottom-full left-0 mb-2 p-2 bg-gray-900 rounded-md shadow-lg z-10">
                            <input 
                              type="range" 
                              min="0" 
                              max="1" 
                              step="0.01" 
                              value={volume} 
                              onChange={handleVolumeChange}
                              className="w-24 accent-purple-500"
                            />
                          </div>
                        )}
                      </div>
                      <div className="text-sm">{temporaryTime || currentTime} / {duration}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button onClick={toggleFullScreen} className="p-2 rounded-full hover:bg-white/10 transition-all">
                        <Maximize size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Course Title and Instructor - Moved below video */}
              <div className="p-4 border-b border-purple-100 bg-purple-50">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h1 className="text-xl font-bold text-purple-900">{courseData.title}</h1>
                    <p className="text-sm text-gray-600 mt-1">Instructor: {courseData.instructor}</p>
                  </div>
                  <button className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                    Course Dashboard
                  </button>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-4 border-b border-purple-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-purple-900">{currentLesson.title}</h2>
                    <p className="text-gray-600 mt-1">
                      {currentLesson.duration} • {getCurrentModuleTitle()}
                    </p>
                  </div>
                  <div>
                    <button 
                      onClick={() => markLessonAsCompleted(currentLesson.id)}
                      className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        completedLessons.includes(currentLesson.id) 
                          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                          : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                      }`}
                    >
                      <CheckCircle size={16} className="mr-1.5" />
                      {completedLessons.includes(currentLesson.id) ? 'Completed' : 'Mark as Complete'}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="p-4 flex flex-wrap gap-2">
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                  <BookOpen size={18} className="mr-2" />
                  Course Materials
                </button>
                <button className="flex items-center px-4 py-2 bg-white text-purple-700 border border-purple-200 rounded-md text-sm font-medium hover:bg-purple-50 transition-colors">
                  <Bookmark size={18} className="mr-2" />
                  Bookmark
                </button>
                <button className="flex items-center px-4 py-2 bg-white text-purple-700 border border-purple-200 rounded-md text-sm font-medium hover:bg-purple-50 transition-colors">
                  <Download size={18} className="mr-2" />
                  Download
                </button>
                <button className="flex items-center px-4 py-2 bg-white text-purple-700 border border-purple-200 rounded-md text-sm font-medium hover:bg-purple-50 transition-colors">
                  <Share2 size={18} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
            
            {/* Notes & Documentation Section */}
            <div className="mt-6 bg-white rounded-lg shadow border border-purple-100">
              <div className="border-b border-purple-100">
                <nav className="flex">
                  <button 
                    onClick={() => setActiveTab('notes')}
                    className={`px-4 py-3 text-sm font-medium ${activeTab === 'notes' 
                      ? 'border-b-2 border-purple-500 text-purple-700' 
                      : 'text-gray-500 hover:text-purple-700'}`}
                  >
                    Notes
                  </button>
                  <button 
                    onClick={() => setActiveTab('discussion')}
                    className={`px-4 py-3 text-sm font-medium ${activeTab === 'discussion' 
                      ? 'border-b-2 border-purple-500 text-purple-700' 
                      : 'text-gray-500 hover:text-purple-700'}`}
                  >
                    Discussion
                  </button>
                  <button 
                    onClick={() => setActiveTab('resources')}
                    className={`px-4 py-3 text-sm font-medium ${activeTab === 'resources' 
                      ? 'border-b-2 border-purple-500 text-purple-700' 
                      : 'text-gray-500 hover:text-purple-700'}`}
                  >
                    Resources
                  </button>
                </nav>
              </div>
              
              <div className="p-4">
                {activeTab === 'notes' && (
                  <div>
                    {courseData.notes.map(note => (
                      <div key={note.id} className="mb-4 p-4 bg-purple-50 rounded-md border-l-4 border-purple-300">
                        <h3 className="font-medium text-purple-900">{note.title}</h3>
                        <p className="text-gray-600 mt-2">{note.content}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'discussion' && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-purple-900">Class Discussion</h3>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors flex items-center">
                        <MessageCircle size={16} className="mr-2" />
                        New Comment
                      </button>
                    </div>
                    <p className="text-gray-500 text-center py-10 bg-gray-50 rounded-lg">No comments yet for this lesson.</p>
                  </div>
                )}
                
                {activeTab === 'resources' && (
                  <div>
                    <h3 className="font-medium mb-3 text-purple-900">Lesson Resources</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center p-3 hover:bg-purple-50 rounded-md border border-purple-100 transition-colors">
                        <div className="mr-4 p-3 bg-purple-100 rounded text-purple-600 flex items-center justify-center w-12 h-12">PDF</div>
                        <div>
                          <p className="font-medium text-purple-900">Lesson Slides</p>
                          <p className="text-sm text-gray-500">2.4 MB • PDF Document</p>
                        </div>
                        <button className="ml-auto p-2 text-purple-600 hover:bg-purple-100 rounded-full transition-colors">
                          <Download size={18} />
                        </button>
                      </li>
                      <li className="flex items-center p-3 hover:bg-purple-50 rounded-md border border-purple-100 transition-colors">
                        <div className="mr-4 p-3 bg-green-100 rounded text-green-600 flex items-center justify-center w-12 h-12">ZIP</div>
                        <div>
                          <p className="font-medium text-purple-900">Code Examples</p>
                          <p className="text-sm text-gray-500">5.1 MB • ZIP Archive</p>
                        </div>
                        <button className="ml-auto p-2 text-purple-600 hover:bg-purple-100 rounded-full transition-colors">
                          <Download size={18} />
                        </button>
                      </li>
                      <li className="flex items-center p-3 hover:bg-purple-50 rounded-md border border-purple-100 transition-colors">
                        <div className="mr-4 p-3 bg-blue-100 rounded text-blue-600 flex items-center justify-center w-12 h-12">URL</div>
                        <div>
                          <p className="font-medium text-purple-900">Reference Guide</p>
                          <p className="text-sm text-gray-500">External Resource</p>
                        </div>
                        <button className="ml-auto p-2 text-purple-600 hover:bg-purple-100 rounded-full transition-colors">
                          <Share2 size={18} />
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Course Playlist Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden border border-purple-100 sticky top-6">
              <div className="p-4 border-b border-purple-100 bg-purple-50">
                <h2 className="font-bold text-purple-900">Course Content</h2>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-gray-600">9 lessons • 3 hours total</p>
                  <p className="text-sm font-medium text-purple-700">
                    {completedLessons.length} of 9 completed
                  </p>
                </div>
                <div className="mt-2 w-full bg-purple-200 rounded-full h-1.5">
                  <div className="bg-purple-600 h-1.5 rounded-full" 
                       style={{ width: `${(completedLessons.length / 9) * 100}%` }}></div>
                </div>
              </div>
              
              <div className="max-h-screen overflow-y-auto">
                {courseData.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="border-b border-purple-100 last:border-b-0">
                    <div className="p-3 bg-purple-50 font-medium text-purple-900 flex items-center justify-between">
                      <span>{module.title}</span>
                      <span className="text-xs text-purple-700">
                        {module.lessons.filter(lesson => completedLessons.includes(lesson.id)).length} / {module.lessons.length}
                      </span>
                    </div>
                    <ul>
                      {module.lessons.map(lesson => {
                        const isCompleted = completedLessons.includes(lesson.id);
                        const isActive = lesson.id === currentLesson.id;
                        
                        return (
                          <li 
                            key={lesson.id} 
                            className={`p-3 flex items-center justify-between border-t border-purple-50 cursor-pointer hover:bg-purple-50 transition-colors
                              ${isActive ? 'bg-purple-50' : ''}`}
                            onClick={() => playLesson(lesson)}
                          >
                            <div className="flex items-center flex-1 mr-2">
                              <div className={`mr-3 w-8 h-8 rounded-full flex items-center justify-center 
                                ${isActive ? 'bg-purple-600 text-white' : isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                                {isCompleted && !isActive ? (
                                  <CheckCircle size={16} />
                                ) : isActive ? (
                                  isPlaying ? <Pause size={16} /> : <Play size={16} />
                                ) : (
                                  <Play size={16} />
                                )}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className={`font-medium ${isActive ? 'text-purple-700' : isCompleted ? 'text-gray-600' : ''} truncate`}>
                                  {lesson.title}
                                </p>
                                <p className="text-xs text-gray-500">{lesson.duration}</p>
                              </div>
                            </div>
                            {isCompleted && (
                              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full whitespace-nowrap">Completed</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}