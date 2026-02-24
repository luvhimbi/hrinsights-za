import SEO from '../Components/SEO';
import { Linkedin, ShieldCheck, Scale, Lightbulb, TrendingUp } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="ds-main-content">
      <SEO
        title="About HR Insights | Our Story, Vision & Mission"
        description="Learn about HR Insights, our diagnostic approach to HR, and our commitment to building workplaces where people decisions are fair, consistent, and defensible."
        keywords="HR Insights Story, HR Vision, Strategic HR Consultant"
      />
      <PageHeader
        title="About HR Insights"
        subtitle="When people are supported properly, businesses perform better."
        backgroundImage="/images/about/about.jpg"
      />

      {/* 1. Our Story */}
      <section className="ds-section-light">
        <div className="ds-container">
          <div className="ds-about-inner">
            <div className="ds-about-content">
              <h2 className="ds-heading-2 mb-4">Our Story</h2>
              <p className="ds-body-lg">
                HR Insights was born from a simple but powerful belief: <strong>When people are supported properly, businesses perform better.</strong>
              </p>
              <p>
                What began on LinkedIn as a trusted platform for honest HR education, career guidance, and recruitment insight quickly evolved into something more. As engagement grew and organisations began seeking clarity, structure, and defensible HR support, HR Insights was formed to meet that need.
              </p>
              <p>
                Today, HR Insights provides structured, compliance-driven HR, Organisational Development, and Recruitment services designed to reduce people-related risk while supporting sustainable performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="ds-section-light pt-0">
        <div className="ds-container">
          <hr className="ds-divider mb-5" />
          <div className="ds-grid-2">
            <div className="vision-mission-box">
              <h3 className="ds-heading-3">Our Vision</h3>
              <p className="ds-body-lg">
                To support organisations in building workplaces where people decisions are fair, consistent, and defensible, and where HR functions as a strategic enabler rather than a risk area.
              </p>
            </div>
            <div className="vision-mission-box">
              <h3 className="ds-heading-3">Our Mission</h3>
              <p className="ds-body-lg">
                To help businesses reduce people-related risk and strengthen performance by designing compliant, structured HR and organisational systems that align people practices with business reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="ds-section-light pt-0">
        <div className="ds-container">
          <hr className="ds-divider mb-5" />
          <div className="text-center mb-5">
            <h2 className="ds-heading-2">Our Core Values</h2>
            <div className="ds-header-line-short mx-auto"></div>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon"><ShieldCheck size={32} /></div>
              <h4 className="ds-heading-4">Compliance First</h4>
              <p>Ensuring every policy and decision is grounded in labor legislation and defensible under scrutiny.</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><Scale size={32} /></div>
              <h4 className="ds-heading-4">Fairness & Equity</h4>
              <p>Building systems that promote consistent treatment and transparent people practices.</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><Lightbulb size={32} /></div>
              <h4 className="ds-heading-4">Diagnostic Approach</h4>
              <p>We solve root causes through evidence-based insights, not just reactive symptoms.</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><TrendingUp size={32} /></div>
              <h4 className="ds-heading-4">Strategic Growth</h4>
              <p>Aligning HR architecture to support the long-term scaling and success of your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet the Team (Founder) - IMAGE STRUCTURE FIXED */}
      <section className="ds-section-light pt-0 pb-5">
        <div className="ds-container">
          <hr className="ds-divider mb-5" />
          <div className="founder-wrapper">
            <div className="founder-image-panel">
              <img
                src="/images/Vivian.jpg"
                alt="Vivian - Founder of HR Insights"
                className="founder-img"
              />
              <div className="founder-overlay">
                <div className="founder-overlay-content">
                  <h4 className="overlay-name">Ntshebo Vivian Mofokeng</h4>
                  <p className="overlay-details">Strategic HR Consultant</p>
                </div>
              </div>
            </div>
            <div className="founder-info-panel">
              <h2 className="ds-heading-2 mb-2">Meet the Founder</h2>
              <p className="founder-role mb-4">Visionary & Lead HR Consultant</p>

              <blockquote className="founder-quote">
                A company is only as strong as the people who drive it forward.
                Finding the right talent is not just about filling positions, it’s about
                building a workforce that embodies your vision, values and goals.
                Every strategic hire, every HR decision, and every policy we implement
                is designed to unlock potential and foster growth. When you thrive,
                your business thrives, and lasting success becomes inevitable.
              </blockquote>

              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/ntshebo-vivian-mofokeng-%F0%9F%AB%86-89657719a/"
                  target="_blank"
                  rel="noreferrer"
                  className="ds-btn-text-dark"
                >
                  <Linkedin size={20} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}