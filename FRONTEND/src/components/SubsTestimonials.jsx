import React from 'react'

const SubsTestimonials = () => {
  return (
    <div className="mt-16 px-4 text-center">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">What Our Learners Say</h3>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Aman Sharma",
          feedback: "The Pro Plan was totally worth it! Great content and support.",
        },
        {
          name: "Sneha Patil",
          feedback: "I started with Free, but Premium gave me mentorship and certificates.",
        },
        {
          name: "Rahul Nair",
          feedback: "Smooth learning experience, loved the downloadable resources!",
        },
      ].map((t, i) => (
        <div key={i} className="bg-white border p-4 rounded-xl shadow-sm">
          <p className="italic text-gray-600 mb-2">“{t.feedback}”</p>
          <p className="font-semibold text-purple-700">— {t.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default SubsTestimonials
