// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import ForthingBanner from "../assets/zeekr/Coming soon.png";
import Newsletter from "./newsLetter";
//slider 1
// import slidea from "../assets/Forthing/ADD/Exterior-A.png";
// import slideb from "../assets/Forthing/ADD/Exterior-B.png";
// import slidec from "../assets/Forthing/ADD/Exterior-C.png";
// import slided from "../assets/Forthing/ADD/Exterior-D.png";
// import slidee from "../assets/Forthing/ADD/Exterior-E.jpg";
// //slider2 images
// import slideA from "../assets/Forthing/InteriorFeatures/Interior-A.png";
// import slideB from "../assets/Forthing/InteriorFeatures/Interior-B.png";
// import slideC from "../assets/Forthing/InteriorFeatures/Interior-C.png";
// import slideD from "../assets/Forthing/InteriorFeatures/Interior-D.png";
// import slideE from "../assets/Forthing/InteriorFeatures/Interior-E.png";
// //banner and additional images
// import ForthingSpec from "../assets/Forthing/ForthingSpecs.png";
// import ForthingBig from "../assets/Forthing/Grid/ForthingBig.png";
// import ForthingLeft from "../assets/Forthing/Grid/ForthingLeft.png";
// import ForthingRight from "../assets/Forthing/Grid/ForthingRight.png";
// import Newsletter from "../pages/newsLetter";
// // import Footer from "../pages/footer";
export const Forthing = () => {
  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);
  // const [currentSlideIndex3, setCurrentSlideIndex3] = useState(0);

  // First Advanced Driving Dynamics slides data (5 slides)

  // Interior Features slides data (5 slides) - Using exact text from image

  // Security Features slides data - using your imports

  // Functions for second slider

  // Functions for security slider

  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <div className="relative w-full">
        <img
          src={ForthingBanner}
          alt="Forthing Hero Banner"
          className="w-full h-auto object-cover"
        />

        {/* Buttons positioned at bottom right */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <button
            className="px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ borderRadius: "8px" }}
          >
            BOOK NOW
          </button>
          <button
            className="px-8 py-4 border-2 border-black text-white bg-black hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ borderRadius: "8px" }}
          >
            BROCHURE
          </button>
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

export default Forthing;
