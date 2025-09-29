import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of marble do you use for your stone temples?",
      answer: "We work with a variety of premium marbles including <strong>Makrana White Marble</strong>, <strong>Italian Carrara Marble</strong>, and <strong>Vietnam White Marble</strong>. Each piece is carefully selected for its quality, durability, and aesthetic appeal to create stunning temple designs."
    },
    {
      question: "How long does the temple design and installation process take?",
      answer: "The complete process from design consultation to final installation typically takes <strong>4-8 weeks</strong>, depending on the complexity of the design, size of the temple, and customization requirements."
    },
    {
      question: "Do you provide custom design services for marble temples?",
      answer: "Absolutely! We specialize in <strong>custom marble temple designs</strong> tailored to your space, preferences, and spiritual requirements. Our design team works closely with you to create a unique piece that complements your home's aesthetics."
    },
    {
      question: "What is the price range for your marble temples?",
      answer: "Our marble temples range from <strong>₹25,000 to ₹2,00,000+</strong> depending on size, marble quality, design complexity, and customization. We offer temples for various budgets while maintaining exceptional craftsmanship."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we provide <strong>professional installation services</strong> across the city. Our experienced team ensures proper placement, alignment, and finishing touches to make your temple the centerpiece of your home."
    },
    {
      question: "How do I maintain and clean my marble temple?",
      answer: "Marble temples require gentle care. We recommend <strong>dusting regularly with a soft cloth</strong> and <strong>cleaning with pH-neutral stone cleaners</strong>. Avoid acidic cleaners and harsh chemicals. We provide complete maintenance guidelines with every temple."
    },
    {
      question: "Can I see examples of your previous work?",
      answer: "Yes! You can visit our <strong>showroom to see sample temples</strong> or browse our portfolio of completed projects <a href='https://stonemarbletemple.com/portfolio' rel='noopener noreferrer' target='_blank' class='text-amber-600 hover:text-amber-700 underline'>here</a>. We have photos and videos showcasing our craftsmanship."
    },
    {
      question: "What makes your marble temples different from others?",
      answer: "Our temples feature <strong>hand-carved intricate designs</strong>, <strong>premium quality marble</strong>, and <strong>expert craftsmanship</strong> passed down through generations. We focus on both spiritual significance and artistic excellence in every piece we create."
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