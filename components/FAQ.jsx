import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are Dream Temples?",
      answer: "Dream Temples are <strong>custom-designed, handcrafted marble temples</strong> created by <strong>Tilak Stone Arts</strong>. They are designed to be not just a religious space but a piece of art that reflects your spiritual values and enhances the aesthetic of your home."
    },
    {
      question: "How long does it take to create and install a Dream Temple?",
      answer: "The process typically takes <strong>6-8 weeks</strong>, from the design approval to final installation. The exact timeline depends on the complexity and customization of the design."
    },
    {
      question: "Do you provide installation for Dream Temples?",
      answer: "Yes, installation is included in our service. Our team ensures that the Dream Temple is assembled and installed at your location with precision no matter where you are."
    },
    {
      question: "Are there any discounts or offers available for Dream Temples?",
      answer: "We periodically offer <strong>limited-time discounts</strong> on <strong>ready-to-ship temples</strong> or <strong>merchandise gifts</strong> with certain designs. <a href='https://mysoulconnect.com/Dream-Temple' rel='noopener noreferrer' target='_blank' class='text-amber-600 hover:text-amber-700 underline'>Contact us</a> for current offers."
    },
    {
      question: "How do I get started with my Dream Temple?",
      answer: "Start by <strong>filling out the 'Get in Touch' form</strong> on our website. The right member from our team will then contact you to assist you with the next steps in the process, guiding you through design, customization, and installation."
    },
    {
      question: "What material do we use to create our Dream Temples?",
      answer: "We exclusively use imported <strong>Vietnam White Marble</strong> to craft our Dream Temples, ensuring the highest quality and durability. However, upon special request and where the budget allows, we also offer the option of using <strong>high-grade Makrana Marble</strong> or other premium <strong>Italian stones</strong> to further elevate the elegance and craftsmanship of the temple."
    },
    {
      question: "Where to See your Work?",
      answer: "You are invited to explore our work at our Experience Center, or you can view some of our past documented projects <a href='https://mysoulconnect.com/Residential-project' rel='noopener noreferrer' target='_blank' class='text-amber-600 hover:text-amber-700 underline'>here</a> to get a closer look at the craftsmanship and designs we offer."
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h3>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                className={`flex justify-between items-center w-full p-5 text-left transition-colors duration-300 ${
                  activeIndex === index ? 'bg-amber-50' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className={`font-medium transition-colors duration-300 ${
                  activeIndex === index ? 'text-amber-600' : 'text-gray-900'
                }`}>
                  {index + 1}. &nbsp; {item.question}
                </span>
                {activeIndex === index ? (
                  <FiChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0 transition-transform duration-300" />
                ) : (
                  <FiChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300" />
                )}
              </button>
              
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                style={{
                  transitionProperty: 'max-height, opacity',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="p-5 bg-white border-t border-gray-100">
                  <div 
                    className="text-gray-700 prose prose-amber max-w-none"
                    dangerouslySetInnerHTML={{ __html: item.answer }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .prose a {
          transition: color 0.2s ease;
        }
        
        .prose strong {
          color: #1f2937;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default FAQ;