import React, { useRef, useState } from "react";
import { ChevronLeft, Download, Upload } from "lucide-react";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";
const BYDOrderReview: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back to Vehicle */}
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors">
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
                  BYD Atto 3 - Advance
                </h2>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-8 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">UP TO</div>
                    <div className="text-xl font-semibold text-gray-800">
                      410 km*
                    </div>
                    <div className="text-gray-500">Driving Range</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">AS FAST AS</div>
                    <div className="text-xl font-semibold text-gray-800">
                      7.9 sec*
                    </div>
                    <div className="text-gray-500">0-100 km/hr</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">UP TO</div>
                    <div className="text-xl font-semibold text-gray-800">
                      49.92 kWh*
                    </div>
                    <div className="text-gray-500">Battery Capacity</div>
                  </div>
                </div>
              </div>

              {/* Car Image */}
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop&auto=format"
                  alt="BYD Atto 3 Electric SUV"
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
                  <span className="text-gray-800 mr-4">Advance</span>
                  <span className="text-gray-800 font-semibold">
                    8,990,000 PKR
                  </span>
                </div>
              </div>

              {/* Exterior Color */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Exterior color</span>
                <div className="flex items-center">
                  <span className="text-gray-800 mr-4">Surf Blue</span>
                  <div className="w-12 h-8 rounded">
                    <img
                      src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=50&h=30&fit=crop&auto=format"
                      alt="Surf Blue car"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Interior Color */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-600">Interior color</span>
                <div className="flex items-center">
                  <span className="text-gray-800 mr-4">Black</span>
                  <div className="w-12 h-8 rounded">
                    <img
                      src="https://images.unsplash.com/photo-1549317336-206569e8475c?w=50&h=30&fit=crop&auto=format"
                      alt="Black interior"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="mt-8 space-y-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Company Price</span>
                <span className="text-gray-800">8,990,000 PKR</span>
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
                  8,990,000 PKR
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">
                  Advance Payment
                </span>
                <span className="text-gray-800 font-semibold">
                  1,750,000 PKR
                </span>
              </div>
            </div>

            {/* Footer Notes */}
            <div className="mt-6 text-xs text-gray-500 space-y-2">
              <p>
                *Performance related metrics are based on controlled conditions.
                Actual performance will vary depending on driving behaviour,
                environment and other influencing factors.
              </p>
              <p>
                <strong>Note:</strong> Bank charges may apply.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-8 border-t border-gray-200 pt-6 gap-4">
              {/* Upload Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleUploadClick}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Documents
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
                />
              </div>

              {/* Save & Submit */}
              <div className="flex gap-4">
                <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  Save
                </button>
                <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                  Submit
                </button>
              </div>
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

export default BYDOrderReview;
