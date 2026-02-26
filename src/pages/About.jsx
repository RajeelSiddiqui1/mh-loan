import { motion } from 'framer-motion';
import { Target, Heart, Shield, Users, Award, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const values = [
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: 'Our Mission',
      description: 'Providing accessible, fair, and transparent financial solutions for all Canadians, regardless of their background.',
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: 'Customer First',
      description: 'We prioritize your financial well-being above all else, ensuring you get the best possible terms and support.',
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: 'Integrity',
      description: 'Honesty and transparency are at the core of our operations. No hidden fees, no complicated jargon.',
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: 'Excellence',
      description: 'We strive for excellence in every interaction, delivering top-tier service and innovative lending solutions.',
    },
  ];

  const milestones = [
    { year: '2015', title: 'Company Founded', desc: 'Started with a small office in Toronto.' },
    { year: '2018', title: 'National Expansion', desc: 'Expanded services across all Canadian provinces.' },
    { year: '2021', title: 'Digital First', desc: 'Launched our award-winning online loan application platform.' },
    { year: '2024', title: '100,000+ Clients', desc: 'Reached a major milestone of funding over 100k Canadians.' },
  ];

  return (
    <div className="pt-20 pb-24">
      {/* Header Section */}
      <section className="bg-surface py-20 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text mb-6"
          >
            About <span className="text-gradient">MH Loan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-3xl mx-auto"
          >
            Empowering Canadians with intelligent financial solutions and unwavering support since 2015.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Core Values</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">The principles that guide everything we do.</p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card p-8 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{value.title}</h3>
              <p className="text-text-muted text-base leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* History / Achievements */}
      <section className="py-24 bg-surface/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{duration: 0.6}}>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Our Journey So Far</h2>
              <p className="text-lg text-text-muted mb-8">
                From a small financial consultancy to becoming one of Canada's most trusted online lending platforms. Our journey has always been about putting the customer first.
              </p>
              
              <div className="space-y-8">
                {milestones.map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg">
                        {item.year}
                      </div>
                      {idx !== milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                      <p className="text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{duration: 0.6, delay: 0.2}} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-3xl blur-2xl transform rotate-3"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaborating" className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[600px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the team CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-text mb-6">The People Behind the Platform</h2>
        <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">Our team of experts works tirelessly to ensure you receive the financing you deserve.</p>
        <Link to="/team" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all hover:-translate-y-1">
          Meet Our Team <ChevronRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
};

export default About;
