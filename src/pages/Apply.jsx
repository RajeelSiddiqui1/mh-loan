import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FileText, User, Banknote, Upload, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Apply = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = (e) => {
    e.preventDefault();
    if (step < totalSteps) setStep(step + 1);
  };
  
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepsInfo = [
    { num: 1, title: 'Loan Details', icon: <Banknote className="w-5 h-5" /> },
    { num: 2, title: 'Personal Info', icon: <User className="w-5 h-5" /> },
    { num: 3, title: 'Documents', icon: <Upload className="w-5 h-5" /> },
    { num: 4, title: 'Review', icon: <FileText className="w-5 h-5" /> }
  ];

  return (
    <div className="pt-24 pb-32 bg-background min-h-[90vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-text mb-4"
          >
            Apply for your <span className="text-gradient">Loan</span>
          </motion.h1>
          <p className="text-text-muted text-lg">Secure, fast, and 100% online application.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-border rounded-full -z-10"></div>
            <div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-primary rounded-full -z-10 transition-all duration-500 ease-in-out" 
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
            
            {stepsInfo.map((s) => (
              <div key={s.num} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-background shadow-md transition-colors duration-500 ${
                  step >= s.num ? 'bg-primary text-white' : 'bg-surface text-text-muted'
                }`}>
                  {step > s.num ? <CheckCircle2 className="w-6 h-6" /> : s.icon}
                </div>
                <span className={`mt-3 text-xs font-bold uppercase tracking-wider hidden sm:block ${
                  step >= s.num ? 'text-primary' : 'text-text-muted'
                }`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <motion.div 
          className="glass-card p-8 md:p-12 rounded-3xl border border-border bg-surface shadow-xl relative overflow-hidden"
          layout
        >
          {step === 4 && (
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }}>
                <h2 className="text-2xl font-bold text-text mb-6">Select your loan type</h2>
                <form onSubmit={nextStep} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Loan Category</label>
                    <select required className="w-full px-4 py-4 rounded-xl border border-border bg-background text-text focus:ring-2 focus:ring-primary outline-none appearance-none">
                      <option value="">Select a loan type...</option>
                      <option value="personal">Personal Loan</option>
                      <option value="business">Business Loan</option>
                      <option value="mortgage">Mortgage Refinancing</option>
                      <option value="payday">Payday / Short Term</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Desired Loan Amount ($)</label>
                    <input type="number" min="1000" step="500" required placeholder="e.g. 15000" className="w-full px-4 py-4 rounded-xl border border-border bg-background text-text focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Preferred Tenure (Months)</label>
                    <input type="number" min="6" max="120" required placeholder="e.g. 36" className="w-full px-4 py-4 rounded-xl border border-border bg-background text-text focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  
                  <div className="pt-6 flex justify-end">
                    <button type="submit" className="flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-md hover:-translate-y-1 transform">
                      Continue <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }}>
                <h2 className="text-2xl font-bold text-text mb-6">Applicant Information</h2>
                <form onSubmit={nextStep} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">First Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Last Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Phone Number</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Social Insurance Number (Optional initially)</label>
                    <input type="text" placeholder="XXX-XXX-XXX" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text outline-none focus:ring-2 focus:ring-primary" />
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button type="button" onClick={prevStep} className="px-6 py-4 text-text-muted hover:text-text font-bold transition-colors">Back</button>
                    <button type="submit" className="flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-md hover:-translate-y-1 transform">
                      Continue <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }}>
                <h2 className="text-2xl font-bold text-text mb-6">Upload Required Documents</h2>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer bg-background/50 group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-bold text-text mb-1">Government Issued ID</p>
                    <p className="text-sm text-text-muted mb-4">Passport, Driver's License, or PR Card</p>
                    <span className="text-primary text-sm font-medium">Browse Files or Drag & Drop</span>
                  </div>
                  
                  <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer bg-background/50 group">
                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-bold text-text mb-1">Proof of Income</p>
                    <p className="text-sm text-text-muted mb-4">Last 2 Pay Stubs or T4</p>
                    <span className="text-primary text-sm font-medium">Browse Files or Drag & Drop</span>
                  </div>

                  <form onSubmit={nextStep} className="pt-6 flex justify-between">
                    <button type="button" onClick={prevStep} className="px-6 py-4 text-text-muted hover:text-text font-bold transition-colors">Back</button>
                    <button type="submit" className="flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-md hover:-translate-y-1 transform">
                      Review <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }}>
                 <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-text mb-2">Almost Done!</h2>
                  <p className="text-text-muted">Review your application details before final submission.</p>
                </div>

                <div className="bg-background rounded-xl p-6 border border-border mb-8 space-y-4">
                  <h3 className="font-bold text-text border-b border-border pb-2">Loan Summary</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Type:</span>
                    <span className="font-semibold text-text">Personal Loan</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Amount:</span>
                    <span className="font-semibold text-text">$15,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Tenure:</span>
                    <span className="font-semibold text-text">36 Months</span>
                  </div>
                  <hr className="border-border my-2" />
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 rounded border-border text-primary focus:ring-primary" id="terms" required />
                    <label htmlFor="terms" className="text-sm text-text-muted">
                      I have read and agree to the <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/privacy" className="text-primary hover:underline">Terms of Service</Link>. I authorize MH Loan to verify my identity and review my credit report.
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button type="button" onClick={prevStep} className="px-6 py-4 text-text-muted hover:text-text font-bold transition-colors">Edit Details</button>
                  <button type="submit" onClick={() => alert("Application Submitted! You will receive an email confirmation shortly.")} className="flex items-center px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-green-500/50 hover:-translate-y-1 transform">
                    Submit Application
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </div>
  );
};

export default Apply;
