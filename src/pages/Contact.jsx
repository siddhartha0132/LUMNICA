// src/pages/Contact.jsx

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F6F4] text-[#1E3A34] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-6xl md:text-7xl mb-4 tracking-tighter">
            Connect With Us
          </h1>
          <p className="text-xl font-light italic text-[#A68A6A]">
            We’re here to help with your inquiries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* Contact Information */}
          <div className="p-8 border-r border-[#EBE8E4]">

            <h2 className="font-serif text-3xl mb-6">General Enquiry</h2>

            <div className="space-y-6 text-lg">
              <p>
                <span className="font-semibold text-[#A68A6A]">Email:</span><br />
                <a href="mailto:contact@lumnica.com" className="hover:underline">
                  contact@lumnica.com
                </a>
              </p>

              <p>
                <span className="font-semibold text-[#A68A6A]">Phone:</span><br />
                <a href="tel:6376414576" className="hover:underline">
                  6376414576
                </a>
              </p>
            </div>

            <h3 className="font-serif text-2xl mt-12 mb-4">Our Studio</h3>

            <p className="text-[#1E3A34]/70 leading-relaxed">
              Jaipur, Rajasthan, India
            </p>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-6 p-8">

            <h2 className="font-serif text-3xl mb-4">Send a Message</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-b border-[#EBE8E4] py-4 outline-none placeholder:text-[#1E3A34]/50 focus:border-[#A68A6A]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b border-[#EBE8E4] py-4 outline-none placeholder:text-[#1E3A34]/50 focus:border-[#A68A6A]"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="bg-transparent border-b border-[#EBE8E4] py-4 outline-none placeholder:text-[#1E3A34]/50 focus:border-[#A68A6A] resize-none"
            ></textarea>

            <button
              className="mt-6 py-4 uppercase tracking-widest text-sm font-medium border border-[#1E3A34]/50 hover:bg-[#1E3A34] hover:text-white transition"
            >
              Submit Request
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
