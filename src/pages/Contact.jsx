import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Phone Number',
      details: '+1 (800) 555-LOAN (5626)',
      subtext: 'Mon-Fri 8am-8pm EST'
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: 'Email Address',
      details: 'support@mhloan.ca',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Office Location',
      details: '123 Finance Way, Suite 400',
      subtext: 'Toronto, ON M5V 2T6, Canada'
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-text mb-6"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Have a question or need assistance? Our team of financial experts is ready to help you navigate your options.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="flex p-6 glass-card rounded-2xl border border-border/50">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text mb-1">{info.title}</h3>
                  <p className="text-text font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-text-muted">{info.subtext}</p>
                </div>
              </div>
            ))}

            {/* Simulated Map Placeholder */}
            <div className="rounded-2xl overflow-hidden glass-card border border-border/50 h-64 relative group">
              <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <span className="font-medium text-text">View on Google Maps</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                alt="Map Placeholder Toronto" 
                className="w-full h-full object-cover grayscale opacity-70"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-1 rounded shadow text-xs font-semibold text-text backdrop-blur">
                Toronto, Ontario
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2 glass-card border border-border/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-text mb-8">Send Us a Message</h2>
            
            {submitSuccess && (
              <div className="mb-8 p-4 bg-green-500/10 border border-green-500/50 rounded-xl flex items-center text-green-700 dark:text-green-400">
                <ShieldCheck className="w-6 h-6 mr-3" />
                Your message has been sent securely. We'll be in touch soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Personal Loan">Personal Loan Inquiry</option>
                    <option value="Business Loan">Business Loan Inquiry</option>
                    <option value="Mortgage">Mortgage Refinancing</option>
                    <option value="Support">Customer Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none resize-none"
                  placeholder="How can we help you today?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center py-4 px-8 border border-transparent rounded-xl text-white font-bold text-lg transition-all duration-300 ${
                  isSubmitting ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark shadow-md hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Securely...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
