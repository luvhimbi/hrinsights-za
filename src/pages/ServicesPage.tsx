import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../Components/SEO';
import PageHeader from '../Components/PageHeader';
import { SERVICES } from '../data/servicesData';
import './ServicesPage.css';

export default function ServicesPage() {
    return (
        <div className="ds-page-white">
            <SEO
                title="Our Services | HR Solutions & Recruitment in Pretoria"
                description="Explore our specialized HR and recruitment services. From HR audits to specialized recruitment, we build resilient teams and mitigate organizational risk."
                keywords="HR Services, Recruitment Pretoria, HR Audits, Employee Relations"
            />
            <PageHeader
                title="Our Services"
                subtitle="Specialised HR and Recruitment services designed to build resilient teams and mitigate organizational risk."
                backgroundImage="/images/services/services.jpg"
            />

            <section className="ds-section-light">
                <div className="ds-container">
                    <div className="ds-category-header">
                        <h2 className="ds-heading-2">HR & Recruitment Services</h2>
                        <div className="ds-accent-line"></div>
                    </div>

                    <div className="ds-service-grid">
                        {SERVICES.map((service) => (
                            <div key={service.slug} className="service-card">
                                {service.image && (
                                    <div className="service-card-banner">
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                )}
                                <div className="service-card-body">
                                    <h3 className="ds-heading-3">{service.title}</h3>
                                    <p className="ds-service-brief">{service.brief}</p>
                                </div>

                                <div className="ds-service-actions">
                                    <Link to={`/services/${service.slug}`} className="service-link">
                                        Read more <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}