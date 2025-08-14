import React, { useState, useRef } from "react";
import {
  Upload,
  ChevronLeft,
  Download,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import TermsAndConditions from "../pages/termsAndConditions";
import emailjs from "@emailjs/browser";

// Mock image URLs
import testDrive from "../assets/testDrive.png";
import car1 from "../assets/JMEV_page/ColorSelector/black.png";
// import car2 from "../assets/JMEV_page/ColorSelector/blue.png";
// import car3 from "../assets/JMEV_page/ColorSelector/green.png";
import img1 from "../assets/JMEV/exterior/black.png";
import img2 from "../assets/JMEV/exterior/blue.png";
import img3 from "../assets/JMEV/exterior/green.png";
import img4 from "../assets/JMEV/exterior/white.png";
import img5 from "../assets/JMEV_page/ColorSelector/Purple.png";

import interiorblack from "../assets/JMEV_page/interior/black.png";
import interiorbrown from "../assets/JMEV_page/interior/brown.png";


// =========================
// EmailJS Configuration
// =========================
const EMAIL_SERVICE_CONFIG = {
  serviceId: "service_mjm7lw4",
  templateId: "template_kykqidq",
  publicKey: "3CE34DLDJCls1aIFf",
};

// =========================
// Types & Helpers (hoisted)
// =========================
type ExteriorColor =
  | "blue"
  | "purple"
  | "green"
  | "black"
  | "white";
type InteriorColor = "black" | "brown";

type ExteriorRestrictions = {
  [key in ExteriorColor]: InteriorColor[];
};

type ModelRestriction = {
  exterior: ExteriorRestrictions;
};

type ModelRestrictions = {
  [model: string]: ModelRestriction;
};

interface OrderData {
  selectedCar: string;
  selectedExteriorColor: string;
  selectedInteriorColor: string;
  selectedBrand: string;
  formData: {
    firstName: string;
    lastName: string;
    fatherHusbandName: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    primaryPhone: string;
    secondaryPhone: string;
    state: string;
    city: string;
    addressCNIC: string;
    individualCorporate: string;
    cnic: string;
    cnicFrontImage: File | null;
    cnicBackImage: File | null;
    statusFilter: string;
    salesTaxRegistration: string;
    ntnNumber: string;
    advancePayment: string;
    comments: string;
    termsAccepted: boolean;
  };
}

const generateBookingId = () =>
  "CSM-" +
  Date.now().toString().slice(-8) +
  Math.random().toString(36).substr(2, 4).toUpperCase();

const calculateBasePrice = (carId: string): number => {
  const prices: Record<string, number> = {
    "RD6-2WD-Air": 7500000,
    // "RD6-AWD-Pro": 8250000,
    // "RD6-AWD-Ultra": 8990000,
  };
  return prices[carId] ?? 8990000;
};

const getCarName = (carId: string): string => {
  const carNames: Record<string, string> = {
    "RD6-2WD-Air": "RD6 2WD Air",
    // "RD6-AWD-Pro": "RD6 AWD Pro",
    // "RD6-AWD-Ultra": "RD6 AWD Ultra",
  };
  return carNames[carId] || carId;
};

const calculateAdvanceAmount = (orderData: OrderData): number => {
  const basePrice = calculateBasePrice(orderData.selectedCar);
  const percentage = parseInt(orderData.formData.advancePayment) || 20;
  return Math.floor(basePrice * (percentage / 100));
};

const calculateRemainingAmount = (orderData: OrderData): number => {
  const basePrice = calculateBasePrice(orderData.selectedCar);
  const advanceAmount = calculateAdvanceAmount(orderData);
  return basePrice - advanceAmount;
};

const sendVerificationEmail = async (orderData: OrderData) => {
  const bookingId = generateBookingId();
  const basePrice = calculateBasePrice(orderData.selectedCar);
  const advanceAmount = calculateAdvanceAmount(orderData);
  const remainingAmount = calculateRemainingAmount(orderData);
  const currentDate = new Date().toLocaleDateString("en-GB");

  const templateParams = {
    // Customer Info
    firstName: orderData.formData.firstName,
    lastName: orderData.formData.lastName,
    customerEmail: orderData.formData.email,
    fatherHusbandName: orderData.formData.fatherHusbandName,
    gender: orderData.formData.gender,
    dateOfBirth: orderData.formData.dateOfBirth,
    cnic: orderData.formData.cnic,

    // Vehicle Info
    selectedBrand: orderData.selectedBrand,
    selectedCar: getCarName(orderData.selectedCar),
    selectedExteriorColor: orderData.selectedExteriorColor,
    selectedInteriorColor: orderData.selectedInteriorColor,

    // Contact Info
    primaryPhone: orderData.formData.primaryPhone,
    secondaryPhone: orderData.formData.secondaryPhone || "Not provided",
    addressCNIC: orderData.formData.addressCNIC,
    city: orderData.formData.city,
    state: orderData.formData.state,

    // Business Info
    individualCorporate: orderData.formData.individualCorporate,
    salesTaxRegistration:
      orderData.formData.salesTaxRegistration || "Not provided",
    ntnNumber: orderData.formData.ntnNumber || "Not provided",
    statusFilter: orderData.formData.statusFilter || "Not specified",

    // Payment Info
    advancePayment: orderData.formData.advancePayment,
    basePrice: basePrice.toLocaleString(),
    advanceAmount: advanceAmount.toLocaleString(),
    remainingAmount: remainingAmount.toLocaleString(),

    // Additional Info
    comments: orderData.formData.comments || "No comments",
    cnicFrontImage: orderData.formData.cnicFrontImage ? "Uploaded ✓" : "Not uploaded ✗",
    cnicBackImage: orderData.formData.cnicBackImage ? "Uploaded ✓" : "Not uploaded ✗",

    // System Info
    bookingId,
    bookingDate: currentDate,

    // Emails for reply
    supportEmail: "support@hrl-csm.com",
    bookingEmail: "bookings@hrl-csm.com",
  };

  try {
    const response = await emailjs.send(
      EMAIL_SERVICE_CONFIG.serviceId,
      EMAIL_SERVICE_CONFIG.templateId,
      templateParams,
      EMAIL_SERVICE_CONFIG.publicKey
    );
    return { success: true, bookingId, response };
  } catch (error) {
    return { success: false, bookingId, error };
  }
};

// =========================
// Component Code
// =========================

const bannerImage = testDrive;

const EVTestDrive: React.FC<{ onSubmit: (data: OrderData) => void }> = ({
  onSubmit,
}) => {
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [selectedExteriorColor, setSelectedExteriorColor] = useState<string>("");
  const [selectedInteriorColor, setSelectedInteriorColor] = useState<string>("");
  const [selectedBrand] = useState<string>("JMEV");
  const [colorSliderIndex, setColorSliderIndex] = useState<number>(0);
  const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);

  const getVisibleItemsCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2;
      if (window.innerWidth < 768) return 3;
      return 4;
    }
    return 4;
  };

  const getItemWidth = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 140;
      if (window.innerWidth < 768) return 160;
      return 180;
    }
    return 180;
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherHusbandName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    primaryPhone: "",
    secondaryPhone: "",
    state: "",
    city: "",
    addressCNIC: "",
    individualCorporate: "",
    cnic: "",
    cnicFrontImage: null as File | null,
    cnicBackImage: null as File | null,
    statusFilter: "",
    salesTaxRegistration: "",
    ntnNumber: "",
    advancePayment: "",
    comments: "",
    termsAccepted: false,
  });

  const cars = [
    { id: "RD6-2WD-Air", name: "Elite", subtitle: "Body Type : Sedan", image: car1, price: "7500000" },
    // { id: "RD6-AWD-Pro", name: "RD6 AWD Pro", subtitle: "Body Type : Truck", image: car2, price: "8250000" },
    // { id: "RD6-AWD-Ultra", name: "RD6 AWD Ultra", subtitle: "Body Type : Truck", image: car3, price: "8990000" },
  ];

  // FIXED: "whiteB" consistent with restrictions
  const allExteriorColors = [
    { id: "blue", name: "Blue", image: img2 },
    { id: "purple", name: "Purple", image: img5 },
    { id: "green", name: "Green", image: img3 },
    { id: "black", name: "Black", image: img1 },
    { id: "white", name: "White", image: img4 },
  ];

  const allInteriorColors = [
    { id: "black", name: "Black", image: interiorblack },
    { id: "brown", name: "Brown", image: interiorbrown },
  ];

  const modelRestrictions: ModelRestrictions = {
    "RD6-2WD-Air": {
      exterior: {
        blue: ["black", "brown"],
        purple: ["black", "brown"],
        green: ["black", "brown"],
        black: ["black", "brown"],
        white: ["black", "brown"],
      },
    },
    // 
  };

  const getAvailableExteriorColors = () => {
    if (!selectedCar) return allExteriorColors;
    return allExteriorColors.filter(
      (color) => color.id in modelRestrictions[selectedCar].exterior
    );
  };

  const getAvailableInteriorColors = () => {
    if (!selectedCar || !selectedExteriorColor) return [];
    const carRestrictions = modelRestrictions[selectedCar];
    if (!carRestrictions) return [];
    const exteriorRestrictions = carRestrictions.exterior;
    const allowedInteriorIds =
      exteriorRestrictions[selectedExteriorColor as ExteriorColor];
    if (!allowedInteriorIds) return [];
    return allInteriorColors.filter((interior) =>
      allowedInteriorIds.includes(interior.id as InteriorColor)
    );
  };

  const handleCarSelection = (carId: string) => {
    setSelectedCar(carId);
    setSelectedExteriorColor("");
    setSelectedInteriorColor("");
    setColorSliderIndex(0);
  };

  const handleExteriorColorSelection = (colorId: string) => {
    setSelectedExteriorColor(colorId);
    setSelectedInteriorColor("");
  };

  const nextColor = () => {
    const availableColors = getAvailableExteriorColors();
    const visibleItems = getVisibleItemsCount();
    const maxIndex = Math.max(0, availableColors.length - visibleItems);
    setColorSliderIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevColor = () => {
    setColorSliderIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleInputChange = (
    field: string,
    value: string | boolean | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] || null;
    handleInputChange(field, file);
  };

  const handleTermsClick = () => setShowTermsAndConditions(true);
  const handleBackFromTerms = () => setShowTermsAndConditions(false);

  const handleSubmit = () => {
    if (!selectedCar || !selectedExteriorColor || !selectedInteriorColor) {
      alert("Please select a car, exterior color, and interior color.");
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.primaryPhone) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!formData.email) {
      alert("Please provide your email address.");
      return;
    }
    if (!formData.advancePayment) {
      alert("Please select an advance payment percentage.");
      return;
    }
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    onSubmit({
      selectedCar,
      selectedExteriorColor,
      selectedInteriorColor,
      selectedBrand,
      formData,
    });
  };

  if (showTermsAndConditions) {
    return (
      <div className="relative w-full h-screen">
        <TermsAndConditions />
        <button
          onClick={handleBackFromTerms}
          className="fixed top-24 left-6 z-[999] flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 border border-gray-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Go Back</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-2xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-8 drop-shadow-lg">
              BOOK YOUR DREAM CAR
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-90 drop-shadow-md max-w-lg mx-auto">
              Pick your favorite EV and make it yours with proper convenience
              and ease.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Step 1: Choose Your Car */}
          <div className="bg-gray-200/50 p-8 rounded-lg mb-8 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90">
              <div className="flex items-center">
                <span className="text-gray-500/40 text-2xl font-bold tracking-widest mr-2">
                  STEP
                </span>
                <span className="text-gray-500/40 text-5xl font-bold">1</span>
              </div>
            </div>
            <div className="ml-28 flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                CHOOSE YOUR CAR
              </h2>
            </div>
            <div className="ml-28 flex justify-center">
              <button className="px-8 py-3 text-sm font-semibold rounded-md bg-black text-white cursor-default">
                JMEV 
              </button>
            </div>
            <div className="ml-28 mt-12">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                SELECT VARIANT <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                      selectedCar === car.id
                        ? "ring-2 ring-blue-500 bg-blue-50"
                        : "hover:shadow-lg"
                    }`}
                    onClick={() => handleCarSelection(car.id)}
                  >
                    <div className="mb-4">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-24 object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 text-center text-lg mb-2">
                      {car.name}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {car.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Exterior Color */}
          {selectedCar && (
            <div className="bg-gray-200/50 p-8 rounded-lg mb-8 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90">
                <div className="flex items-center">
                  <span className="text-gray-500/40 text-2xl font-bold tracking-widest mr-2">
                    STEP
                  </span>
                  <span className="text-gray-500/40 text-5xl font-bold">2</span>
                </div>
              </div>
              <div className="ml-28">
                <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                  EXTERIOR COLOR <span className="text-red-500">*</span>
                </h3>
                <div className="relative w-full">
                  <div className="flex items-center">
                    <button
                      onClick={prevColor}
                      className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex-shrink-0 z-10 ${
                        colorSliderIndex === 0
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={colorSliderIndex === 0}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex-1 mx-4 overflow-hidden">
                      <div
                        className="flex gap-4 transition-transform duration-300 ease-in-out"
                        style={{
                          transform: `translateX(-${
                            colorSliderIndex * getItemWidth()
                          }px)`,
                        }}
                      >
                        {getAvailableExteriorColors().map((color) => (
                          <div
                            key={color.id}
                            className={`bg-white p-3 sm:p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 flex-shrink-0 w-32 sm:w-36 md:w-40 ${
                              selectedExteriorColor === color.id
                                ? "ring-2 ring-blue-500 bg-blue-50"
                                : "hover:shadow-lg"
                            }`}
                            onClick={() =>
                              handleExteriorColorSelection(color.id)
                            }
                          >
                            <div className="mb-3 h-20 sm:h-24 flex items-center justify-center overflow-hidden rounded">
                              <img
                                src={color.image}
                                alt={color.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-gray-800 text-center font-semibold text-xs sm:text-sm">
                              {color.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={nextColor}
                      className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex-shrink-0 z-10 ${
                        colorSliderIndex >=
                        getAvailableExteriorColors().length -
                          getVisibleItemsCount()
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={
                        colorSliderIndex >=
                        getAvailableExteriorColors().length -
                          getVisibleItemsCount()
                      }
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Interior Color */}
          {selectedCar && selectedExteriorColor && (
            <div className="bg-gray-200/50 p-8 rounded-lg mb-8 relative">
              <div className="ml-28">
                <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                  INTERIOR COLOR <span className="text-red-500">*</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {getAvailableInteriorColors().map((color) => (
                    <div
                      key={color.id}
                      className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                        selectedInteriorColor === color.id
                          ? "ring-2 ring-blue-500 bg-blue-50"
                          : "hover:shadow-lg"
                      }`}
                      onClick={() => setSelectedInteriorColor(color.id)}
                    >
                      <div className="mb-4 overflow-hidden rounded">
                        <img
                          src={color.image}
                          alt={color.name}
                          className="w-full h-32 object-contain"
                        />
                      </div>
                      <p className="text-gray-800 text-center font-semibold">
                        {color.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Complete Form */}
          <div className="bg-gray-200/50 p-8 rounded-lg relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90">
              <div className="flex items-center">
                <span className="text-gray-500/40 text-2xl font-bold tracking-widest mr-2">
                  STEP
                </span>
                <span className="text-gray-500/40 text-5xl font-bold">3</span>
              </div>
            </div>
            <div className="ml-28">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="example@email.com"
                      required
                    />
                  </div>

                  {/* Primary Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Primary Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <select className="w-20 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
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
                      <select className="w-20 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
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

                  {/* Province */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Province <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                  </div>

                  {/* Address as per CNIC (FIXED binding) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address As Per CNIC <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.addressCNIC}
                      onChange={(e) =>
                        handleInputChange("addressCNIC", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Address as per CNIC"
                      required
                    />
                  </div>

                  {/* Individual/Corporate */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Individual/Corporate <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.individualCorporate}
                      onChange={(e) =>
                        handleInputChange("individualCorporate", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Individual">Individual</option>
                      <option value="Corporate">Corporate</option>
                    </select>
                  </div>

                  {/* CNIC */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CNIC <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.cnic}
                      onChange={(e) =>
                        handleInputChange("cnic", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="e.g. 12345-1234567-1"
                      required
                    />
                  </div>

                  {/* CNIC Front Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CNIC Front Image <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("cnicFrontImage", e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="cnicFrontImage"
                      />
                      <label
                        htmlFor="cnicFrontImage"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500 focus-within:ring-2 focus-within:ring-blue-500 text-sm hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                      >
                        <span>
                          {formData.cnicFrontImage
                            ? formData.cnicFrontImage.name
                            : "Upload/ Select"}
                        </span>
                        <Upload className="w-4 h-4" />
                      </label>
                    </div>
                  </div>

                  {/* CNIC Back Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CNIC Back Image <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("cnicBackImage", e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="cnicBackImage"
                      />
                      <label
                        htmlFor="cnicBackImage"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500 focus-within:ring-2 focus-within:ring-blue-500 text-sm hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                      >
                        <span>
                          {formData.cnicBackImage
                            ? formData.cnicBackImage.name
                            : "Upload/ Select"}
                        </span>
                        <Upload className="w-4 h-4" />
                      </label>
                    </div>
                  </div>

                  {/* Status (filler non-filler) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Status (filler non-filler)
                    </label>
                    <select
                      value={formData.statusFilter}
                      onChange={(e) =>
                        handleInputChange("statusFilter", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="" disabled>
                        Select yes or no
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* Sales Tax Registration */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sales Tax Registration
                    </label>
                    <input
                      type="text"
                      value={formData.salesTaxRegistration}
                      onChange={(e) =>
                        handleInputChange(
                          "salesTaxRegistration",
                          e.target.value
                        )
                      }
                      disabled={formData.statusFilter === "No"}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-100"
                    />
                  </div>

                  {/* NTN Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      NTN Number
                    </label>
                    <input
                      type="text"
                      value={formData.ntnNumber}
                      onChange={(e) =>
                        handleInputChange("ntnNumber", e.target.value)
                      }
                      disabled={formData.statusFilter === "No"}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-100"
                    />
                  </div>

                  {/* Advance Payment */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Advance Payment <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.advancePayment}
                      onChange={(e) =>
                        handleInputChange("advancePayment", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white disabled:bg-gray-100"
                    >
                      <option value="">Select</option>
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                      <option value="30">30%</option>
                      <option value="40">40%</option>
                      <option value="50">50%</option>
                      <option value="60">60%</option>
                    </select>
                  </div>
                </div>

                {/* Comments */}
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Comments
                  </label>
                  <textarea
                    value={formData.comments}
                    onChange={(e) =>
                      handleInputChange("comments", e.target.value)
                    }
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Enter your comments here..."
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="mt-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) =>
                        handleInputChange("termsAccepted", e.target.checked)
                      }
                      className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I have read and accept{" "}
                      <button
                        type="button"
                        onClick={handleTermsClick}
                        className="text-blue-500 underline hover:text-blue-600"
                      >
                        Terms & Conditions
                      </button>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-start">
                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-12 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderReview: React.FC<{
  orderData: OrderData;
  onBackToVehicle: () => void;
}> = ({ orderData, onBackToVehicle }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleUploadClick = () => fileInputRef.current?.click();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]);
    }
  };

  // Vehicle & color lists (ids/images aligned with EVTestDrive)
  const cars = [
    { id: "RD6-2WD-Air", name: "Elite", subtitle: "Body Type : Sedan", image: car1, price: "7500000" },
    // { id: "RD6-AWD-Pro", name: "RD6 AWD Pro", subtitle: "Body Type : Truck", image: car2, price: "8250000" },
    // { id: "RD6-AWD-Ultra", name: "RD6 AWD Ultra", subtitle: "Body Type : Truck", image: car3, price: "8990000" },
  ];

  const exteriorColors = [
    { id: "blue", name: "Blue", image: img2 },
    { id: "purple", name: "Purple", image: img5 },
    { id: "green", name: "Green", image: img3 },
    { id: "black", name: "Black", image: img1 },
    { id: "white", name: "White", image: img4 },
  ];

  const interiorColors = [
    { id: "black", name: "Black", image: interiorblack },
    { id: "brown", name: "Brown", image: interiorbrown },
    // { id: "green", name: "Green", image: interiorgreen },
  ];

  const selectedCarDetails = cars.find(
    (car) => car.id === orderData.selectedCar
  );
  const selectedExteriorColorDetails = exteriorColors.find(
    (color) => color.id === orderData.selectedExteriorColor
  );
  const selectedInteriorColorDetails = interiorColors.find(
    (color) => color.id === orderData.selectedInteriorColor
  );

  const basePrice = selectedCarDetails?.price
    ? parseInt(selectedCarDetails.price)
    : 8990000;

  const advancePaymentPercentage = orderData.formData.advancePayment
    ? parseInt(orderData.formData.advancePayment)
    : 20;

  const advancePayment = Math.floor(
    basePrice * (advancePaymentPercentage / 100)
  );
  const remainingAmount = basePrice - advancePayment;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back to Vehicle */}
        <button
          onClick={onBackToVehicle}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Vehicle
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="p-8">
            <h1 className="text-3xl font-light text-gray-800 mb-8">
              Review Your Order
            </h1>

            {/* Vehicle Info and Image */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <h2 className="text-xl text-gray-700 mb-6">
                  {orderData.selectedBrand}{" "}
                  {selectedCarDetails?.name || "Selected Vehicle"}
                </h2>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-8 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">UP TO</div>
                    <div className="text-xl font-semibold text-gray-800">
                      632 Km*
                    </div>
                    <div className="text-gray-500">Driving Range</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">AS FAST AS</div>
                    <div className="text-xl font-semibold text-gray-800">
                      4.5 sec*
                    </div>
                    <div className="text-gray-500">To Reach 100</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">UP TO</div>
                    <div className="text-xl font-semibold text-gray-800">
                      86.56 KWh*
                    </div>
                    <div className="text-gray-500">Capacity</div>
                  </div>
                </div>
              </div>

              {/* Car Image */}
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src={selectedExteriorColorDetails?.image || img1}
                  alt={
                    selectedExteriorColorDetails?.name ||
                    "Selected exterior color"
                  }
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>

            {/* Download Specs Button */}
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download Specs
            </button>
          </div>

          {/* Order Details */}
          <div className="border-t border-gray-200 p-8">
            <h3 className="text-xl text-gray-700 mb-6">Order Details</h3>

            <div className="space-y-6">
              {/* Variant */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Variant</span>
                <div className="flex items-center">
                  <span className="text-gray-800 mr-4">
                    {selectedCarDetails?.name || "Selected Variant"}
                  </span>
                  <span className="text-gray-800 font-semibold">
                    {basePrice.toLocaleString()} PKR
                  </span>
                </div>
              </div>

              {/* Exterior Color */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Exterior color</span>
                <div className="flex items-center">
                  <span className="text-gray-800 mr-4 capitalize">
                    {selectedExteriorColorDetails?.name || "Selected Color"}
                  </span>
                  <div className="w-12 h-8 rounded">
                    <img
                      src={selectedExteriorColorDetails?.image || img1}
                      alt={
                        selectedExteriorColorDetails?.name ||
                        "Selected exterior color"
                      }
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Interior Color */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Interior color</span>
                <div className="flex items-center">
                  <span className="text-gray-800 mr-4 capitalize">
                    {selectedInteriorColorDetails?.name || "Selected Color"}
                  </span>
                  <div className="w-12 h-8 rounded">
                    <img
                      src={selectedInteriorColorDetails?.image || interiorblack}
                      alt={
                        selectedInteriorColorDetails?.name ||
                        "Selected interior color"
                      }
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Customer Name</span>
                <span className="text-gray-800">
                  {orderData.formData.firstName} {orderData.formData.lastName}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Father/Husband Name</span>
                <span className="text-gray-800">
                  {orderData.formData.fatherHusbandName || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Gender</span>
                <span className="text-gray-800">
                  {orderData.formData.gender || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Date of Birth</span>
                <span className="text-gray-800">
                  {orderData.formData.dateOfBirth || "Not provided"}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Email Address</span>
                <span className="text-gray-800">
                  {orderData.formData.email || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Primary Phone</span>
                <span className="text-gray-800">
                  +92 {orderData.formData.primaryPhone}
                </span>
              </div>

              {orderData.formData.secondaryPhone && (
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600">Secondary Phone</span>
                  <span className="text-gray-800">
                    +92 {orderData.formData.secondaryPhone}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Location</span>
                <span className="text-gray-800">
                  {orderData.formData.city}, {orderData.formData.state}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Address as per CNIC</span>
                <span className="text-gray-800">
                  {orderData.formData.addressCNIC || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Individual/Corporate</span>
                <span className="text-gray-800">
                  {orderData.formData.individualCorporate || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">CNIC</span>
                <span className="text-gray-800">
                  {orderData.formData.cnic || "Not provided"}
                </span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">CNIC Images</span>
                <span className="text-gray-800">
                  {orderData.formData.cnicFrontImage ? "Front: ✓" : "Front: ✗"}
                  {" | "}
                  {orderData.formData.cnicBackImage ? "Back: ✓" : "Back: ✗"}
                </span>
              </div>

              {orderData.formData.statusFilter && (
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600">Status Filter</span>
                  <span className="text-gray-800">
                    {orderData.formData.statusFilter}
                  </span>
                </div>
              )}

              {orderData.formData.salesTaxRegistration && (
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600">Sales Tax Registration</span>
                  <span className="text-gray-800">
                    {orderData.formData.salesTaxRegistration}
                  </span>
                </div>
              )}

              {orderData.formData.ntnNumber && (
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-600">NTN Number</span>
                  <span className="text-gray-800">
                    {orderData.formData.ntnNumber}
                  </span>
                </div>
              )}

              {/* Advance Payment Percentage */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Selected Advance Payment</span>
                <span className="text-gray-800 font-semibold">
                  {advancePaymentPercentage}%
                </span>
              </div>

              {orderData.formData.comments && (
                <div className="flex flex-col py-4 border-b border-gray-100">
                  <span className="text-gray-600 mb-2">Comments</span>
                  <span className="text-gray-800 text-sm bg-gray-50 p-3 rounded">
                    {orderData.formData.comments}
                  </span>
                </div>
              )}
            </div>

            {/* Pricing */}
            <div className="mt-8 space-y-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Company Price</span>
                <span className="text-gray-800">
                  {basePrice.toLocaleString()} PKR
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">
                  Freight / Insurance Charges
                </span>
                <span className="text-gray-800">0 PKR</span>
              </div>

              <div className="flex justify-between py-2 border-t border-gray-200 pt-4">
                <span className="text-gray-700 font-medium">Gross Price</span>
                <span className="text-gray-800 font-semibold">
                  {basePrice.toLocaleString()} PKR
                </span>
              </div>

              <div className="flex justify-between py-2 bg-blue-50 px-4 rounded">
                <span className="text-gray-700 font-medium">
                  Advance Payment ({advancePaymentPercentage}%)
                </span>
                <span className="text-blue-600 font-semibold text-lg">
                  {advancePayment.toLocaleString()} PKR
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">
                  Remaining Amount
                </span>
                <span className="text-gray-800 font-semibold">
                  {remainingAmount.toLocaleString()} PKR
                </span>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-6 text-xs text-gray-500 space-y-2">
              <p>
                *Performance related metrics are based on controlled conditions.
                Actual performance will vary depending on driving behaviour,
                environment and other influencing factors.
              </p>
              <p>
                <strong>Note:</strong> Bank charges may apply. The remaining
                amount of {remainingAmount.toLocaleString()} PKR will be due
                upon delivery.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-8 border-t border-gray-200 pt-6 gap-4">
              {/* Upload Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleUploadClick}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Pay order Slip
                </button>
                {uploadedFile && (
                  <span className="text-sm text-gray-600">
                    {uploadedFile.name}
                  </span>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </div>

              {/* Save & Submit (sends email here) */}
              <div className="flex gap-4">
                <button
                  onClick={async () => {
                    if (submitting) return;
                    setSubmitting(true);
                    try {
                      const emailResult = await sendVerificationEmail(orderData);

                      if (emailResult.success) {
                        alert(
                          `Order submitted successfully!
Booking ID: ${emailResult.bookingId}
Email sent to: ${orderData.formData.email}

Order Summary:
- Vehicle: ${orderData.selectedBrand} ${selectedCarDetails?.name}
- Total Price: ${basePrice.toLocaleString()} PKR
- Advance Payment (${advancePaymentPercentage}%): ${advancePayment.toLocaleString()} PKR
- Remaining: ${remainingAmount.toLocaleString()} PKR`
                        );
                      } else {
                        alert(
                          `Order submitted, but email failed to send.
Booking ID: ${emailResult.bookingId}
Please try again later or contact support.`
                        );
                        console.error("Email error:", emailResult.error);
                      }
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  disabled={submitting}
                  className={`px-6 py-2 rounded transition-colors ${
                    submitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {submitting ? "Submitting..." : "Save & Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<"testdrive" | "review">(
    "testdrive"
  );
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  const handleTestDriveSubmit = (data: OrderData) => {
    setOrderData(data);
    setCurrentView("review");
  };

  const handleBackToVehicle = () => {
    setCurrentView("testdrive");
  };

  return (
    <div>
      {currentView === "testdrive" && (
        <EVTestDrive onSubmit={handleTestDriveSubmit} />
      )}
      {currentView === "review" && orderData && (
        <OrderReview
          orderData={orderData}
          onBackToVehicle={handleBackToVehicle}
        />
      )}
      <div className="border-t border-gray-300" />
    </div>
  );
};

export default MainApp;
