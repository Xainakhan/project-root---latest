import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import whiteCar from "../assets/car_white.webp";
import blueCar from "../assets/car_blue.webp";
import greyCar from "../assets/car_gray.webp";
import greenCar from "../assets/car_green.webp";
import blackCar from "../assets/car_black.webp";
import greenBCar from "../assets/car_green_top.webp";
import whiteBCar from "../assets/car_white_top.webp";
//slider 1
import slidea from "../assets/ExtSlideA.png";
import slideb from "../assets/ExSlideB.png";
import slidec from "../assets/ExSlideC.png";
import slided from "../assets/ExSlideD.png";
import slidee from "../assets/ExSlideE.png";
//slider2 images
import slideA from "../assets/IntSlideA.png";
import slideB from "../assets/IntSlideB.png";
import slideC from "../assets/IntSlideC.png";
import slideD from "../assets/IntSlideD.png";
import slideE from "../assets/IntSlideE.png";
//banner and additional images
import FrontGrid from "../assets/FrontGrillWide.png";
import FrameRD from "../assets/FrameRD.png";
import GrillWhite from "../assets/GrillCard.png";
import Backlight from "../assets/BacklightCard.png";
import RiddaraSpec from "../assets/RiddaraSpecs.png";
//last banner and four images
import airbag from "../assets/AirBags.png";
import cameraTech from "../assets/CameraTech.png";
import DriveAssist from "../assets/DriveAssist.png";
import ModernTrunk from "../assets/ModernTrunk.png";
// Import MainApp for test drive navigation
import MainApp from "../pages/testDrive";
import TestDrive from "../pages/test";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";

interface RiddaraProps {
  onBack: () => void;
}

