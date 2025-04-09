import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Get in Touch
          </span>{' '}
          <span className="text-gray-800">with Us</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Have any questions, feedback, or need assistance? We’re just a message away. Fill out the form below, and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-4">
              <select
                className="w-1/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-2/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select Inquiry Type</option>
              <option>Course Related</option>
              <option>Technical Support</option>
              <option>Feedback</option>
              <option>Others</option>
            </select>
            <textarea
              placeholder="Your message here..."
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              <p>
                I consent to receiving updates via email, SMS, WhatsApp, and voice call, overriding any DNC/NDNC preference.
              </p>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">Contact Information</h4>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-2">
                <Mail className="text-blue-600" size={18} />
                <a href="mailto:support@Learnity.com" className="hover:underline">
                  support@Learnity.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-blue-600" size={18} />
                <a href="tel:+919876543210" className="hover:underline">
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-blue-600" size={18} />
                <span>B Block, Sector 15, Noida, India</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6 text-gray-700">
              <a href="#" className="hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-700">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-black">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Noida%20Sector%2015&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 border rounded mt-6"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
