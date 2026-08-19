import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'FAQ', path: '/faq' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const closeMobileMenu = () => setMobileOpen(false);

    return (
        <header
            className={`ds-navbar-wrapper ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'nav-open' : ''}`}
            role="banner"
        >
            {/* Main Navbar */}
            <div className="ds-navbar">
                <div className="ds-navbar-inner">
                    <Link
                        to="/"
                        className="ds-navbar-brand"
                        aria-label="HR Insights home"
                        onClick={closeMobileMenu}
                    >
                        <img src="https://ik.imagekit.io/4elddk3a9/HR-INSIGHTS/Capture.png?tr=w-185,q-50,f-auto" alt="HR Insights" className="ds-navbar-logo-img" loading="lazy" width="185" height="36" />
                    </Link>

                    <div className="ds-navbar-right">
                        {/* Desktop Navigation Links */}
                        <nav aria-label="Main navigation" className="ds-nav-container">
                            <ul className="ds-navbar-links">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.path}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                            end={link.path === '/'}
                                            onClick={closeMobileMenu}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Desktop Navigation CTA */}
                        <div className="ds-navbar-cta-desktop">
                            <Link to="/contact" className="ds-btn-nav">
                                Get in Touch
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            type="button"
                            className="ds-navbar-toggle"
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Menu Overlay */}
            <div className={`ds-mobile-drawer ${mobileOpen ? 'active' : ''}`}>
                <div className="ds-mobile-drawer-inner">
                    <div className="ds-mobile-drawer-header">
                        <img src="https://ik.imagekit.io/4elddk3a9/HR-INSIGHTS/Capture.png?tr=w-185,q-50,f-auto" alt="HR Insights" className="ds-mobile-logo-img" />
                    </div>

                    <ul className="ds-mobile-links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
                                    end={link.path === '/'}
                                    onClick={closeMobileMenu}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <Link to="/contact" className="mobile-link mobile-cta-link" onClick={closeMobileMenu}>
                                Get in Touch
                            </Link>
                        </li>
                    </ul>

                    <div className="ds-mobile-drawer-footer">
                        <div className="ds-mobile-contact-info">
                            <a href="tel:+27694082742" className="mobile-contact-item">
                                <Phone size={16} /> <span>+27 69 408 2742</span>
                            </a>
                            <a href="mailto:hrinsights1@outlook.com" className="mobile-contact-item">
                                <Mail size={16} /> <span>hrinsights1@outlook.com</span>
                            </a>
                        </div>
                        <div className="ds-mobile-socials">
                            <a href="https://www.linkedin.com/company/hr-insights-with-vivian/" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61583501392648" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/_hrinsights_/" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}