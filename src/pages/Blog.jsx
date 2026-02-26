import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: "5 Tips to Improve Your Credit Score Fast",
      excerpt: "Your credit score is crucial for securing the best interest rates. Discover actionable strategies you can implement today to see quick improvements in your credit profile.",
      category: "Financial Advice",
      author: "Sarah Jenkins",
      date: "Oct 12, 2025",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    },
    {
      title: "How to Secure Funding for Your Small Business",
      excerpt: "Navigating business loans in Canada can be complex. Learn the essential documents you need, what lenders look for, and how to present an irresistible application.",
      category: "Business Loans",
      author: "Marcus Li",
      date: "Oct 05, 2025",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=800&q=80"
    },
    {
      title: "Understanding Fixed vs Variable Mortgage Rates",
      excerpt: "Should you lock in your rate or float with the market? We break down the pros and cons of fixed and variable mortgages to help you make the best choice for your family.",
      category: "Mortgages",
      author: "Jessica Reynolds",
      date: "Sep 28, 2025",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
    },
    {
      title: "Case Study: Debt Consolidation Saved the Smith Family",
      excerpt: "Read how combining multiple high-interest debts into one lower-interest personal loan helped a family save thousands in interest and become debt-free years sooner.",
      category: "Case Studies",
      author: "Emily Tremblay",
      date: "Sep 20, 2025",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-text mb-6"
          >
            Insights & <span className="text-gradient">Financial Advice</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Stay updated with the latest tips for managing your loans, understanding your finances, and achieving your ultimate goals.
          </motion.p>
        </div>

        {/* Featured Post (First one) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-3xl overflow-hidden glass-card grid grid-cols-1 lg:grid-cols-2 group hover:shadow-xl transition-all"
        >
          <div className="h-64 lg:h-full w-full overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10 bg-secondary text-primary font-bold px-4 py-1 rounded-full text-sm shadow-md">
              Featured
            </div>
            <img 
              src={posts[0].imageUrl} 
              alt={posts[0].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center bg-surface">
            <div className="flex items-center text-sm text-text-muted mb-4 space-x-4">
              <span className="flex items-center"><Tag className="w-4 h-4 mr-1 text-primary" /> {posts[0].category}</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1 text-primary" /> {posts[0].date}</span>
            </div>
            <h2 className="text-3xl font-bold text-text mb-4 leading-tight">{posts[0].title}</h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">{posts[0].excerpt}</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <User className="w-5 h-5" />
                </div>
                <span className="font-semibold text-text">{posts[0].author}</span>
              </div>
              <Link to={`/blog/1`} className="inline-flex items-center text-primary font-bold hover:text-primary-dark group-hover:translate-x-1 transition-transform">
                Read More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur text-text font-bold px-3 py-1 rounded shadow-sm text-xs">
                  {post.category}
                </div>
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-surface">
                <div className="flex items-center text-xs text-text-muted mb-3 space-x-3">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-primary" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-3 h-3 mr-1 text-primary" /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                
                <p className="text-sm text-text-muted mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${index + 2}`} className="inline-flex items-center text-primary text-sm font-bold mt-auto group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
