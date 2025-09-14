import React from 'react';

const HowItWorks = () => {
  const baseUrl = "https://www.tilakstonearts.com";
  
  const steps = [
    {
      id: 1,
      title: "Lets Connect One on One",
      image: "/_next/static/media/image1.84c47ee9.gif",
      items: [
        {
          subtitle: "It All Begins with a Form",
          description: "We want to understand your needs better to design your perfect space.",
          button: "Fill Form Link",
          milestone: ""
        },
        {
          subtitle: "Connect Over a Meet",
          description: "Join us in an interactive session to discuss your Pooja Space and design ideas with our experts. Book a time that suits you best.",
          button: "",
          milestone: "Milestone: Concept Discovery Session"
        }
      ]
    },
    {
      id: 2,
      title: "Start With Your Design",
      image: "/_next/static/media/image2.79a73f73.gif",
      items: [
        {
          subtitle: "Pay the Design Fee",
          description: "If you're happy with the session and we're aligned on your needs, choose a design plan to start.",
          button: "",
          milestone: ""
        },
        {
          subtitle: "2D Design",
          description: "Our expert designers will create a detailed 2D plan for your temple, showcasing the style and placement of deities.",
          button: "",
          milestone: "Milestone: Design Fee 200 USD"
        },
        {
          subtitle: "3D Design",
          description: "Once the 2D plan is finalized, visualize your dream space with a 3D model.",
          button: "",
          milestone: "Milestone: 3D Design Fee"
        },
        {
          subtitle: "Finalize Your Design",
          description: "Agree on a design to move forward with production.",
          button: "",
          milestone: ""
        }
      ]
    },
    {
      id: 3,
      title: "Place The Order",
      image: "/_next/static/media/image3.493b9a3b.gif",
      items: [
        {
          subtitle: "Start the Order Process",
          description: "Pay 50% of the final quote to get started.",
          button: "",
          milestone: ""
        },
        {
          subtitle: "The Work Commences",
          description: "Track your project status through our portal.",
          button: "",
          milestone: ""
        }
      ]
    },
    {
      id: 4,
      title: "Production",
      image: "/_next/static/media/image4.ee79520e.gif",
      items: [
        {
          subtitle: "Receive Updates",
          description: "We'll keep you updated on your Dream Temple's progress. You'll have the chance to provide feedback and approvals as needed.",
          button: "",
          milestone: ""
        },
        {
          subtitle: "Share Your Approval",
          description: "Approve the final pictures of the temple to proceed to the next stage.",
          button: "",
          milestone: "Milestone: Pay the remaining 50%"
        }
      ]
    },
    {
      id: 5,
      title: "Prepare for Dispatch",
      image: "/_next/static/media/image5.0083fac6.gif",
      items: [
        {
          subtitle: "International Packaging",
          description: "Once the full payment is received, we'll carefully pack your order and share videos of the process.",
          button: "",
          milestone: ""
        },
        {
          subtitle: "Dispatch from Our Production",
          description: "Your shipment will be dispatched, ready to reach your doorstep.",
          button: "",
          milestone: ""
        }
      ]
    },
    {
      id: 6,
      title: "On-Site Installation",
      image: "/_next/static/media/image1.84c47ee9.gif",
      items: [
        {
          subtitle: "Transit Updates",
          description: "Stay informed about your shipment's journey.",
          button: "",
          milestone: ""
        },
        {
          subtitle: "Unpacking and Installation",
          description: "When your shipment arrives, we'll schedule a call to assist you with unpacking and installation.",
          button: "",
          milestone: ""
        }
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="row mb-8">
          <div className="text-center w-full">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">How It works</h3>
          </div>
        </div>

        {steps.map((step, index) => (
          <div key={step.id} className={`flex flex-col ${index > 0 ? 'mt-8' : ''}`}>
            {/* Payment Complete Banner after step 4 */}
            {step.id === 4 && (
              <div className="my-6 py-4 rounded-lg" style={{ backgroundColor: '#b08c4c' }}>
                <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center justify-center">
                    <img 
                      alt="Checkmark" 
                      width="35" 
                      height="35" 
                      className="mr-3"
                      src={`${baseUrl}/_next/static/media/check.728a30db.png`}
                    />
                    Hurrah! Complete payment has been made!
                  </h2>
                </div>
              </div>
            )}

            <div className="flex flex-col lg:flex-row justify-center items-stretch rounded-lg overflow-hidden">
              {/* Image Section - Always on left */}
              <div className="lg:w-2/5 order-1">
                <div className="h-56 md:h-64 bg-gray-100 relative">
                  <div 
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${baseUrl}${step.image})` }}
                  ></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-3/5 p-5 md:p-6 order-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{step.title}</h2>
                <ul className="space-y-4">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                      {item.subtitle && (
                        <div className="text-md font-semibold text-gray-700 mb-1">{item.subtitle}</div>
                      )}
                      {item.milestone && (
                        <div className="text-sm font-medium bg-black text-white py-1 px-3 rounded-md inline-block mb-2">
                          {item.milestone}
                        </div>
                      )}
                      {item.description && (
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      )}
                      {item.button && (
                        <button className="bg-black hover:bg-gray-800 text-white text-sm font-medium py-1.5 px-4 rounded-md transition-colors">
                          {item.button}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;