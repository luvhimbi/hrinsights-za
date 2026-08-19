import { Link } from 'react-router-dom';
import './Hero.css';

/**
 * Hero section with perfectly centered content, background image, and service-focused CTAs.
 * Ensure your image is located at public/images/hero.jpg
 */
export default function Hero() {
  return (
    <section className="ds-hero" id="home" aria-label="HR Insights - Strategic HR Professional Hero Section">
      {/* Background image container */}
      <img src="/images/heroSection.webp" alt="" className="ds-hero-bg" fetchPriority="high" />
      
      {/* Navy Gradient Overlay for text readability */}
      <div className="ds-hero-overlay" />

      <div className="ds-container">
        <div className="ds-hero-content-wrapper">
          <div className="ds-hero-content">
            <h1 className="ds-heading-hero">
              Strategic HR Consulting & Recruitment Services
            </h1>

            <p className="ds-body-lg ds-hero-body">
              Building teams that are seen, supported, and positioned to thrive. We partner with South African businesses to deliver legally sound HR governance, CCMA compliance, and recruitment solutions.
            </p>


            {/* Service-focused CTAs */}
            <div className="ds-hero-actions">
              <Link to="/services" className="ds-btn ds-btn-secondary">
                Explore Our HR Services
              </Link>
              <Link to="/contact" className="ds-btn ds-btn-outline-white">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}