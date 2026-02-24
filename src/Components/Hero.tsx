import { Link } from 'react-router-dom';
import './Hero.css';

/**
 * Hero section with perfectly centered content, background image, and service-focused CTAs.
 * Ensure your image is located at public/images/hero.jpg
 */
export default function Hero() {
  return (
      <section className="ds-hero" id="home" aria-label="Hero Section">
        {/* Background image container */}
        <div className="ds-hero-bg" />

        {/* Navy Gradient Overlay for text readability */}
        <div className="ds-hero-overlay" />

        <div className="ds-container">
          <div className="ds-hero-content-wrapper">
            <div className="ds-hero-content">
              <h1 className="ds-heading-hero">
                Building teams that are seen, supported, and positioned to thrive.
              </h1>

              <p className="ds-body-lg ds-hero-body">
                From HR compliance and workforce governance to talent development and team growth,
                we help organizations of all sizes SMEs, corporates, and startups  unlock their
                full potential.
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