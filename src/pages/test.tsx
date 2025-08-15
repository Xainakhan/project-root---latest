import React, { useState } from "react";
import testDrive from "../assets/testDrive.png";
import Newsletter from "../pages/newsLetter";
import { useNavigate } from "react-router-dom";

// RADDARA Images
import raddaraVariant1 from "../assets/SelectModel.png";
import raddaraVariant2 from "../assets/SelectModel.png";
import raddaraVariant3 from "../assets/SelectModel.png";

// FORTHING Images
import forthingVariant1 from "../assets/Forthing/exterior/carBlack.png";

// JMEV Images
import jmevVariant1 from "../assets/JMEV_page/ColorSelector/black.png";

const TestDrive: React.FC = () => {
  const navigate = useNavigate();

  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherHusbandName: "",
    gender: "",
    datePrefer: "",
    primaryPhone: "",
    secondaryPhone: "",
    state: "",
    city: "",
    location: "",
    comments: "",
    termsAccepted: false,
  });

  const brands = [
    { id: "zeekr", name: "ZEEKR" },
    { id: "raddara", name: "RADDARA" },
    { id: "forthing", name: "FORTHING" },
    { id: "jmev", name: "JMEV" },
  ];

  const variants = {
    zeekr: [],
    raddara: [
      { id: "raddara-luxury", name: "RD6 4WD Ultra", subtitle: "Body Type: Truck", image: raddaraVariant1 },
      { id: "raddara-sport", name: "RD6 4WD Pro", subtitle: "Body Type: Truck", image: raddaraVariant2 },
      { id: "raddara-suv", name: "RD6 4WD Ultra", subtitle: "Body Type: Truck", image: raddaraVariant3 },
    ],
    forthing: [
      { id: "forthing-t5", name: "FORTHING Friday", subtitle: "Body Type: SUV", image: forthingVariant1 },
    ],
    jmev: [
      { id: "RD6-2WD-Air", name: "JMEV Elight", subtitle: "Body Type: Sedan", image: jmevVariant1 },
    ],
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBrandChange = (brandId: string) => {
    setSelectedBrand(brandId);
    setSelectedVariant("");
  };

  const handleSubmit = () => {
    if (!selectedBrand || !selectedVariant || !formData.firstName || !formData.lastName || !formData.primaryPhone) {
      alert("Please fill in all required fields and select brand/variant.");
      return;
    }
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    console.log("Form submitted", { selectedBrand, selectedVariant, formData });
    alert("Test drive request submitted successfully!");
  };

  const getCurrentVariants = () => selectedBrand ? variants[selectedBrand as keyof typeof variants] || [] : [];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${testDrive})` }} />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mb-6 sm:mb-8 drop-shadow-lg">
              REQUEST A TEST DRIVE
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 opacity-90 drop-shadow-md max-w-lg mx-auto px-4">
              Pick your favorite EV and schedule a test drive at a time and place that's convenient for you.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-100 min-h-screen py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">CHOOSE YOUR CAR BRAND</h2>

            {/* Brand Selection */}
            <div className="hidden sm:flex justify-center gap-0 mb-6 sm:mb-8">
              {brands.map((brand, index) => (
                <button
                  key={brand.id}
                  onClick={() => handleBrandChange(brand.id)}
                  className={`px-4 md:px-6 py-3 font-semibold transition-colors duration-200 text-sm md:text-base ${
                    selectedBrand === brand.id ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } ${index === 0 ? "rounded-l-md" : index === brands.length - 1 ? "rounded-r-md" : ""}`}
                >
                  {brand.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6 sm:hidden">
              {brands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => handleBrandChange(brand.id)}
                  className={`px-4 py-3 font-semibold transition-colors duration-200 text-sm rounded-md ${
                    selectedBrand === brand.id ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>

            {/* Variant Selection */}
            {selectedBrand && (
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-4 sm:mb-6">
                  SELECT VARIANT <span className="text-red-500">*</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getCurrentVariants().map((variant) => (
                    <div
                      key={variant.id}
                      className={`bg-white p-3 sm:p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 border-2 ${
                        selectedVariant === variant.id
                          ? "ring-2 ring-blue-500 bg-blue-50 border-blue-200"
                          : "hover:shadow-lg border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedVariant(variant.id)}
                    >
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-20 sm:h-24 object-contain mb-2"
                        onError={(e) => { e.currentTarget.src = testDrive; }}
                      />
                      <h4 className="font-bold text-gray-800 text-center text-base sm:text-lg">{variant.name}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm text-center">{variant.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Form Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                <input type="text" value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                <input type="text" value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Father/Husband Name <span className="text-red-500">*</span></label>
                <input type="text" value={formData.fatherHusbandName} onChange={(e) => handleInputChange("fatherHusbandName", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender <span className="text-red-500">*</span></label>
                <select value={formData.gender} onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white" required>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date You Prefer <span className="text-red-500">*</span></label>
                <input type="date" value={formData.datePrefer} onChange={(e) => handleInputChange("datePrefer", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Phone <span className="text-red-500">*</span></label>
                <div className="flex">
                  <select className="w-16 sm:w-20 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"><option>+92</option></select>
                  <input type="tel" value={formData.primaryPhone} onChange={(e) => handleInputChange("primaryPhone", e.target.value)}
                    className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Secondary Phone</label>
                <div className="flex">
                  <select className="w-16 sm:w-20 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"><option>+92</option></select>
                  <input type="tel" value={formData.secondaryPhone} onChange={(e) => handleInputChange("secondaryPhone", e.target.value)}
                    className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Province <span className="text-red-500">*</span></label>
                <select value={formData.state} onChange={(e) => handleInputChange("state", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white" required>
                  <option value="" disabled>Select Province</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option value="Balochistan">Balochistan</option>
                  <option value="KPK">KPK</option>
                  <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                  <option value="Azad Kashmir">Azad Kashmir</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City <span className="text-red-500">*</span></label>
                <input type="text" value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location <span className="text-red-500">*</span></label>
                <select value={formData.location} onChange={(e) => handleInputChange("location", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white" required>
                  <option value="" disabled>Select Location</option>
                  <option value="bedian road, Lahore">Bedian road, Lahore</option>
                  <option value="Gulberg Boulvard, Lahore">Gulberg Boulvard, Lahore</option>
                  <option value="Blue Area Islamabad">Blue Area Islamabad</option>
                  <option value="Clifton, Karachi">Clifton, Karachi</option>
                  <option value="North Nazimabad, Karachi">North Nazimabad, Karachi</option>
                </select>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Comments</label>
              <textarea value={formData.comments} onChange={(e) => handleInputChange("comments", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" rows={4} />
            </div>

            {/* Terms and Conditions */}
            <div className="mt-4 sm:mt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 flex-shrink-0"
                />
                <span className="text-sm text-gray-700">
                  I have read and accept{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/terms-and-conditions")}
                    className="text-blue-500 underline hover:text-blue-600"
                  >
                    Terms & Conditions
                  </button>
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="mt-6 sm:mt-8 flex justify-center sm:justify-start">
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto bg-black text-white px-8 sm:px-12 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />
      <div className="border-t border-gray-300" />
    </div>
  );
};

export default TestDrive;
