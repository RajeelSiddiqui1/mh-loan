import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Users } from 'lucide-react';

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const teamMembers = [
    { 
      name: 'Sarah Jenkins', 
      role: 'CEO & Founder', 
      bio: 'With over 20 years of experience in Canadian banking, Sarah founded MH Loan to provide a more transparent and accessible lending experience for everyone.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80' 
    },
    { 
      name: 'Michael Chen', 
      role: 'Chief Financial Officer', 
      bio: 'Michael brings deep expertise in risk management and capital allocation, ensuring that we offer competitive rates while maintaining financial stability.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80' 
    },
    { 
      name: 'Emily Tremblay', 
      role: 'Head of Customer Relations', 
      bio: 'Emily is passionate about financial literacy and leads our team of advisors to provide personalized support to every client that walks through our doors.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80' 
    },
    { 
      name: 'David Okafor', 
      role: 'Lead Technical Architect', 
      bio: 'Spearheading our digital transformation, David ensures our platform is secure, resilient, and provides a seamless online application process.',
      image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&q=80' 
    },
    { 
      name: 'Jessica Reynolds', 
      role: 'Senior Loan Officer', 
      bio: 'Jessica specializes in mortgage refinancing and helps families restructure their debt to improve their long-term financial health.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80' 
    },
    { 
      name: 'Marcus Li', 
      role: 'Business Lending Specialist', 
      bio: 'A former entrepreneur himself, Marcus understands the unique challenges faced by Canadian startups and helps businesses secure vital funding.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80' 
    },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
          >
            <Users className="w-10 h-10 text-primary dark:text-blue-400" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-text mb-6"
          >
            Meet Our <span className="text-gradient">Expert Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Driven by passion and expertise, our team is dedicated to reshaping the Canadian financial landscape and fighting for your best interests.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-card rounded-3xl overflow-hidden group border border-border/50 hover:border-primary/40 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-colors shadow-lg">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-colors shadow-lg">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-colors shadow-lg">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 bg-surface">
                <h3 className="text-2xl font-bold text-text mb-1">{member.name}</h3>
                <p className="text-primary dark:text-blue-400 font-semibold mb-4 tracking-wide text-sm uppercase">{member.role}</p>
                <div className="w-12 h-1 bg-secondary rounded-full mb-4"></div>
                <p className="text-text-muted leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Team;
