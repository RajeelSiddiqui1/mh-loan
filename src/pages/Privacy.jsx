import { Shield, Lock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Shield className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-text mb-6"
          >
            Privacy Policy & <span className="text-gradient">Legal Terms</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted"
          >
            Last Updated: October 15, 2025
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-border space-y-12"
        >
          {/* Section 1 */}
          <section>
            <h2 className="flex items-center text-2xl font-bold text-text mb-4 border-b border-border pb-2">
              <Eye className="w-6 h-6 mr-3 text-primary" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                At MH Loan, safeguarding your personal and financial information is our highest priority. We collect information that you provide directly to us when you apply for a loan, create an account, or contact our support team.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-text">Personal Identification:</strong> Name, Date of Birth, Social Insurance Number (optional).</li>
                <li><strong className="text-text">Contact Information:</strong> Email address, phone number, physical address.</li>
                <li><strong className="text-text">Financial Data:</strong> Income verification, employment history, bank statements, credit history.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="flex items-center text-2xl font-bold text-text mb-4 border-b border-border pb-2">
              <Lock className="w-6 h-6 mr-3 text-primary" />
              How We Use Your Data
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                The information we collect is strictly used to provide, maintain, and improve our services to you. Specifically, we use your data to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Assess your eligibility for specific loan products.</li>
                <li>Verify your identity to prevent fraud and comply with Canadian Anti-Money Laundering (AML) regulations.</li>
                <li>Communicate regarding your application status, payment reminders, and customer support.</li>
                <li>Improve our proprietary risk-assessment algorithms.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">
              Data Security & Sharing
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                MH Loan employs bank-level 256-bit encryption to protect all data transmitted through our platform. We <strong>do not sell</strong> your personal information to third parties. 
              </p>
              <p>
                We may share your data with trusted third-party service providers (such as credit reporting agencies or identity verification services) strictly for the purpose of facilitating your loan application. All partners are bound by strict confidentiality agreements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text mb-4 border-b border-border pb-2">
              Your Rights (PIPEDA Compliance)
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                In accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you.</li>
                <li>Request corrections to any inaccurate or incomplete data.</li>
                <li>Withdraw consent for data processing (subject to legal and contractual restrictions regarding active loans).</li>
                <li>Request deletion of your data once all legal retention periods have expired.</li>
              </ul>
            </div>
          </section>

          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 text-center">
            <h3 className="font-bold text-text mb-2">Questions about our policy?</h3>
            <p className="text-sm text-text-muted">Contact our privacy officer at <a href="mailto:privacy@mhloan.ca" className="text-primary hover:underline">privacy@mhloan.ca</a></p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
