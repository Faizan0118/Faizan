import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Mail, User, MessageSquare } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Left side info */}
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-xl p-6 border border-gray-700/50 bg-gray-900/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed">
                  Have a project in mind or want to collaborate? I'd love to hear from you. Feel free to reach out using the contact form.
                </p>
              </div>
              
              <div className="rounded-xl p-6 border border-gray-700/50 bg-gray-900/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Contact Info</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-center gap-2">
                    <Mail size={18} className="text-emerald-400" />
                    faizankalim699@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="md:col-span-3">
              <div className="rounded-xl p-8 border border-gray-700/50 bg-gray-900/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-emerald-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg 
                      text-gray-300 transition-all duration-300 focus:outline-none focus:border-emerald-500/50 
                      focus:ring-1 focus:ring-emerald-500/50 placeholder:text-gray-500"
                      placeholder="Your Name"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-emerald-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg 
                      text-gray-300 transition-all duration-300 focus:outline-none focus:border-emerald-500/50 
                      focus:ring-1 focus:ring-emerald-500/50 placeholder:text-gray-500"
                      placeholder="Your Email"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-4">
                      <MessageSquare className="h-5 w-5 text-emerald-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg 
                      text-gray-300 transition-all duration-300 focus:outline-none focus:border-emerald-500/50 
                      focus:ring-1 focus:ring-emerald-500/50 placeholder:text-gray-500"
                      placeholder="Your Message"
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium 
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] 
                    hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;