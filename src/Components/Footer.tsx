import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="ds-footer">
            <div className="ds-container">
                <div className="ds-footer-grid">
                    {/* Brand & Info */}
                    <div className="ds-footer-col">
                        <div className="ds-footer-brand">
                            <img src="https://ik.imagekit.io/4elddk3a9/HR-INSIGHTS/Capture.png" alt="HR Insights" className="ds-footer-logo" />
                            <p className="mt-3 opacity-75">
                                Modern, human-centered HR consultancy dedicated to transforming workforces.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="ds-footer-col">
                        <h4 className="ds-footer-title">Quick Links</h4>
                        <ul className="ds-footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>

                    </div>

                    {/* Legal & POPIA */}
                    <div className="ds-footer-col">
                        <h4 className="ds-footer-title">Legal</h4>
                        <ul className="ds-footer-links">
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Use</Link></li>
                            <li><Link to="/popia">POPIA Compliance</Link></li>
                        </ul>
                    </div>


                    {/* Contact & Location */}
                    <div className="ds-footer-col">
                        <h4 className="ds-footer-title">Contact Us</h4>
                        <ul className="ds-footer-contact">
                            <li>
                                <span className="opacity-50">Location:</span>
                                Pretoria, Gauteng, SA
                            </li>
                            <li>
                                <span className="opacity-50">Email Address:</span>
                                hrinsights1@outlook.com
                            </li>
                            <li>
                                <span className="opacity-50">Phone:</span>
                                27694082742
                            </li>
                            <li>
                                <span className="opacity-50">Hours:</span>
                                Mon-Fri 8AM to 4PM, Weekends closed
                            </li>
                            <li className="ds-footer-social-column">
                                <div className="ds-footer-social-wrapper">
                                    <span className="opacity-50">Follow Us:</span>
                                    <div className="ds-footer-socials">
                                        <a href="https://www.linkedin.com/company/hr-insights-with-vivian/" target="_blank" rel="noopener noreferrer" className="ds-social-icon" aria-label="LinkedIn">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href="https://www.facebook.com/profile.php?id=61583501392648" target="_blank" rel="noopener noreferrer" className="ds-social-icon" aria-label="Facebook">
                                            <Facebook size={20} />
                                        </a>
                                        <a href="https://www.instagram.com/_hrinsights_/" target="_blank" rel="noopener noreferrer" className="ds-social-icon" aria-label="Instagram">
                                            <Instagram size={20} />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="ds-footer-bottom">
                    <p className="mb-0 opacity-50 text-sm">
                        &copy; {currentYear} HR Insights ZA. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}