import React, { useState } from 'react';

const faqs = [
  {
    question: 'How fast will I receive my designs?',
    answer:
      'Most requests are completed within two days or less, while more complex tasks may require additional time.',
  },
  {
    question: 'What happens after I subscribe?',
    answer:
      'After subscribing, I’ll set up your personal Trello board within a few hours. Once you accept the invitation, you’re ready to begin. The board includes clear, step-by-step guidance on how to submit your design requests.',
  },
  {
    question: 'How do you communicate and manage work?',
    answer:
      'Communication is simple, clear, and transparent. Day-to-day collaboration happens in Slack, with tasks and priorities organized in Trello. I’m flexible and can easily adapt to your existing workflow, including tools like Jira or Linear. I collaborate closely with developers and deliver well-structured, developer-ready handoffs to ensure smooth and precise execution.',
  },
  {
    question: 'How is this different from hiring an agency?',
    answer:
      'You work directly with the designer—no account managers involved. This enables faster decisions, lower costs, and higher-quality outcomes without agency markup.',
  },
  {
    question: 'How does the pause feature work?',
    answer:
      'You can pause or resume your subscription at any time. Your position in the queue is retained, and you’re only billed while work is actively being completed.',
  },
  {
    question: 'Who are the designers?',
    answer:
      'A founder-led studio model where a senior designer leads and executes the work directly. Backed by a small, experienced team, the focus is on fast, high-quality product design.',
  },
  {
    question: 'Is there a limit to how many requests I can make?',
    answer:
      'Unlimited requests. One active queue. Steady, high-quality delivery..',
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
    <section  className="bg-white faqMobile text-black py-20">
      <div className="max-w-[1210px] innerFaq mx-auto px-6">
        <div className="GapMobile grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-[32px] font-bold  text-black mb-4">Have a question?</p>
              <h2 className="text-[32px] text-[#b3b3b3]   font-[500] leading-tight">
                I’m happy to chat
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className=" border-b border-neutral-200">
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
