import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Live Chat Button */}
      <button 
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary hover:bg-primary-dark text-white rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-2 group"
        aria-label="Live Chat Support"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-surface text-text px-3 py-1 rounded-lg text-sm font-semibold shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </span>
      </button>
    </div>
  );
};

export default Layout;
