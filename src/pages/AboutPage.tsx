import SEO from '../Components/SEO';
import { Linkedin, ShieldCheck, Scale, Lightbulb, TrendingUp } from 'lucide-react';
import PageHeader from '../Components/PageHeader';
import './AboutPage.css';

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hrinsightsza.co.za/#organization",
    "name": "HR Insights ZA",
    "alternateName": "HR Insights",
    "url": "https://hrinsightsza.co.za",
    "logo": "https://hrinsightsza.co.za/images/Capture.png",
    "description": "HR Insights is a Black woman-owned strategic HR consulting firm based in Pretoria, South Africa, specialising in HR governance, recruitment, employee relations, and organisational development.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Ntshebo Vivian Mofokeng"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pretoria",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27694082742",
      "contactType": "customer service",
      "email": "hrinsights1@outlook.com",
      "areaServed": "ZA",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hr-insights-with-vivian/",
      "https://www.facebook.com/profile.php?id=61583501392648",
      "https://www.instagram.com/_hrinsights_/"
    ]
  };

  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ntshebo Vivian Mofokeng",
    "jobTitle": "Founder & Strategic HR Consultant",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Golden Key International Honour Society"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "BA Honours Degree in Human Resources Management"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "BA Industrial Psychology and Labour Relations Management"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certificate",
        "name": "Project Management"
      }
    ],
    "affiliation": {
      "@type": "Organization",
      "@id": "https://hrinsightsza.co.za/#organization",
      "name": "HR Insights ZA"
    },
    "url": "https://hrinsightsza.co.za/about",
    "sameAs": [
      "https://www.linkedin.com/in/ntshebo-vivian-mofokeng-%F0%9F%AB%86-89657719a/"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hrinsightsza.co.za/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About"
      }
    ]
  };

  return (
    <div className="ds-main-content">
      <SEO
        title="About HR Insights ZA | Black Woman-Owned HR Consulting Firm in Pretoria"
        description="Learn about HR Insights, founded by Ntshebo Vivian Mofokeng. A Black woman-owned strategic HR consulting firm transforming how South African businesses attract, engage, and retain talent."
        keywords="about HR Insights, Ntshebo Vivian Mofokeng, Black woman-owned HR firm, HR consultant Pretoria, strategic HR consulting South Africa"
        path="/about"
        jsonLd={[organizationSchema, founderSchema, breadcrumbSchema]}
      />
      <PageHeader
        title="About HR Insights"
        subtitle="When people are supported properly, businesses perform better."
        backgroundImage="/images/about/about.webp"
      />

      {/* 1. Our Story */}
      <section className="ds-section-light">
        <div className="ds-container">
          <div className="ds-about-inner">
            <div className="ds-about-content">
              <h2 className="ds-heading-2 mb-4">Our Story</h2>
              <p className="ds-body-lg">
                <strong>HR Insights is a proudly Black woman-owned strategic HR consulting firm.</strong>
              </p>
              <p>
                What began as a personal mission to empower job seekers with practical HR advice has grown into a powerhouse consultancy transforming how businesses attract, engage, and retain talent.
              </p>
              <p>
                HR Insights was born on LinkedIn not as a company, but as a voice. As a seasoned HR professional, I started sharing real, actionable insights to help individuals navigate the job market with confidence. My posts resonated. They weren't just tips, they were lifelines. Within months, my content was reaching millions, sparking conversations, and building a vibrant community of professionals, job seekers, and recruiters.
              </p>
              <p>
                As engagement soared, something remarkable happened: recruiters began using my profile as a talent magnet. My network became a bridge between opportunity and potential. The demand was undeniable, businesses needed more than just resumes, they needed strategy, empathy, and results.
              </p>
              <p>
                That's when HR Insights evolved from a personal brand into a full-fledged Recruitment and HR Consulting firm. Founded with a bold vision to reimagine how companies build their teams, we bring together deep industry expertise, a human-first approach, and a digital-native edge. We don't just fill roles we craft workforce strategies, elevate employer brands, and help organisations build cultures where people thrive.
              </p>
              <p>
                In a short time, we have touched lives and transformed businesses in ways that go beyond metrics but if you're counting, our reach, impact, and results speak for themselves. We have become the trusted partner for companies who want more than a service.
              </p>
              <p>
                <strong>This is HR done differently. This is HR Insights.</strong>
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

      {/* 4. Meet the Team (Founder) */}
      <section className="ds-section-light pt-0 pb-5">
        <div className="ds-container">
          <hr className="ds-divider mb-5" />
          <div className="founder-wrapper">
            <div className="founder-image-panel">
              <img
                src="/images/Vivian.webp"
                alt="Ntshebo Vivian Mofokeng - Founder of HR Insights ZA, Strategic HR Consultant in Pretoria South Africa"
                className="founder-img"
                loading="lazy"
              />
              <div className="founder-overlay">
                <div className="founder-overlay-content">
                  <h4 className="overlay-name">Ntshebo Vivian Mofokeng</h4>
                  <p className="overlay-details">Strategic HR Consultant</p>
                </div>
              </div>
            </div>
            <div className="founder-info-panel">
              <h2 className="ds-heading-2 mb-2">Meet our Strategic HR Professional</h2>
              <p className="founder-role mb-2">Founder & Strategic HR Consultant | HR Insights</p>
              <p className="founder-credentials mb-4">
                BA Honours Degree in Human Resources Management | BA Industrial Psychology and Labour Relations Management | Project Management | Golden Key International Honour Society Member
              </p>

              <blockquote className="founder-quote">
                A company is only as strong as the people who drive it forward.
                Finding the right talent is not just about filling positions, it's about
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