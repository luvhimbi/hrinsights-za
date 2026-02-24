import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
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
            className={`ds-navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'nav-open' : ''}`}
            role="banner"
        >

            <div className="ds-navbar-inner">
                <Link
                    to="/"
                    className="ds-navbar-brand"
                    aria-label="HR Insights home"
                    onClick={closeMobileMenu}
                >
                    <img src="https://ik.imagekit.io/4elddk3a9/HR-INSIGHTS/Capture.png" alt="HR Insights" className="ds-navbar-logo-img" />
                    {/*<div className="ds-navbar-logo-text">*/}
                    {/*    <span className="ds-navbar-logo">HR Insights</span>*/}
                    {/*    <span className="ds-navbar-tagline">Recruitment &amp; HR Services</span>*/}
                    {/*</div>*/}
                </Link>

                <nav aria-label="Main navigation" className={`ds-nav-container ${mobileOpen ? 'active' : ''}`}>
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
        </header>
    );
}