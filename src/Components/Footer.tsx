import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, MapPin, Mail, Phone, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="ds-footer">
            {/* Top CTA Banner */}
            <div className="ds-footer-cta">
                <div className="ds-container">
                    <div className="ds-footer-cta-inner">
                        <div className="ds-footer-cta-text">
                            <h3>Ready to Elevate Your Workforce Strategy?</h3>
                            <p>Contact our HR specialists today to schedule a diagnostic risk assessment.</p>
                        </div>
                        <div className="ds-footer-cta-action">
                            <Link to="/contact" className="ds-btn ds-btn-secondary">
                                Schedule Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ds-container">
                <div className="ds-footer-grid">
                    {/* Brand & Info */}
                    <div className="ds-footer-col brand-col">
                        <div className="ds-footer-brand">
                            <img src="https://ik.imagekit.io/4elddk3a9/HR-INSIGHTS/Capture.png?tr=w-185,q-50,f-auto" alt="HR Insights" className="ds-footer-logo" loading="lazy" width="185" height="36" />
                            <p className="mt-3 opacity-75">
                                HR Insights is a proudly Black woman-owned strategic HR consulting firm dedicated to transforming workforces across South Africa.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="ds-footer-col links-col">
                        <h4 className="ds-footer-title">Quick Links</h4>
                        <ul className="ds-footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Our Services</Link></li>
                            <li><Link to="/faq">Frequently Asked Questions</Link></li>
                            <li><Link to="/contact">Get In Touch</Link></li>
                        </ul>
                    </div>

                    {/* Legal & POPIA */}
                    <div className="ds-footer-col links-col">
                        <h4 className="ds-footer-title">Regulatory</h4>
                        <ul className="ds-footer-links">
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Use</Link></li>
                            <li><Link to="/popia">POPIA Compliance</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Location */}
                    <div className="ds-footer-col contact-col">
                        <h4 className="ds-footer-title">Contact Us</h4>
                        <div className="ds-footer-contact-card">
                            <div className="contact-item">
                                <MapPin size={18} className="contact-icon" />
                                <div className="contact-details">
                                    <span className="contact-label">Location</span>
                                    <span className="contact-value">Pretoria, Gauteng, SA</span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <Mail size={18} className="contact-icon" />
                                <div className="contact-details">
                                    <span className="contact-label">Email Address</span>
                                    <a href="mailto:hrinsights1@outlook.com" className="contact-value link">hrinsights1@outlook.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <Phone size={18} className="contact-icon" />
                                <div className="contact-details">
                                    <span className="contact-label">Phone</span>
                                    <a href="tel:+27694082742" className="contact-value link">+27 69 408 2742</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <Clock size={18} className="contact-icon" />
                                <div className="contact-details">
                                    <span className="contact-label">Office Hours</span>
                                    <span className="contact-value">Mon-Fri: 8AM - 4PM <br/>Weekends: Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="ds-footer-bottom">
                    <div className="ds-footer-bottom-inner">
                        <p className="mb-0 opacity-75">
                            &copy; {currentYear} HR Insights ZA. All rights reserved.
                        </p>
                        <div className="ds-footer-socials">
                            <a href="https://www.linkedin.com/company/hr-insights-with-vivian/" target="_blank" rel="noopener noreferrer" className="ds-social-icon" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61583501392648" target="_blank" rel="noopener noreferrer" className="ds-social-icon" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/_hrinsights_/" target="_blank" rel="noopener noreferrer" className="ds-social-icon" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}