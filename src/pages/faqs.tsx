import React, { useState } from "react";
import Newsletter from "./newsLetter";
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Ask A Question?",
    answer: "Briefly Explain Your Answers Here..."
  },
  { question: "Ask A Question?", answer: "Your answer here..." },
  { question: "Ask A Question?", answer: "Your answer here..." },
  { question: "Ask A Question?", answer: "Your answer here..." },
  { question: "Ask A Question?", answer: "Your answer here..." },
  { question: "Ask A Question?", answer: "Your answer here..." },
  { question: "Ask A Question?", answer: "Your answer here..." },
  { question: "Ask A Question?", answer: "Your answer here..." },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen py-12 px-4">
      {/* Title */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px w-16 bg-gray-400"></div>
          <span className="bg-black text-white px-3 py-1 text-sm font-semibold tracking-wide">
            FAQs
          </span>
          <div className="h-px w-16 bg-gray-400"></div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-black">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center px-4 py-4 text-left text-gray-900 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all ${
                openIndex === index ? "bg-gray-100" : ""
              }`}
            >
              <span className="font-semibold">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 rounded-b-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <Newsletter />
            <div className="border-t border-gray-300" />
    </div>
  );
};

export default FAQPage;