import { Link } from 'react-router-dom';
import SEO from '../Components/SEO';
import Hero from '../Components/Hero';
import { SERVICES } from '../data/servicesData';
import {
  Download,
  ArrowRight,
  ShieldCheck,
  Activity,
  Scale,
  FileText,
  Target,
  Users,
  ShieldAlert,
  Presentation,
  Briefcase
} from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div className="ds-page">
      <SEO
        title="HR Insights ZA | Strategic HR Governance & Recruitment Consulting in South Africa"
        description="HR Insights is a Black woman-owned strategic HR consulting firm in Pretoria. Expert HR governance, recruitment, employee relations, performance management, and CCMA compliance services across South Africa."
        keywords="HR consulting South Africa, HR governance Pretoria, recruitment services Gauteng, employee relations, CCMA compliance, Black woman-owned HR firm, labour law compliance BCEA LRA, performance management systems, organisational development"
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://hrinsightsza.co.za/#organization",
            "name": "HR Insights ZA",
            "alternateName": "HR Insights",
            "url": "https://hrinsightsza.co.za",
            "logo": "https://hrinsightsza.co.za/images/Capture.png",
            "image": "https://hrinsightsza.co.za/images/Capture.png",
            "description": "HR Insights is a Black woman-owned strategic HR consulting firm specialising in HR governance, recruitment, employee relations, and organisational development in South Africa.",
            "telephone": "+27694082742",
            "email": "hrinsights1@outlook.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pretoria",
              "addressRegion": "Gauteng",
              "addressCountry": "ZA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -25.7479,
              "longitude": 28.2293
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "16:00"
            },
            "priceRange": "$$",
            "areaServed": {
              "@type": "Country",
              "name": "South Africa"
            },
            "founder": {
              "@type": "Person",
              "name": "Ntshebo Vivian Mofokeng",
              "jobTitle": "Founder & Strategic HR Consultant"
            },
            "sameAs": [
              "https://www.linkedin.com/company/hr-insights-with-vivian/",
              "https://www.facebook.com/profile.php?id=61583501392648",
              "https://www.instagram.com/_hrinsights_/"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "HR Consulting Services",
              "itemListElement": SERVICES.map((s, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title,
                  "description": s.seoDescription,
                  "url": `https://hrinsightsza.co.za/services/${s.slug}`
                },
                "position": i + 1
              }))
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "HR Insights ZA",
            "url": "https://hrinsightsza.co.za",
            "description": "Strategic HR governance and recruitment consulting firm in Pretoria, South Africa."
          }
        ]}
      />
      <Hero />

      <main className="ds-main-content bg-white">
        {/* Featured Services Section */}
        <section id="services" className="ds-section-light">
          <div className="ds-container">
            <h2 className="ds-heading-2 text-center mb-4 ds-section-title fw-800">Our Strategic HR & Recruitment Services</h2>
            <div className="ds-grid">
              {featuredServices.map((service) => (
                <div key={service.slug} className="ds-card service-showcase-card">
                  {service.image && (
                    <div className="service-card-image">
                      <img src={service.image} alt={service.title} loading="lazy" />
                    </div>
                  )}
                  <div className="service-card-body">
                    <h3 className="ds-heading-3">{service.title}</h3>
                    <p>{service.brief}</p>
                    <Link to={`/services/${service.slug}`} className="service-learn-more">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-5">
              <Link to="/services" className="ds-btn ds-btn-primary">
                View all services
              </Link>
            </p>
          </div>
        </section>

        {/* How We Work Section */}
        <section id="how-we-work" className="how-we-work-section ds-section-light">
          <div className="ds-container">
            <div className="text-center mb-5">
              <span className="methodology-tag">How We Work</span>
              <h2 className="ds-heading-2 fw-800">Our Strategic Methodology</h2>
              <p className="ds-body-lg mx-auto" style={{ maxWidth: '800px' }}>
                Before implementing any HR or Recruitment service, we conduct an <strong>HR Diagnostic & Risk Assessment</strong>. This ensures your systems are evidence-based, risk-aware, and legally sound.
              </p>
            </div>

            <div className="ds-grid mb-5">
              <div className="ds-feature-col">
                <div className="ds-card-icon mb-3">
                  <span className="text-primary"><ShieldCheck size={28} /></span>
                </div>
                <h4 className="ds-heading-3">Compliance & Risk</h4>
                <p>We identify compliance gaps and risk exposure before they escalate into costly disputes.</p>
              </div>
              <div className="ds-feature-col">
                <div className="ds-card-icon mb-3">
                  <span className="text-primary"><Activity size={28} /></span>
                </div>
                <h4 className="ds-heading-3">Performance Readiness</h4>
                <p>We assess role clarity, accountability, and your team's readiness for high-impact performance.</p>
              </div>
              <div className="ds-feature-col">
                <div className="ds-card-icon mb-3">
                  <span className="text-primary"><Scale size={28} /></span>
                </div>
                <h4 className="ds-heading-3">Legally Sound Systems</h4>
                <p>Our services are designed to withstand audits, organisational change, and business growth.</p>
              </div>
            </div>

            {/* Diagnostic Card */}
            <div className="risk-assessment-card">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <h3 className="ds-heading-2 mb-3">HR Diagnostic & Risk Assessment</h3>
                  <p className="ds-body-md mb-4">
                    The foundation of every HR intervention. This structured review identifies misalignment and potential exposure to penalties or operational risk.
                  </p>

                  <div className="assessment-grid">
                    <div className="assessment-item">
                      <div className="assessment-icon"><FileText size={20} /></div>
                      <div className="assessment-content">
                        <h4>Policies & Contracts</h4>
                        <p>Employment terms and HR procedures review.</p>
                      </div>
                    </div>
                    <div className="assessment-item">
                      <div className="assessment-icon"><Target size={20} /></div>
                      <div className="assessment-content">
                        <h4>Role Clarity</h4>
                        <p>Job roles, accountability, and organizational structure.</p>
                      </div>
                    </div>
                    <div className="assessment-item">
                      <div className="assessment-icon"><Scale size={20} /></div>
                      <div className="assessment-content">
                        <h4>IR Exposure</h4>
                        <p>Employee relations and IR risk assessment.</p>
                      </div>
                    </div>
                    <div className="assessment-item">
                      <div className="assessment-icon"><Users size={20} /></div>
                      <div className="assessment-content">
                        <h4>Recruitment Governance</h4>
                        <p>Fairness, EE alignment, and hiring compliance.</p>
                      </div>
                    </div>
                  </div>

                  <div className="approach-highlights">
                    <div className="highlight-box">
                      <h5>Fact-Based</h5>
                      <p>Decisions based on facts, not assumptions.</p>
                    </div>
                    <div className="highlight-box">
                      <h5>Proactive</h5>
                      <p>Risks identified before they escalate.</p>
                    </div>
                    <div className="highlight-box">
                      <h5>Auditable</h5>
                      <p>Aligned to legislation and operational reality.</p>
                    </div>
                  </div>

                  <div className="text-center mt-5">
                    <div className="p-3 bg-light rounded-3" style={{ borderLeft: '4px solid var(--navy-900)' }}>
                      <strong>Outcome:</strong> Clear findings, prioritised actions, and a practical roadmap aligned to labour law.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="ds-section-light pt-0">
          <div className="ds-container">
            <hr className="ds-divider mb-4" style={{ opacity: 0.1 }} />
            <h2 className="ds-heading-2 text-center mb-4">Why HR Insights?</h2>
            <div className="ds-grid">
              <div className="ds-feature-col">
                <div className="ds-card-icon mb-2">
                  <span className="text-primary"><ShieldAlert size={28} /></span>
                </div>
                <h4 className="ds-heading-3">Assessing Risk, Not Templates</h4>
                <p>We assess your risk exposure, structural gaps, and compliance realities before recommending any solution. Our approach is diagnostic-first and evidence-based.</p>
              </div>
              <div className="ds-feature-col">
                <div className="ds-card-icon mb-2">
                  <span className="text-primary"><Scale size={28} /></span>
                </div>
                <h4 className="ds-heading-3">Built to Survive Scrutiny</h4>
                <p>Our designs are grounded in labour legislation and procedural fairness, created to withstand audits, disputes, CCMA proceedings, and change.</p>
              </div>
              <div className="ds-feature-col">
                <div className="ds-card-icon mb-2">
                  <span className="text-primary"><Presentation size={28} /></span>
                </div>
                <h4 className="ds-heading-3">Strengthen Management Decisions</h4>
                <p>We equip leadership with structured frameworks and defensible processes that enable confident, fair, and legally sound decision-making.</p>
              </div>
              <div className="ds-feature-col">
                <div className="ds-card-icon mb-2">
                  <span className="text-primary"><Briefcase size={28} /></span>
                </div>
                <h4 className="ds-heading-3">Design for How You Operate</h4>
                <p>Practical solutions grounded in operational reality. We build systems that reflect your organization's true pace and complexity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="ds-section-light pt-0">
          <div className="ds-container">
            <div className="profile-download-card">
              <div className="profile-content">
                <div className="profile-icon-wrapper">
                  <FileText size={40} />
                </div>
                <div className="profile-text">
                  <h2 className="ds-heading-2 mb-1" style={{ fontSize: '1.5rem' }}>Our Company Profile</h2>
                  <p className="ds-body-sm">
                    Explore our full range of services and methodologies.
                  </p>
                </div>
                <div className="profile-action">
                  <a
                    href="Documents/CompanyProfile-HR Insights.pdf"
                    download
                    className="ds-btn ds-btn-primary"
                  >
                    <Download size={18} />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}