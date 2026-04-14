import React, { useState } from 'react';

const faqs = [
  {
    question: 'How fast will I receive my designs?',
    answer:
      'Most requests are delivered within 48 hours, depending on scope and complexity. Simple updates often arrive same-day, while new screens or flows may take 1-2 days.',
  },
  {
    question: 'What happens after I subscribe?',
    answer:
      'After subscribing, we start with a quick kickoff call, set priorities, and immediately begin building the first version of your design. You’ll receive regular updates and revisions throughout the process.',
  },
  {
    question: 'How do you communicate and manage work?',
    answer:
      'I use Slack, email, and Figma to keep everything transparent. Every design request is tracked, reviewed, and delivered through an organized workflow so you always know what’s next.',
  },
  {
    question: 'How is this different from hiring an agency?',
    answer:
      'You work directly with the designer, not through account managers. This means faster decisions, lower cost, and higher quality output without agency markup.',
  },
  {
    question: 'How does the pause feature work?',
    answer:
      'Pause anytime and resume when you’re ready. Your subscription remains active and your place in the queue is preserved, but you only pay when work is underway.',
  },
  {
    question: 'Who are the designers?',
    answer:
      'This is a founder-led studio model with a senior design expert handling the work directly. The team is small, experienced, and focused on fast, high-quality product design.',
  },
  {
    question: 'Is there a limit to how many requests I can make?',
    answer:
      'There is no hard limit on requests, but work is managed in a queue to ensure speed and quality. Large projects are scoped and delivered in prioritized batches.',
  },
  {
    question: 'Are there any requests you don’t support?',
    answer:
      'I focus on digital product design, landing pages, dashboards, and brand-related UI work. Highly specialized engineering or physical product design is not supported.',
  },
  {
    question: 'Still undecided?',
    answer:
      'If you are unsure, let’s talk. I can help you understand the best path forward, what to build first, and how to get the most value from design.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-[1210px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-[32px] font-bold  text-black mb-4">Have a question?</p>
              <h2 className="text-[32px] text-[#b3b3b3]  font-semibold ">
                I’m happy to chat
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-neutral-200">
                <button
                  type="button"
                  className="w-full py-4 flex items-center justify-between text-left"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="text-[18px]  md:text-lg font-medium text-neutral-900">
                    {faq.question}
                  </span>
                  <span className="text-2xl cursor-pointer text-neutral-500">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out opacity-100"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0px',
                    opacity: openIndex === index ? 1 : 0,
                    transitionProperty: 'max-height, opacity',
                  }}
                >
                  <div className="pb-4 text-[14px] leading-7 text-[#b3b3b3]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
