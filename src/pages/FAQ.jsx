import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';

const FAQSection = ({ items, category }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-text mb-6 px-2">{category}</h3>
      <div className="space-y-4">
        {items.map((faq, index) => (
          <div key={index} className="glass-card rounded-2xl border border-border/60 overflow-hidden text-left bg-surface shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-semibold text-lg text-text">{faq.q}</span>
              <span className="ml-4 flex-shrink-0 text-primary bg-primary/10 rounded-full p-1">
                {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-text-muted leading-relaxed">
                    <hr className="border-border/50 mb-4" />
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: "General Application",
      questions: [
        { q: "How long does loan approval take?", a: "For personal and payday loans, approval can take less than 15 minutes. For larger loans like business or mortgages, expect 24-48 hours after submitting all required documents." },
        { q: "What documents are required?", a: "Typically, you'll need a government-issued ID, proof of income (last 2 pay stubs or bank statements), and proof of residence. Specific loans may require additional documentation like tax returns." },
        { q: "Can I apply if my credit score is poor?", a: "Yes. We evaluate applications based on a variety of data points, not just your credit score. If your score is low, we offer specific loan products tailored to help you rebuild your credit." }
      ]
    },
    {
      category: "Repayment & Fees",
      questions: [
        { q: "Can I prepay my loan?", a: "Absolutely! For most of our loan products (excluding some commercial mortgages), there are absolutely no early repayment penalties. You can prepay your loan and save on interest." },
        { q: "Are there any hidden fees?", a: "No. Transparency is one of our core values. All fees, including origination fees (if applicable) and APR, are clearly laid out in your loan agreement before you sign." },
        { q: "What happens if I miss a payment?", a: "A late fee may be applied if a payment is not received within the grace period (usually 5-10 days). However, we encourage you to contact us immediately if you anticipate payment issues so we can work out a solution." }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-text mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted mb-10 max-w-2xl mx-auto"
          >
            Find answers to common questions about our loan application process, processing times, and eligibility criteria.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <input 
              type="text" 
              placeholder="Search FAQs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-2xl border border-border bg-surface text-text shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-text-muted w-6 h-6" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {faqs.map((section, idx) => {
            const filteredQuestions = section.questions.filter(faq => 
              faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
              faq.a.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredQuestions.length === 0) return null;

            return (
              <FAQSection key={idx} category={section.category} items={filteredQuestions} />
            );
          })}
        </motion.div>

        {/* Still have questions */}
        <div className="mt-16 text-center bg-primary/5 rounded-3xl p-10 border border-primary/20">
          <h3 className="text-2xl font-bold text-text mb-4">Still have questions?</h3>
          <p className="text-text-muted mb-8 text-lg">Our dedicated support team is available from 8am to 8pm EST.</p>
          <a href="/contact" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-dark shadow-md transition-all hover:-translate-y-1">
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
