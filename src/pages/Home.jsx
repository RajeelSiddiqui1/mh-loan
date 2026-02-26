import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Clock, Percent, ThumbsUp, ArrowRight, Star, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoanCalculator from '../components/LoanCalculator';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const features = [
    { icon: <ShieldCheck className="w-8 h-8 text-secondary" />, title: 'Trusted & Secure', description: 'Bank-level security protecting your data and finances, trusted by thousands of Canadians.' },
    { icon: <Clock className="w-8 h-8 text-secondary" />, title: 'Fast Approval', description: 'Get approved in minutes, not days. Funds deposited directly into your account fast.' },
    { icon: <Percent className="w-8 h-8 text-secondary" />, title: 'Competitive Rates', description: 'Enjoy low-interest rates starting from 5.49% for excellent credit borrowers.' },
    { icon: <ThumbsUp className="w-8 h-8 text-secondary" />, title: 'No Hidden Fees', description: 'Complete transparency with zero origination or hidden fees on personal loans.' },
  ];

  const steps = [
    { num: "01", icon: <FileText className="w-8 h-8 text-primary" />, title: "Apply Online", text: "Complete our simple, secure 5-minute online application form with basic information." },
    { num: "02", icon: <CheckCircle2 className="w-8 h-8 text-primary" />, title: "Quick Approval", text: "Receive an instant preliminary decision followed by a rapid manual review of submitted docs." },
    { num: "03", icon: <ArrowRight className="w-8 h-8 text-primary" />, title: "Get Funded", text: "Once fully approved, funds are transferred via e-transfer or direct deposit within 24 hours." },
  ];

  const testimonials = [
    { text: "MH Loan approved my business financing within 24 hours. Their transparency and lower rates compared to big banks made all the difference.", author: "James T.", role: "Small Business Owner", rating: 5 },
    { text: "I needed emergency funds for home repairs. The team was incredibly supportive, and the online process was flawlessly smooth. Highly recommend!", author: "Samantha R.", role: "Homeowner", rating: 5 },
    { text: "No hidden fees, no confusing jargon. Just straight-forward lending with excellent customer service. They truly care about your financial health.", author: "David M.", role: "Software Engineer", rating: 5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="bg-background pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] opacity-70 animate-float" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px] opacity-60 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Text */}
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <motion.span variants={itemVariants} className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-bold tracking-wider uppercase mb-8 shadow-sm">
                Top Rated Canadian Lender
              </motion.span>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text tracking-tight mb-6 leading-[1.1]">
                Smart Funding <br/> When You Need It <span className="text-gradient">Most.</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-muted mb-10 max-w-xl leading-relaxed font-medium">
                Flexible loans, competitive rates, and a seamless process designed for Canadians. Instant decisions, zero hassle.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
                <Link to="/apply" className="inline-flex justify-center items-center py-4 px-10 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transform">
                  Apply Now
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link to="/services" className="inline-flex justify-center items-center py-4 px-10 border-2 border-border hover:border-primary text-text hover:text-primary dark:hover:text-cyan-400 bg-surface/50 backdrop-blur-sm text-lg font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                  Explore Services
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-10 flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i)=>(
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-12 h-12 rounded-full border-2 border-background shadow-md"/>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-background bg-secondary text-primary font-bold flex items-center justify-center text-xs shadow-md">
                    +10k
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    {[1,2,3,4,5].map((s)=><Star key={s} className="w-4 h-4 fill-current"/>)}
                  </div>
                  <span className="text-sm font-semibold text-text-muted">4.9/5 from 2,500+ reviews</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Loan Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:ml-auto w-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-2xl transform rotate-3"></div>
              <div className="relative z-10">
                <LoanCalculator />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps to Apply */}
      <section className="py-24 bg-surface border-y border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6">3 Simple Steps to Funding</h2>
            <p className="text-xl text-text-muted">No mountains of paperwork, no anxious waiting. Just a streamlined digital experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center"
              >
                {/* Connecting Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30 z-0"></div>
                )}
                
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background shadow-xl flex items-center justify-center mb-8 relative z-10 group hover:scale-110 transition-transform duration-300">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-primary font-bold flex items-center justify-center text-sm shadow-md">
                    {step.num}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{step.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed px-4">{step.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/apply" className="inline-flex text-primary dark:text-cyan-400 font-bold text-lg items-center hover:underline underline-offset-4">
              Start Your Application <ArrowRight className="ml-2 w-5 h-5"/>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-text mb-6">Why Choose MH Loan?</h2>
            <p className="text-xl text-text-muted">We stand apart from traditional banks by offering a more personalized, modern approach to lending.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 rounded-3xl border border-border/60 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-sm border border-border">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{feature.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary/5 border-t border-border overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-text mb-16">Stories from Our Clients</h2>
          
          <div className="h-64 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full px-4"
              >
                <div className="flex justify-center mb-6 text-yellow-500">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current mx-1 drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl text-text font-medium leading-relaxed italic mb-8 max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-text">{testimonials[currentTestimonial].author}</h4>
                  <span className="text-primary font-semibold">{testimonials[currentTestimonial].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentTestimonial ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-secondary/20 blur-[120px] rounded-full point-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to achieve your financial goals?</h2>
          <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Join thousands of satisfied Canadians who have taken control of their financial future with MH Loan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/apply" className="inline-flex items-center justify-center bg-secondary text-primary font-bold text-xl py-5 px-12 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] hover:-translate-y-2 transition-all duration-300 transform">
              Get Started Now <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-xl py-5 px-12 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-xl">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
