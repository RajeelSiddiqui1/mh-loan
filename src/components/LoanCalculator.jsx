import { useState } from 'react';
import { motion } from 'framer-motion';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(36); // in months

  const calculateMonthlyPayment = () => {
    if (loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) return 0;
    const monthlyRate = interestRate / 100 / 12;
    const payment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return payment.toFixed(2);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = (monthlyPayment * loanTerm).toFixed(2);
  const totalInterest = (totalPayment - loanAmount).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6 md:p-8 max-w-xl w-full mx-auto"
    >
      <h3 className="text-2xl font-bold mb-6 text-center text-gradient">
        Loan Calculator
      </h3>

      <div className="space-y-6">
        {/* Loan Amount */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-text">Loan Amount</label>
            <span className="text-sm font-bold text-primary dark:text-blue-400">
              ${loanAmount.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary dark:accent-primary-dark"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-text">Interest Rate (%)</label>
            <span className="text-sm font-bold text-primary dark:text-blue-400">
              {interestRate}%
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary dark:accent-primary-dark"
          />
        </div>

        {/* Loan Term */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-text">Loan Term (Months)</label>
            <span className="text-sm font-bold text-primary dark:text-blue-400">
              {loanTerm} Months
            </span>
          </div>
          <input
            type="range"
            min="6"
            max="120"
            step="6"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary dark:accent-primary-dark"
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-surface rounded-xl shadow-sm border border-border/50">
          <p className="text-xs text-text-muted mb-1 uppercase tracking-wider">
            Monthly
          </p>
          <p className="text-xl font-bold text-text">${monthlyPayment}</p>
        </div>
        <div className="p-4 bg-surface rounded-xl shadow-sm border border-border/50">
          <p className="text-xs text-text-muted mb-1 uppercase tracking-wider">
            Total Interest
          </p>
          <p className="text-xl font-bold text-text">${totalInterest}</p>
        </div>
        <div className="p-4 bg-primary/10 rounded-xl shadow-sm border border-primary/20">
          <p className="text-xs text-primary dark:text-blue-400 mb-1 uppercase tracking-wider font-semibold">
            Total Paid
          </p>
          <p className="text-xl font-bold text-primary dark:text-blue-400">
            ${totalPayment}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <button className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background">
          Apply Now
        </button>
      </div>
    </motion.div>
  );
};

export default LoanCalculator;
