import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import news from "../assets/news.png";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";
interface ShowMoreTextProps {
  text: string;
  wordLimit?: number;
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({
  text,
  wordLimit = 20,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(" ");
  const shouldTruncate = words.length > wordLimit;
  const displayText = isExpanded ? text : words.slice(0, wordLimit).join(" ");

  return (
    <div>
      <p className="text-gray-600 leading-relaxed">
        {displayText}
        {shouldTruncate && !isExpanded && "..."}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-2"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

interface NewsPageProps {
  onBack: () => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Back to Home Button - Fixed position moved down 3 inches (72px) */}
      <button
        onClick={onBack}
        className="fixed top-24 left-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 border border-gray-200"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700" />
        <span className="text-sm font-medium text-gray-700">Back to Home</span>
      </button>

      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={news}
            alt="News Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end justify-between pb-8">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-black italic">
              NEWS & INSIGHTS
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-transparent border border-black-300 rounded px-4 py-2 text-sm text-gray-700">
              Category
            </span>
            <span className="bg-transparent border border-black-300 rounded px-4 py-2 text-sm text-gray-700">
              Category
            </span>
            <button className="bg-black text-white px-6 py-2 text-sm font-medium rounded hover:bg-gray-800 transition-colors">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* News Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* First Article */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <img
                src={news1}
                alt="CSM & Geely Meeting"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                CSM & GEELY SIGNED MOU TO LAUNCH NEVs IN PAKISTAN
              </h2>
              <ShowMoreText text="The MoU Signing Between Capital Smart Motors (CSM) And Geely Marks A Significant Step Toward Transforming Pakistan's Mobility Landscape. This Strategic Partnership Will Bring Cutting-Edge Electric Vehicles To The Pakistani Market, Revolutionizing The Automotive Industry With Sustainable And Innovative Transportation Solutions." />
              <div className="text-sm text-gray-500 mt-6">22-06-2025</div>
            </div>
          </div>

          {/* Second Article */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <img
                src={news2}
                alt="Nedara Electric Pickup Truck"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                CHAIRMAN OF CSM GRABS ATTENTION OF DEALER MEETUP AT SERENA HOTEL
              </h2>
              <ShowMoreText text="CSM Had The Privilege Of Participating In The Dealer Meetup Organized By Capital Smart City At Serena Hotel, Islamabad. The Event Was Graced By The Presence Of The Chairman Of HRL Engineering And CSM, Who Delivered An Inspiring Keynote Address About The Future Of Electric Mobility In Pakistan." />
              <div className="text-sm text-gray-500 mt-6">23-06-2025</div>
            </div>
          </div>

          {/* Third Article */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <img
                src={news3}
                alt="Team Meeting"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                FORGING EXCELLENCE FOR PAKISTAN'S AUTOMOTIVE FUTURE
              </h2>
              <ShowMoreText text="The Management At CSM Envisages Driving Uncompromising Standards, Fine Tuning Products, Dealership Network, And Technical Expertise Well Ahead Of Launch. To Ensure Flawless Execution, CSM Has Engaged Their Teams For Intensive Training With Our Business Collaboration Partners Mastering Details Of New Energy Vehicle (NEV) Technologies And Customer Service Excellence." />
              <div className="text-sm text-gray-500 mt-6">23-06-2025</div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-3 text-sm font-medium rounded hover:bg-gray-800 transition-colors">
            View More
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

export default NewsPage;