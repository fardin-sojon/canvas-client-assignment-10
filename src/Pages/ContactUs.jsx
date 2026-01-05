import React from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    Swal.fire({
      title: "Message Sent!",
      text: "We will get back to you soon.",
      icon: "success",
      confirmButtonText: "Cool",
    });
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Contact Info */}
        <div className="bg-blue-600 text-white p-10 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="opacity-90 mb-8">
            Have questions or feedback? We'd love to hear from you. Fill out the
            form or reach out via email.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📧</span>
              <p className="text-lg">support@canvasconnect.com</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📍</span>
              <p className="text-lg">123 Art Street, Creative City</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-10 md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
