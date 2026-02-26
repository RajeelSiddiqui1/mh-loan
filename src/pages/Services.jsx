import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Home, CreditCard, DollarSign, Car, GraduationCap, Sprout, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  const services = [
    {
      id: "personal",
      icon: <CreditCard className="w-10 h-10 text-secondary" />,
      title: 'Personal Loan',
      description: 'Whether it’s for home improvements, medical expenses, or consolidating debt, our personal loans offer flexible terms and fast approval.',
      rate: '5.49% - 15.99%',
      features: ['Up to $50,000', 'Terms from 12-60 months', 'Fixed or variable interest rates', 'Get funds in 24 hours'],
      eligibility: ['Minimum credit score: 600', 'Verifiable income > $30,000/yr', 'Canadian resident 18+'],
      docs: ['Government ID', '2 recent pay stubs', 'Bank statements (last 60 days)']
    },
    {
      id: "home",
      icon: <Home className="w-10 h-10 text-secondary" />,
      title: 'Home Loan / Mortgage',
      description: 'Buy your first home, refinance, or tap into your equity. We offer highly competitive fixed and variable rates tailored to the Canadian market.',
      rate: '4.25% - 7.50%',
      features: ['Terms from 1-10 years', 'Amortization up to 30 years', 'Pre-approval in minutes', 'First-time buyer incentives'],
      eligibility: ['Minimum 5% down payment', 'Debt-to-income ratio < 44%', 'Consistent employment history'],
      docs: ['T4/Notice of Assessment', 'Purchase Agreement', 'Proof of down payment']
    },
    {
      id: "car",
      icon: <Car className="w-10 h-10 text-secondary" />,
      title: 'Car Loan / Auto Loan',
      description: 'Finance your new or used vehicle with flexible repayment plans. Drive away confidently with fixed rates and no hidden dealer fees.',
      rate: '6.99% - 12.99%',
      features: ['Up to 100% financing', 'Terms up to 84 months', 'Same-day dealer funding', 'Refinance existing auto loans'],
      eligibility: ['No repossession history', 'Steady income', 'Valid Canadian driver’s license'],
      docs: ['Driver’s License', 'Proof of income', 'Vehicle details (VIN/Bill of Sale)']
    },
    {
      id: "business",
      icon: <Briefcase className="w-10 h-10 text-secondary" />,
      title: 'Business Loan',
      description: 'Fuel your company\'s growth with our tailored business financing solutions. Designed for startups and established enterprises alike.',
      rate: '7.50% - 18.00%',
      features: ['Up to $500,000', 'Working capital or equipment financing', 'No early repayment penalties', 'Revolving line of credit option'],
      eligibility: ['Minimum 1 year in business', 'Annual revenue > $100,000', 'Business registered in Canada'],
      docs: ['Business Registration Docs', 'Corporate Tax Returns', 'Business Bank Statements (6 mos)']
    },
    {
      id: "education",
      icon: <GraduationCap className="w-10 h-10 text-secondary" />,
      title: 'Education Loan',
      description: 'Invest in your future. Cover tuition, books, and living expenses for undergraduate, graduate, or specialized technical programs.',
      rate: 'Variable (Prime + 1%)',
      features: ['Covers up to 100% of attendance cost', 'Grace period after graduation', 'Interest-only payments while in school', 'Co-signer release possible'],
      eligibility: ['Enrolled full-time at accredited institution', 'Canadian citizen or PR'],
      docs: ['Proof of Enrollment', 'Tuition Invoice', 'Co-signer documents (if applicable)']
    },
    {
      id: "agri",
      icon: <Sprout className="w-10 h-10 text-secondary" />,
      title: 'Agriculture / Farming Loan',
      description: 'Specialized financing for Canadian farmers to purchase land, livestock, equipment, or manage seasonal cash flow variations.',
      rate: 'Customized based on risk',
      features: ['Flexible payment schedules aligned with harvest', 'Equipment leasing alternatives', 'Government guarantee program eligibility'],
      eligibility: ['Proven farming experience', 'Viable business plan for new farms'],
      docs: ['Farm Business Plan', 'Previous yield records', 'Equipment/Land appraisals']
    },
    {
      id: "gold",
      icon: <Quote className="w-10 h-10 text-secondary" />,
      title: 'Gold / Jewelry Loan',
      description: 'Unlock the value of your assets without selling them. Quick cash secured against your gold or high-value jewelry.',
      rate: '9.99% - 14.99%',
      features: ['No credit check required', 'Instant cash available', 'Secure vault storage', 'Keep ownership of your assets'],
      eligibility: ['Items must appraise for minimum $500', 'Legal age of majority'],
      docs: ['Valid Government ID', 'Original purchase receipts/certificates (if available)']
    },
    {
      id: "payday",
      icon: <DollarSign className="w-10 h-10 text-secondary" />,
      title: 'Payday / Short-Term Loan',
      description: 'Fast financial relief for unexpected emergencies before your next paycheck. Transparent fee structure with no hidden surprises.',
      rate: 'Flat Fee per $100 borrowed',
      features: ['Borrow $100 to $1,500', 'Instant e-transfer', 'Repay on your next payday', 'No prepayment penalty'],
      eligibility: ['Active checking account', 'Net income > $1,200/mo', 'Employed for 3+ months'],
      docs: ['Last Pay Stub', 'Blank Void Cheque/Direct Deposit Form']
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text mb-6"
          >
            Lending Solutions Designed for <span className="text-gradient">You</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-3xl mx-auto"
          >
            Explore our comprehensive suite of financial products tailored to meet the diverse needs of individuals and businesses across Canada.
          </motion.p>
        </div>

        {/* Categories Tab selector (mobile scrollable) */}
        <div className="mb-12 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex space-x-4 min-w-max justify-center">
            {services.map((svc, idx) => (
              <button
                key={svc.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-sm ${
                  activeTab === idx 
                    ? 'bg-primary text-white scale-105 shadow-md' 
                    : 'bg-surface text-text-muted hover:bg-surface-hover border border-border'
                }`}
              >
                {svc.title.split('/')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content (Detailed View) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-3xl p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              {/* Left Column: Icon, Title, Description, CTA */}
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-inner border border-primary/20">
                  {services[activeTab].icon}
                </div>
                <h2 className="text-3xl font-extrabold text-text mb-4 leading-tight">{services[activeTab].title}</h2>
                <p className="text-lg text-text-muted mb-6 leading-relaxed flex-grow">
                  {services[activeTab].description}
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 mt-auto">
                  <span className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Standard Interest Rate</span>
                  <span className="text-3xl font-bold text-primary dark:text-cyan-400">{services[activeTab].rate}</span>
                </div>

                <Link to="/apply" className="inline-flex items-center justify-center w-full lg:w-max px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                  Apply Now <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </div>

              {/* Right Column: Features, Eligibility, Docs */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-text mb-4 border-b border-border pb-2">Key Features</h3>
                  <ul className="space-y-3">
                    {services[activeTab].features.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mr-3 mt-0.5" />
                        <span className="text-text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-text mb-4 border-b border-border pb-2">Eligibility Criteria</h3>
                  <ul className="space-y-3 list-disc pl-6">
                    {services[activeTab].eligibility.map((item, i) => (
                      <li key={i} className="text-text-muted marker:text-primary">{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-text mb-4 border-b border-border pb-2">Required Documents</h3>
                  <div className="flex flex-wrap gap-2">
                    {services[activeTab].docs.map((doc, i) => (
                      <span key={i} className="inline-block bg-surface border border-border text-text-muted text-sm font-semibold px-4 py-2 rounded-lg shadow-sm">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Services;
