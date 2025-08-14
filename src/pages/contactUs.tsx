import React, { useState } from "react";
import { Facebook, Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";
interface FormData {
  name: string;
  emailPhone: string;
  invoiceNo: string;
  city: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    emailPhone: "",
    invoiceNo: "",
    city: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* Left side - Contact Info */}
        <div className="w-full lg:w-1/2 bg-white relative">
          {/* GET IN TOUCH WITH US strip - positioned at the right edge */}
          <div className="lg:absolute lg:top-24 lg:right-0 bg-black text-white py-2 px-4 lg:px-16 lg:z-10">
            <div className="text-xs font-light tracking-wider whitespace-nowrap">
              GET IN TOUCH WITH US • GET IN TOUCH WITH US • GET IN TOUCH WITH US
              • GET IN TOUCH WITH US • GET IN TOUCH WITH US • GET IN TOUCH WITH
              US •
            </div>
          </div>

          {/* Contact Information - positioned much lower */}
          <div className="pt-8 lg:pt-19 px-4 lg:pl-12 lg:pr-8" style={{ marginTop: "0px" }}>
            <div className="lg:mt-44">
              {/* First Row - Email and Phone */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 mb-8 lg:mb-16">
                <div>
                  <h3 className="text-lg font-bold mb-1 uppercase flex items-center">
                    <Mail size={16} className="mr-2" />
                    EMAIL
                  </h3>
                  <p className="text-gray-600 text-sm">info@hrl-csm.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 uppercase">PHONE</h3>
                  <p className="text-gray-600 text-sm">111-457-276</p>
                </div>
              </div>

              {/* Second Row - Address and Social */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20">
                <div>
                  <h3 className="text-lg font-bold mb-1 uppercase">ADDRESS</h3>
                  <p className="text-gray-600 text-sm">
                    10th Floor, Tricon Corporate Centre, block H Gulberg II, Lahore, Pakistan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 uppercase">
                    WE ARE SOCIAL
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href="https://www.facebook.com/profile.php?id=61574102049787"
                      className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Facebook size={16} className="text-gray-600" />
                    </a>
                    <a
                      href="https://www.instagram.com/hrl_csm/"
                      className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Instagram size={16} className="text-gray-600" />
                    </a>
                    <a
                      href="https://www.youtube.com/@CapitalSmartMotors"
                      className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Youtube size={18} className="text-gray-600" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/capitalsmartmotors"
                      className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Linkedin size={16} className="text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 bg-gray-200 p-4 lg:p-12">
          <div className="max-w-md pt-4 lg:pt-8">
            <h2 className="text-2xl font-bold text-black mb-1">WE'D LOVE TO</h2>
            <h2 className="text-2xl font-bold text-black mb-8">
              HEAR FROM YOU.
            </h2>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-black mb-2 italic">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-black pb-1 text-black placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* Email / Phone No. */}
              <div>
                <label className="block text-sm font-medium text-black mb-2 italic">
                  Email / Phone No. *
                </label>
                <input
                  type="text"
                  name="emailPhone"
                  value={formData.emailPhone}
                  onChange={handleInputChange}
                  placeholder="Enter your email or phone number"
                  className="w-full bg-transparent border-b border-black pb-1 text-black focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* Invoice No. */}
              <div>
                <label className="block text-sm font-medium text-black mb-2 italic">
                  Invoice No. *
                </label>
                <input
                  type="text"
                  name="invoiceNo"
                  value={formData.invoiceNo}
                  onChange={handleInputChange}
                  placeholder="Enter your invoice number"
                  className="w-full bg-transparent border-b border-black pb-1 text-black focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-black mb-2 italic">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  className="w-full bg-transparent border-b border-black pb-1 text-black focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-black mb-2 italic">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Explain your query in detail"
                  rows={3}
                  className="w-full bg-transparent border-b border-black pb-1 text-black resize-none focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8 flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-transparent border border-black px-6 py-2 text-black font-medium hover:bg-black hover:text-white transition-colors duration-300 flex items-center text-sm"
                >
                  SUBMIT
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <div className="border-t border-gray-300" />
      {/* <Footer /> */}
    </>
  );
};

export default ContactForm;