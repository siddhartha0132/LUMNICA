import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null); // success | error

  const handleSubmit = (e) => {
    setStatus("success");

    // Clear fields after submit (luxury behaviour)
    setTimeout(() => {
      e.target.reset();
    }, 100);

    // Auto-hide message
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F4] text-[#1E3A34] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="font-serif text-6xl md:text-7xl mb-4 tracking-tighter">
            Connect With Us
          </h1>
          <p className="text-xl font-light italic text-[#A68A6A]">
            We’re here to help with your inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* Contact Info */}
          <div className="p-8 md:border-r border-[#EBE8E4]">
            <h2 className="font-serif text-3xl mb-6">General Enquiry</h2>

            <div className="space-y-6 text-lg">
              <p>
                <span className="font-semibold text-[#A68A6A]">Email:</span><br />
                contact@lumnica.com
              </p>

              <p>
                <span className="font-semibold text-[#A68A6A]">Phone:</span><br />
                6376414576
              </p>
            </div>

            <h3 className="font-serif text-2xl mt-12 mb-4">Our Main Branch</h3>
            <p className="text-[#1E3A34]/70">Jaipur, Rajasthan, India</p>
          </div>

          {/* Form */}
          <div className="relative p-8">
            <h2 className="font-serif text-3xl mb-4">Send a Message</h2>

            {/* Status Message */}
            {status === "success" && (
              <div className="absolute -top-10 left-0 text-sm tracking-wide text-[#A68A6A] animate-fadeIn">
                Your message has been received. Our team will connect with you shortly.
              </div>
            )}

            {status === "error" && (
              <div className="absolute -top-10 left-0 text-sm tracking-wide text-red-500 animate-fadeIn">
                Something went wrong. Please try again.
              </div>
            )}

            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSfzE6oxw-bVQf4Tx82ZLcQg2TI_-j24uMlleFd_9w9EqEVoxQ/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <input
                name="entry.1751266335"
                type="text"
                placeholder="Full Name"
                className="bg-transparent border-b border-[#EBE8E4] py-4 outline-none placeholder:text-[#1E3A34]/50 focus:border-[#A68A6A]"
                required
              />

              <input
                name="entry.925844560"
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-[#EBE8E4] py-4 outline-none placeholder:text-[#1E3A34]/50 focus:border-[#A68A6A]"
                required
              />

              <textarea
                name="entry.1409352556"
                placeholder="Your Message"
                rows="5"
                className="bg-transparent border-b border-[#EBE8E4] py-4 outline-none placeholder:text-[#1E3A34]/50 focus:border-[#A68A6A] resize-none"
                required
              />

              <button className="mt-6 py-4 uppercase tracking-widest text-sm font-medium border border-[#1E3A34]/50 hover:bg-[#1E3A34] hover:text-white transition">
                Submit Request
              </button>
            </form>
          </div>

          <iframe name="hidden_iframe" style={{ display: "none" }} />

        </div>
      </div>
    </div>
  );
}