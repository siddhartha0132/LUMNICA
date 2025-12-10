// src/pages/Contact.jsx

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F6F4] text-[#1E3A34] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-7xl mb-4 text-[#1E3A34] tracking-tighter">
              Connect With Us
            </h1>
            <p className="text-xl font-light italic text-[#A68A6A]">
              We're here to answer your questions about our rituals and products.
            </p>
        </div>

        {/* Grid: Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="p-8 border-r border-[#EBE8E4]">
                <h2 className="font-serif text-3xl mb-6 text-[#1E3A34]">Reach Out</h2>

                <div className="space-y-6 text-lg">
                    <p>
                        <span className="font-semibold text-[#A68A6A]">General Inquiries:</span><br />
                        <a href="mailto:hello@lumnica.com" className="hover:underline">hello@lumnica.com</a>
                    </p>

                    <p>
                        <span className="font-semibold text-[#A68A6A]">Customer Support:</span><br />
                        <a href="mailto:support@lumnica.com" className="hover:underline">support@lumnica.com</a>
                    </p>

                    <p>
                        <span className="font-semibold text-[#A68A6A]">Press & Media:</span><br />
                        <a href="mailto:media@lumnica.com" className="hover:underline">media@lumnica.com</a>
                    </p>
                </div>
                
                <h3 className="font-serif text-2xl mt-12 mb-4 text-[#1E3A34]">Our Studio</h3>

                <p className="text-[#1E3A34]/70 leading-relaxed">
                    Lumnica Global Headquarters <br />
                    1405 Botanical Drive, Suite 200 <br />
                    The Natural Quarter, CA 90210
                </p>
                
                <p className="mt-8 font-medium text-[#1E3A34]">
                    Office Hours: Mon - Fri, 9am - 5pm EST
                </p>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col gap-6 p-8">
                
                <h2 className="font-serif text-3xl mb-4 text-[#1E3A34]">Send a Message</h2>
                
                {/* Input Fields */}
                <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-transparent border-b border-[#EBE8E4] py-4 text-[#1E3A34] outline-none placeholder:text-[#1E3A34]/50 transition focus:border-[#A68A6A]"
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border-b border-[#EBE8E4] py-4 text-[#1E3A34] outline-none placeholder:text-[#1E3A34]/50 transition focus:border-[#A68A6A]"
                />

                <textarea
                    placeholder="Your Inquiry or Message"
                    rows="5"
                    className="bg-transparent border-b border-[#EBE8E4] py-4 text-[#1E3A34] outline-none placeholder:text-[#1E3A34]/50 transition focus:border-[#A68A6A] resize-none"
                ></textarea>

                {/* Submit Button */}
                <button 
                    className="mt-6 py-4 uppercase tracking-widest text-sm font-medium text-[#1E3A34] border border-[#1E3A34]/50 transition duration-300 hover:bg-[#1E3A34] hover:text-white hover:border-[#1E3A34]"
                >
                    Submit Request
                </button>

            </form>

        </div>
      </div>
    </div>
  );
}
