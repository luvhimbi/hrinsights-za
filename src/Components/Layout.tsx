import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import { ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';

export default function Layout() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      <WhatsAppWidget />

      <button
        className={`scroll-to-top ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Return to top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
}

