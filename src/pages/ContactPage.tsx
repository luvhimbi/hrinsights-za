import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import SEO from '../Components/SEO';
import PageHeader from '../Components/PageHeader';
import { SERVICES } from '../data/servicesData';
import './ContactPage.css';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const serviceQuery = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceQuery ? decodeURIComponent(serviceQuery) : 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const accessKey = '0071bafc-bb21-4182-ae89-7ece19b35198';
    const payload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      subject: `New Inquiry: ${formData.service}`,
      message: formData.message,
      from_name: 'HR Insights Website'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && (data.success === true || data.success === undefined)) {
        setStatus('success');
        setStatusMsg(data.message || 'Thank you! Your inquiry has been sent.');
        setFormData({
          name: '',
          email: '',
          service: 'General Inquiry',
          message: ''
        });
      } else {
        setStatus('error');
        setStatusMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Email error:', err);
      setStatus('error');
      setStatusMsg('Network error. Please try again later.');
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact HR Insights ZA",
    "description": "Get in touch with HR Insights for strategic HR consulting, recruitment, and labour law compliance services in South Africa.",
    "url": "https://hrinsightsza.co.za/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://hrinsightsza.co.za/#organization",
      "name": "HR Insights ZA",
      "telephone": "+27694082742",
      "email": "hrinsights1@outlook.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pretoria",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    }
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
        "name": "Contact"
      }
    ]
  };

  return (
    <div className="ds-page">
      <SEO
        title="Contact HR Insights ZA | Book a Free HR Consultation in Pretoria"
        description="Contact HR Insights for strategic HR governance, recruitment, employee relations, and labour law compliance consulting. Based in Pretoria, serving businesses across South Africa. Response within 24-48 hours."
        keywords="contact HR consultant Pretoria, book HR consultation South Africa, recruitment agency Gauteng, HR support inquiry, free HR consultation"
        path="/contact"
        jsonLd={[contactSchema, breadcrumbSchema]}
      />
      <PageHeader
        title="Get in touch"
        subtitle="Have questions? We're here to help your business navigate the complexities of HR."
        backgroundImage="/images/faq/faq.webp"
      />

      <section className="contact-intro ds-section-light pb-0">
        <div className="ds-container text-center">
          <h2 className="ds-heading-2 mb-4">Partner with Strategic HR Professionals</h2>
          <p className="ds-body-lg mx-auto" style={{ maxWidth: '900px' }}>
            Looking for expert guidance in recruitment, labor law compliance, or organizational development? 
            Our team at HR Insights is ready to help you build a resilient, high-performing workforce. 
            Whether you are a startup needing a compliant foundation or an established corporate entity refining its HR architecture, 
            we provide tailored solutions that align with South African labor legislation. 
          </p>
          <p className="ds-body-md mt-3 opacity-75">
            Expect a response from our strategic consultants within 24-48 business hours. 
            We look forward to transforming your people strategy.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="ds-container">
          <div className="contact-form-wrapper">
            <div className="contact-form-panel">
              <h3 className="ds-heading-3 mb-4 text-center" style={{ color: 'var(--navy-900)' }}>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="ds-form-grid">
                  <div className="ds-form-group">
                    <label htmlFor="name" className="ds-label-dark">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control-custom"
                      placeholder="Jane Smith"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="ds-form-group">
                    <label htmlFor="email" className="ds-label-dark">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control-custom"
                      placeholder="jane@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="ds-form-group mt-3">
                  <label htmlFor="service" className="ds-label-dark">Service of Interest</label>
                  <select
                    id="service"
                    className="form-control-custom"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    {SERVICES.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="ds-form-group mt-3">
                  <label htmlFor="message" className="ds-label-dark">How can we help?</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="form-control-custom"
                    placeholder="Tell us about your needs..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="alert alert-success mt-3 p-3 rounded" style={{ background: '#d1fae5', color: '#065f46', border: '1px solid #10b981' }}>
                    {statusMsg}
                  </div>
                )}
                {status === 'error' && (
                  <div className="alert alert-danger mt-3 p-3 rounded" style={{ background: '#fee2e2', color: '#b91c1c', border: '1px solid #ef4444' }}>
                    {statusMsg}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-submit mt-4"
                  disabled={status === 'loading'}
                >
                  <Send size={18} style={{ marginRight: '10px' }} />
                  {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map-section pb-5">
        <div className="ds-container">
          <div className="map-wrapper">
            <iframe
              title="HR Insights Location - Pretoria, Gauteng, South Africa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114841.05435970341!2d28.08381!3d-25.864005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95640325d7b6b1%3A0xe5a6d5930b497e3b!2sCenturion!5e0!3m2!1sen!2sza!4v1740058564000!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}