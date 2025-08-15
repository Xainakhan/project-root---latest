import React, { useState } from "react";
import testDrive from "../assets/testDrive.png";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";

// Import images for different brands and variants
// ZEEKR Images
// import zeekrVariant1 from "../assets/Forthing/exterior/carBlack.png";
// import zeekrVariant2 from "../assets/Forthing/exterior/carBlack.png";
// import zeekrVariant3 from "../assets/Forthing/exterior/carBlack.png";

// RADDARA Images
import raddaraVariant1 from "../assets/SelectModel.png";
import raddaraVariant2 from "../assets/SelectModel.png";
import raddaraVariant3 from "../assets/SelectModel.png";

//Exterior
// FORTHING Images
import forthingVariant1 from "../assets/Forthing/exterior/carBlack.png";
// import forthingVariant2 from "../assets/Forthing/exterior/carBlue.png";
// import forthingVariant3 from "../assets/Forthing/exterior/cargrey.png";

// JMEV Images (from your existing code)
import jmevVariant1 from "../assets/JMEV_page/ColorSelector/black.png";
// import jmevVariant2 from "../assets/JMEV_page/ColorSelector/blue.png";
// import jmevVariant3 from "../assets/JMEV_page/ColorSelector/green.png";

const TestDrive: React.FC = () => {
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
    zeekr: [
      // {
      //   id: "zeekr-001",
      //   name: "ZEEKR 001",
      //   subtitle: "Body Type: Sedan",
      //   image: zeekrVariant1,
      // },
      // {
      //   id: "zeekr-009",
      //   name: "ZEEKR 009",
      //   subtitle: "Body Type: ",
      //   image: zeekrVariant2,
      // },
      // {
      //   id: "zeekr-x",
      //   name: "ZEEKR X",
      //   subtitle: "Body Type: SUV",
      //   image: zeekrVariant3,
      // },
    ],
    raddara: [
      {
        id: "raddara-luxury",
        name: "RD6 4WD Ultra",
        subtitle: "Body Type: Truck",
        image: raddaraVariant1,
      },
      {
        id: "raddara-sport",
        name: "RD6 4WD Pro",
        subtitle: "Body Type: Truck",
        image: raddaraVariant2,
      },
      {
        id: "raddara-suv",
        name: "RD6 4WD Ultra",
        subtitle: "Body Type: Truck",
        image: raddaraVariant3,
      },
    ],
    forthing: [
      {
        id: "forthing-t5",
        name: "FORTHING Friday",
        subtitle: "Body Type: SUV",
        image: forthingVariant1,
      },
      // {
      //   id: "forthing-u7",
      //   name: "FORTHING U7",
      //   subtitle: "Body Type: Compact SUV",
      //   image: forthingVariant2,
      // },
      // {
      //   id: "forthing-s7",
      //   name: "FORTHING S7",
      //   subtitle: "Body Type: Sedan",
      //   image: forthingVariant3,
      // },
    ],
    jmev: [
      {
        id: "RD6-2WD-Air",
        name: "JMEV Elight",
        subtitle: "Body Type: Sedan",
        image: jmevVariant1,
      },
      // {
      //   id: "RD6-AWD-Pro",
      //   name: "RD6 AWD Pro",
      //   subtitle: "Body Type: Truck",
      //   image: jmevVariant2,
      // },
      // {
      //   id: "RD6-AWD-Ultra",
      //   name: "RD6 AWD Ultra",
      //   subtitle: "Body Type: Truck",
      //   image: jmevVariant3,
      // },
    ],
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBrandChange = (brandId: string) => {
    setSelectedBrand(brandId);
    setSelectedVariant(""); // Reset variant when brand changes
  };

  const handleSubmit = () => {
    // Basic validation
    if (!selectedBrand) {
      alert("Please select a car brand.");
      return;
    }

    if (!selectedVariant) {
      alert("Please select a car variant.");
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.primaryPhone) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    console.log("Form submitted", {
      selectedBrand,
      selectedVariant,
      formData,
    });

    // Here you can add your form submission logic
    alert("Test drive request submitted successfully!");
  };

  const getCurrentVariants = () => {
    return selectedBrand
      ? variants[selectedBrand as keyof typeof variants] || []
      : [];
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${testDrive})` }}
        />

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Main content */}
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mb-6 sm:mb-8 drop-shadow-lg">
              REQUEST A TEST DRIVE
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 opacity-90 drop-shadow-md max-w-lg mx-auto px-4">
              Pick your favorite EV and schedule a test drive at a time and
              place that's convenient for you.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-100 min-h-screen py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Choose Your Car Brand */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
              CHOOSE YOUR CAR BRAND
            </h2>
            
            {/* Desktop Brand Selection - Hidden on mobile */}
            <div className="hidden sm:flex justify-center gap-0 mb-6 sm:mb-8">
              {brands.map((brand, index) => (
                <button
                  key={brand.id}
                  onClick={() => handleBrandChange(brand.id)}
                  className={`px-4 md:px-6 py-3 font-semibold transition-colors duration-200 text-sm md:text-base ${
                    selectedBrand === brand.id
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } ${
                    index === 0
                      ? "rounded-l-md"
                      : index === brands.length - 1
                      ? "rounded-r-md"
                      : ""
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>

            {/* Mobile Brand Selection - Grid layout */}
            <div className="grid grid-cols-2 gap-2 mb-6 sm:hidden">
              {brands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => handleBrandChange(brand.id)}
                  className={`px-4 py-3 font-semibold transition-colors duration-200 text-sm rounded-md ${
                    selectedBrand === brand.id
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>

            {/* Select Variant - Only show if brand is selected */}
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
                      <div className="mb-3 sm:mb-4">
                        <img
                          src={variant.image}
                          alt={variant.name}
                          className="w-full h-20 sm:h-24 object-contain"
                          onError={(e) => {
                            // Fallback to a default image if the specific variant image fails to load
                            e.currentTarget.src = testDrive;
                          }}
                        />
                      </div>
                      <h4 className="font-bold text-gray-800 text-center text-base sm:text-lg mb-2">
                        {variant.name}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm text-center">
                        {variant.subtitle}
                      </p>
                      {selectedVariant === variant.id && (
                        <div className="mt-3 text-center"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Form Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* Father/Husband Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Father/Husband Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fatherHusbandName}
                  onChange={(e) =>
                    handleInputChange("fatherHusbandName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Date You Prefer */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date You Prefer <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.datePrefer}
                  onChange={(e) =>
                    handleInputChange("datePrefer", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* Primary Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Phone <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select className="w-16 sm:w-20 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                    <option>+92</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.primaryPhone}
                    onChange={(e) =>
                      handleInputChange("primaryPhone", e.target.value)
                    }
                    className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Secondary Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Secondary Phone
                </label>
                <div className="flex">
                  <select className="w-16 sm:w-20 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                    <option>+92</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.secondaryPhone}
                    onChange={(e) =>
                      handleInputChange("secondaryPhone", e.target.value)
                    }
                    className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* State/Province */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Province <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                  required
                >
                  <option value="" disabled>
                    Select Province
                  </option>
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option value="Balochistan">Balochistan</option>
                  <option value="KPK">KPK</option>
                  <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                  <option value="Azad Kashmir">Azad Kashmir</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              {/* Location - Full width on mobile, half on desktop */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                  required
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option value="bedian road, Lahore">
                    Bedian road, Lahore
                  </option>
                  <option value="Gulberg Boulvard, Lahore">
                    Gulberg Boulvard, Lahore
                  </option>
                  <option value="Blue Area Islamabad">
                    Blue Area Islamabad
                  </option>
                  <option value="Clifton, Karachi">Clifton, Karachi</option>
                  <option value="North Nazimabad, Karachi">
                    North Nazimabad, Karachi
                  </option>
                </select>
              </div>
            </div>

            {/* Comments - Full width */}
            <div className="mt-4 sm:mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Comments
              </label>
              <textarea
                value={formData.comments}
                onChange={(e) => handleInputChange("comments", e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Enter your comments here..."
              />
            </div>

            {/* Terms and Conditions */}
            <div className="mt-4 sm:mt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) =>
                    handleInputChange("termsAccepted", e.target.checked)
                  }
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 flex-shrink-0"
                />
                <span className="text-sm text-gray-700">
                  I have read and accept{" "}
                  <a href="#" className="text-blue-500 underline">
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
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

      {/* Newsletter Section */}
      <Newsletter />
      <div className="border-t border-gray-300" />
      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default TestDrive;