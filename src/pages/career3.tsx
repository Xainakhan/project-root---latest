import React, { useState } from "react";
import { Check, X } from "lucide-react";
import FAQPage from "../pages/faqs";

interface SuccessPopupProps {
  onClose: () => void;
  onNavigateToFAQ: () => void;
  onNavigateToNewModels: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ 
  onClose, 
  onNavigateToNewModels 
}) => {
  const [showFAQPage, setShowFAQPage] = useState<boolean>(false);

  // Handle FAQ navigation
  const handleFAQNavigation = (): void => {
    setShowFAQPage(true);
  };

  // Handle back from FAQ page
  const handleBackFromFAQ = (): void => {
    setShowFAQPage(false);
  };

  // Handle New Models navigation
  const handleNewModelsNavigation = (): void => {
    onNavigateToNewModels();
    onClose(); // Close popup when navigating
  };

  // If showing FAQ page, render it
  if (showFAQPage) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        {/* FAQ Page with back button */}
        <div className="relative">
          <FAQPage />
          
          {/* Back button overlay */}
          <button
            onClick={handleBackFromFAQ}
            className="fixed top-6 left-6 z-[999] flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 border border-gray-200"
          >
            <X className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">
              Back to Success
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="relative bg-gray-300 p-10 rounded-lg text-center shadow-lg max-w-md w-full">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-black transition"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="border border-gray-500 bg-gray-200 rounded-full p-2">
            <Check className="w-8 h-8 text-gray-700" strokeWidth={2} />
          </div>
        </div>

        {/* Message */}
        <p className="font-semibold text-lg text-gray-800 mb-2">
          Your Request Has Been Submitted Successfully,
          <br />
          Our Representative Will Get In Touch With You Soon!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button 
            onClick={handleFAQNavigation}
            className="px-5 py-2 border border-gray-700 text-gray-700 rounded-sm text-sm hover:bg-gray-200 transition"
          >
            FAQs
          </button>
          <button 
            onClick={handleNewModelsNavigation}
            className="px-5 py-2 bg-black text-white rounded-sm text-sm hover:bg-gray-600 transition"
          >
            NEW MODELS
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;