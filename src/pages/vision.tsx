import React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your assets
// import AboutBanner1 from "../assets/AboutUs/Hero.png";
// import AboutBanner2 from "../assets/AboutUs/Mission.png";
import AboutBanner3 from "../assets/AboutUs/Vision.png";


import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";

// Reusable heading with lines

export const AboutUs: React.FC = () => {
   

  return (
    <div className="w-full">
      {/* Top Banner */}
      

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">OVERVIEW</h2>
        <p className="text-gray-700 text-med leading-relaxed text-center max-w-4xl mx-auto">
          As A Venture Of Habib Rafiq Limited (HRL) Engineering, One Of
          Pakistan's Most Trusted Names In Infrastructure And Industrial
          Development, CSM Is Committed To Sustainable Automotive Industry
          Trends In Local Roads. From Premium EV And Plug-In Hybrid Electric
          Vehicles, Clean Energy Engineering Focus Solutions.
        </p>
      </div>

      {/* Vision Section
      <div>
        <img
          src={AboutBanner2}
          alt="Our Vision"
          className="w-full h-auto object-cover"
        />
      </div> */}

      {/* Gap between banners */}
      <div className="py-8"></div>

      {/* Mission Section */}
      <div>
        <img
          src={AboutBanner3}
          alt="Our Mission"
          className="w-full h-auto object-cover"
        />
      </div>

      

      {/* Newsletter Section */}
      <Newsletter />
      <div className="border-t border-gray-300" />
      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