export const RiddaraShowcase: React.FC<RiddaraProps> = ({ onBack }) => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showTestDrive, setShowTestDrive] = useState(false);
  const [showTestDrivePage, setShowTestDrivePage] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Navigation function for Book Now button
  const handleBookNow = (): void => {
    setShowTestDrive(true);
  };

  // Navigation function for Test Drive button
  const handleTestDrive = (): void => {
    setShowTestDrivePage(true);
  };

  // Function to go back from test drive to Riddara page
  const handleBackFromTestDrive = (): void => {
    setShowTestDrive(false);
  };

  // Function to go back from test drive page to Riddara page
  const handleBackFromTestDrivePage = (): void => {
    setShowTestDrivePage(false);
  };

  // If showing test drive component, render it with transparent back button overlay (same as JMEV)
  if (showTestDrive) {
    return (
      <div className="relative w-full h-screen">
        {/* Render MainApp without onBack prop */}
        <MainApp />

        {/* Transparent back button overlay - moved down 3 inches (72px) */}
        <button
          onClick={handleBackFromTestDrive}
          className="fixed top-24 left-6 z-[999] flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 border border-gray-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            Back to Riddara
          </span>
        </button>
      </div>
    );
  }

  // WhatsApp function
  const handleWhatsAppClick = () => {
    const phoneNumber = "++923008255276"; // Replace with your actual WhatsApp number
    const message =
      "Hi! I'm interested in the Forthing vehicle. Can you provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // If showing test drive page, render it with transparent back button overlay
  if (showTestDrivePage) {
    return (
      <div className="relative w-full h-screen">
        {/* Render TestDrive component */}
        <TestDrive />

        {/* Transparent back button overlay */}
        <button
          onClick={handleBackFromTestDrivePage}
          className="fixed top-24 left-6 z-[999] flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 border border-gray-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            Back to Riddara
          </span>
        </button>
      </div>
    );
  }

  const cars = [
    {
      image: greenBCar,
      color: "Green with black top",
      bgColor: "bg-gradient-to-b from-black to-green-700",
      colorCode: "#65775D",
    },
    {
      image: blueCar,
      color: "Blue",
      bgColor: "bg-blue-900",
      colorCode: "#033146",
    },
    {
      image: greyCar,
      color: "Grey",
      bgColor: "bg-gray-400",
      colorCode: "#ACB3C0",
    },
    {
      image: whiteBCar,
      color: "White with black top",
      bgColor: "bg-gradient-to-b from-black to-white",
      colorCode: "#FFFFFF",
    },
    {
      image: whiteCar,
      color: "White",
      bgColor: "bg-white",
      colorCode: "#FFFFFF",
    },
    {
      image: blackCar,
      color: "Black",
      bgColor: "bg-black",
      colorCode: "#000000",
    },
    {
      image: greenCar,
      color: "Green",
      bgColor: "bg-green-700",
      colorCode: "#65775D",
    },
  ];

  const slides = [
    {
      image: slidea,
      title: "815mm Water-Wading Depth",
      description:
        "Easily navigates rivers and shallow waters with a class-leading wading depth of 815mm.",
    },
    {
      image: slideb,
      title: "45° Incline Capability",
      description:
        "Effortlessly Tackles Steep Slopes and Rugged Terrain with A Powerful 45° Incline Climbing Ability for Supreme Off-Road Performance.",
    },
    {
      image: slidec,
      title: "RIDDARA 360° Smart Turn",
      description:
        "Master Tight Corners and Confined Trails with Precision. The RIDDARA 360° Smart Turn Delivers Seamless Maneuverability for Unrivaled Control in Every Direction.",
    },
    {
      image: slided,
      title: "RIDDARA 1030 kg Loading Capacity",
      description:
        "Built to Haul More. With A Sturdy 1030 kg Payload Capacity, RIDDARA Handles Heavy Loads with Ease—Perfect for Work, Adventure, And Everything In Between.",
    },
    {
      image: slidee,
      title: "RIDDARA SUV-Based Suspension",
      description:
        "Experience Smooth Rides on Any Terrain. The Advanced SUV-Based Suspension System Delivers Exceptional Comfort, Stability, And Off-Road Confidence Wherever You Go.",
    },
  ];

  const slides2 = [
    {
      image: slideA,
      title: "Spacious Seat Interior",
      description:
        "Enjoy 5-seat comfort with pet-friendly, foldable rear seats for added versatility, exuding comfort and luxury.",
    },
    {
      image: slideB,
      title: "NVH Silencet",
      description: "Noise Cancellation for serene drive at any speed",
    },
    {
      image: slideC,
      title: "Entertainment Eco-system",
      description:
        "Access endless audio and video features to elevate every journey with immersive entertainment. highly interactive 14.6-inch digital display with smartphone connectivity.",
    },
    {
      image: slideD,
      title: "SYNTHETIC LEATHER SEAT",
      description:
        "The front seat features an electric adjustment, and both front and rear feature built-in ventilation system.",
    },
    {
      image: slideE,
      title: "Wireless Charging Pad",
      description:
        "Stay powered effortlessly with an advanced wireless charging pad.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => {
      const maxIndex = Math.max(0, slides.length - (isMobile ? 1 : 3));
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => {
      const maxIndex = Math.max(0, slides.length - (isMobile ? 1 : 3));
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const nextSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const maxIndex = Math.max(0, slides2.length - (isMobile ? 1 : 3));
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const maxIndex = Math.max(0, slides2.length - (isMobile ? 1 : 3));
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const nextCar = () => {
    setCurrentCarIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const getColorStyle = (index: number) => {
    const car = cars[index];
    if (car.color === "Green with black top") {
      return {
        background: `linear-gradient(to bottom, #000000, ${car.colorCode})`,
      };
    } else if (car.color === "White with black top") {
      return {
        background: `linear-gradient(to bottom, #000000, ${car.colorCode})`,
      };
    } else {
      return {
        backgroundColor: car.colorCode,
      };
    }
  };

  const selectCar = (index: number) => {
    setCurrentCarIndex(index);
  };

  return (
    <div className="w-full">
      {/* Back to Home Button - Fixed position moved down 3 inches (72px) */}
      <button
        onClick={onBack}
        className="fixed top-24 left-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 border border-gray-200"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700" />
        <span className="text-sm font-medium text-gray-700">Back to Home</span>
      </button>

      {/* Hero Banner Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${FrameRD})` }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-white max-w-lg"></div>
          </div>
          {/* WhatsApp Button - Top Right */}
          <button
            onClick={handleWhatsAppClick}
                     className="absolute top-8 right-8 flex items-center justify-center w-12 h-12 bg-black/20 hover:bg-black-900 border border-white backdrop-blur  text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-30"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </button>

          {/* Buttons positioned at bottom corners */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex justify-between">
            {/* Test Drive button - Bottom Left */}
            <button
              onClick={handleTestDrive}
              className="px-4 sm:px-8 py-3 sm:py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ borderRadius: "8px" }}
            >
              TEST DRIVE
            </button>

            {/* Book Now and Brochure buttons - Bottom Right */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleBookNow}
                className="px-4 sm:px-8 py-3 sm:py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ borderRadius: "8px" }}
              >
                BOOK NOW
              </button>
              <a
                href="https://hrl-csm.com/old-files/Riddara%20RD6%20Brousher.pdf"
                download="Riddara-RD6-Brousher.pdf"
                className="px-4 sm:px-8 py-3 sm:py-4 border-2 border-white text-white bg-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ borderRadius: "8px", textDecoration: 'none', display: 'inline-block' }}
              >
                BROCHURE
              </a>
              
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="bg-white py-4 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex flex-col sm:flex-row items-center bg-transparent rounded-lg p-4 shadow-sm space-y-4 sm:space-y-0">
              <div className="flex flex-col items-center px-3 sm:px-6">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  UP TO
                </p>
                <h3 className="text-xl font-light text-gray-700 mb-1">
                  632 Km*
                </h3>
                <p className="text-gray-500 text-xs">Driving Range</p>
              </div>
              <div className="flex flex-col items-center px-3 sm:px-6 sm:border-l sm:border-r border-gray-300 sm:mx-4">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  AS FAST AS
                </p>
                <h3 className="text-xl font-light text-gray-700 mb-1">
                  4.5 Sec*
                </h3>
                <p className="text-gray-500 text-xs">To Reach 100</p>
              </div>
              <div className="flex flex-col items-center px-3 sm:px-6">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  UP TO
                </p>
                <h3 className="text-xl font-light text-gray-700 mb-1">
                  86.56 KWh*
                </h3>
                <p className="text-gray-500 text-xs">Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Gallery Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-6 sm:py-8 px-4 relative min-h-[400px] sm:min-h-[600px]">
        <div className="max-w-7xl mx-auto relative">
          {/* Color selector dots */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 flex flex-wrap gap-1 sm:gap-2 max-w-20 sm:max-w-none">
            {cars.map((car, index) => (
              <button
                key={index}
                onClick={() => selectCar(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border border-gray-300 ${
                  currentCarIndex === index
                    ? "ring-1 sm:ring-2 ring-gray-600 ring-offset-1 sm:ring-offset-2"
                    : ""
                }`}
                style={getColorStyle(index)}
                title={car.color}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevCar}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextCar}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Car image centered */}
          <div className="flex justify-center items-center h-full py-6 sm:py-12">
            <div className="w-full max-w-xs sm:max-w-4xl">
              <img
                src={cars[currentCarIndex].image}
                alt={`Riddara ${cars[currentCarIndex].color} car`}
                className="w-full h-auto object-contain transition-all duration-500"
              />
            </div>
          </div>

          {/* Gallery Bottom Line */}
          <div className="flex items-center justify-center mt-2 sm:mt-4 mb-4 sm:mb-8">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Advanced Driving Dynamics Section */}
      <div className="bg-white py-8 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines on Both Sides */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="flex-1 h-px bg-gray-400 max-w-8 sm:max-w-24"></div>
              <h2 className="px-3 sm:px-6 text-sm sm:text-lg font-medium text-gray-800 tracking-wider">
                ADVANCED DRIVING DYNAMICS
              </h2>
              <div className="flex-1 h-px bg-gray-400 max-w-8 sm:max-w-24"></div>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-3 sm:gap-6"
                style={{
                  transform: `translateX(-${
                    currentSlideIndex * (isMobile ? 100 : 100 / 3)
                  }%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-1 sm:px-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                      <div className="relative overflow-hidden h-48 sm:h-96">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-3 sm:p-6 bg-gray-100 text-left">
                        <div className="mb-2 sm:mb-3">
                          <div className="w-6 sm:w-8 h-px bg-gray-400 mb-2 sm:mb-3"></div>
                          <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                            {slide.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 sm:mt-8 space-x-2">
              {Array.from(
                { length: Math.max(1, slides.length - (isMobile ? 0 : 2)) },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlideIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      currentSlideIndex === index
                        ? "bg-gray-800 w-4 sm:w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Banner and Images Section */}
      <div className="bg-white py-4 sm:py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={FrontGrid}
                alt="Riddara Banner"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={GrillWhite}
                  alt="Riddara Detail 1"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={Backlight}
                  alt="Riddara Detail 2"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interior Features Section */}
      <div className="bg-gray-50 py-8 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="flex-1 h-px bg-gray-400 max-w-8 sm:max-w-24"></div>
              <h2 className="px-3 sm:px-6 text-sm sm:text-lg font-medium text-gray-800 tracking-wider">
                INTERIOR FEATURES
              </h2>
              <div className="flex-1 h-px bg-gray-400 max-w-8 sm:max-w-24"></div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-3 sm:gap-6"
                style={{
                  transform: `translateX(-${
                    currentSlideIndex2 * (isMobile ? 100 : 100 / 3)
                  }%)`,
                }}
              >
                {slides2.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-1 sm:px-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                      <div className="relative overflow-hidden h-48 sm:h-96">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-3 sm:p-6 bg-gray-100 text-left">
                        <div className="mb-2 sm:mb-3">
                          <div className="w-6 sm:w-8 h-px bg-gray-400 mb-2 sm:mb-3"></div>
                          <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                            {slide.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide2}
              className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide2}
              className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 sm:mt-8 space-x-2">
              {Array.from(
                { length: Math.max(1, slides2.length - (isMobile ? 0 : 2)) },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlideIndex2(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      currentSlideIndex2 === index
                        ? "bg-gray-800 w-4 sm:w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                )
              )}
            </div>
          </div>

          {/* Brochure Button - Bottom Right */}
          <div className="flex justify-center sm:justify-end mt-6 sm:mt-8">
            <button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ borderRadius: "4px" }}
            >
              BROCHURE
            </button>
          </div>
        </div>
      </div>

      {/* Final Image Gallery Section */}
      <div className="bg-white py-4 sm:py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={RiddaraSpec}
                alt="Riddara Final Banner"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* First row - Two images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div
                className="rounded-lg overflow-hidden justify-self-start h-48 sm:h-80 md:h-[330px]"
                style={{ aspectRatio: "500 / 330" }}
              >
                <img
                  src={airbag}
                  alt="Riddara Feature 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="rounded-lg overflow-hidden justify-self-end h-48 sm:h-80 md:h-[330px]"
                style={{ aspectRatio: "760 / 330" }}
              >
                <img
                  src={cameraTech}
                  alt="Riddara Feature 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Second row - Two more images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div
                className="rounded-lg overflow-hidden justify-self-start h-48 sm:h-80 md:h-[330px]"
                style={{ aspectRatio: "760 / 330" }}
              >
                <img
                  src={ModernTrunk}
                  alt="Riddara Feature 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="rounded-lg overflow-hidden justify-self-end h-48 sm:h-80 md:h-[330px]"
                style={{ aspectRatio: "500 / 330" }}
              >
                <img
                  src={DriveAssist}
                  alt="Riddara Feature 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Final decorative line at the bottom */}
            <div className="flex items-center justify-center pt-4 sm:pt-8">
              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full opacity-60"></div>
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

export default RiddaraShowcase;
