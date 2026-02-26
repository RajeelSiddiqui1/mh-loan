import LoanCalculator from '../components/LoanCalculator';
import { motion } from 'framer-motion';
import { Lightbulb, Info, TrendingDown } from 'lucide-react';

const CalculatorPage = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-text mb-6"
          >
            Estimate Your <span className="text-gradient">Payments</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Use our interactive calculator to see how different borrowing amounts and terms impact your monthly budget.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full"
          >
            <LoanCalculator />
          </motion.div>

          {/* Calculator Info and Tips */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-border/50">
              <h3 className="flex items-center text-2xl font-bold text-text mb-6">
                <Info className="w-8 h-8 text-secondary mr-3" />
                How It Works
              </h3>
              <p className="text-text-muted mb-4 leading-relaxed text-lg">
                Our calculator provides a highly accurate estimate of your Equated Monthly Installment (EMI) based on the principal amount, tenure, and expected annual interest rate.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full shrink-0"></span>
                  <span className="text-text-muted"><strong>Principal:</strong> The total amount you wish to borrow.</span>
                </li>
                <li className="flex">
                  <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full shrink-0"></span>
                  <span className="text-text-muted"><strong>Interest Rate:</strong> The annual cost of the loan, entered as a percentage.</span>
                </li>
                <li className="flex">
                  <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full shrink-0"></span>
                  <span className="text-text-muted"><strong>Tenure:</strong> How long you have to repay the borrowed amount.</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-secondary/30 bg-secondary/5">
              <h3 className="flex items-center text-2xl font-bold text-text mb-6">
                <TrendingDown className="w-8 h-8 text-primary mr-3" />
                Tips to Reduce Your EMI
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col p-4 bg-surface rounded-xl shadow-sm border border-border">
                  <Lightbulb className="w-6 h-6 text-yellow-500 mb-3" />
                  <h4 className="font-bold text-text mb-1">Make a Larger Down Payment</h4>
                  <p className="text-sm text-text-muted">Reduces the principal required, lowering your interest.</p>
                </div>
                <div className="flex flex-col p-4 bg-surface rounded-xl shadow-sm border border-border">
                  <Lightbulb className="w-6 h-6 text-yellow-500 mb-3" />
                  <h4 className="font-bold text-text mb-1">Extend Your Tenure</h4>
                  <p className="text-sm text-text-muted">Lowers monthly cost (but increases total interest over time).</p>
                </div>
                <div className="flex flex-col p-4 bg-surface rounded-xl shadow-sm border border-border sm:col-span-2">
                  <Lightbulb className="w-6 h-6 text-yellow-500 mb-3" />
                  <h4 className="font-bold text-text mb-1">Improve Your Credit Score</h4>
                  <p className="text-sm text-text-muted">A higher score ensures you qualify for the lowest possible interest rates, significantly reducing costs long-term.</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default CalculatorPage;
