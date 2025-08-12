import { useState } from "react";
import { Share2 } from "lucide-react";
import bannerImg from "../assets/CarrerBanner.png";
import career from "../assets/career.png";
import careerBanner from "../assets/CarrerBanner.png";
import SuccessPopup from "../pages/career3";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";

export const CombinedCareer = () => {
  const [showCareerPage, setShowCareerPage] = useState(false);

  // --- Career Page State ---
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    phone: "",
    city: "",
  });

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Uploaded File:", uploadedFile);
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      fatherName: "",
      phone: "",
      city: "",
    });
    setUploadedFile(null);
  };

  // -------------------------

  if (showCareerPage) {
    return (
      <div className="font-sans text-gray-800">
        {showSuccessPopup && <SuccessPopup onClose={closeSuccessPopup} onNavigateToFAQ={function (): void {
          throw new Error("Function not implemented.");
        } } onNavigateToNewModels={function (): void {
          throw new Error("Function not implemented.");
        } } />}

        {/* Banner */}
        <div className="relative">
          <img
            src={careerBanner}
            alt="Career Banner"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-start bg-black bg-opacity-30 p-6">
            <h1 className="text-white text-lg md:text-xl font-semibold">
              WE ARE HIRING
            </h1>
          </div>
        </div>

        {/* Job Section */}
        <div className="container mx-auto px-4 py-9">
          <p className="text-sm mb-2">23-06-2025</p>
          <h2 className="text-2xl font-bold mb-6">Executive - Parts</h2>

          <div className="flex flex-col lg:flex-row gap-0 items-start">
            {/* Job Image */}
            <div className="flex-1">
              <img
                src={career}
                alt="Hiring"
                className="w-full object-cover border border-gray-200"
              />
            </div>

            {/* Form */}
            <div
              className="flex-1 bg-gray-200 border border-gray-100 max-w-md flex flex-col mt-16"
              style={{ height: "calc(100% - 16px)" }}
            >
              <h3 className="font-bold text-lg mb-7 px-6 mt-6">
                WE'D LOVE TO HEAR ABOUT YOU.
              </h3>
              <div className="space-y-4 px-6 pb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent"
                />
                <input
                  type="text"
                  name="fatherName"
                  placeholder="Father Name"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent"
                />

                {/* File Upload */}
                <div className="w-full border border-gray-300 p-4 text-center text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors relative">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  <div className="pointer-events-none">
                    {uploadedFile ? (
                      <span className="text-green-600">
                        ✓ {uploadedFile}
                      </span>
                    ) : (
                      <>📎 Click To Upload Document</>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-2 hover:bg-gray-800 transition mt-6"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>

        <Newsletter />
        <div className="border-t border-gray-300" />
        {/* <Footer /> */}
      </div>
    );
  }

  // --------- Job Posting (Initial Page) ----------
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerImg}
          alt="We are hiring"
          className="w-full h-60 object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
          WE ARE HIRING
        </div>
      </div>

      <div className="h-20"></div>

      {/* Job Details */}
      <div className="relative pl-4 pr-6 max-w-full">
        <button className="absolute -top-1 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Share2 size={30} className="text-gray-600" />
        </button>

        <div className="text-left">
          <p className="text-sm text-gray-500 mb-2">23-06-2025</p>
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">
            Executive - Parts
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Lhr &nbsp;&nbsp;&nbsp;&nbsp; 3-5 Years Experience &nbsp;&nbsp;&nbsp;&nbsp; Deadline: Aug 1,2025
          </p>

          <div className="space-y-1 text-sm text-gray-800 leading-relaxed">
            <p className="mb-4 break-words text-left">
              Manage Daily Issuance And Return Of Parts And Consumables, Ensure Accurate EPIP 
              Entries, Bin Maintenance, And <br />Labeling Of EV Parts, Monitor Stock Levels Of High-Demand 
              Items Like Battery Packs And Connectors.
            </p>

            {/* Clicking here loads CareerPage */}
            <div
              onClick={() => setShowCareerPage(true)}
              className="cursor-pointer py-4 select-none text-left text-blue-600 hover:underline"
            >
              Tap to view more details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedCareer;
