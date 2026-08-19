import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../Components/SEO';
import PageHeader from '../Components/PageHeader';
import { SERVICES } from '../data/servicesData';
import './ServicesPage.css';

export default function ServicesPage() {
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "HR Consulting Services by HR Insights ZA",
        "description": "Strategic HR governance, recruitment, and employee relations services for South African businesses.",
        "numberOfItems": SERVICES.length,
        "itemListElement": SERVICES.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://hrinsightsza.co.za/services/${service.slug}`,
            "name": service.title,
            "description": service.seoDescription
        }))
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
                "name": "Services"
            }
        ]
    };

    return (
        <div className="ds-page-white">
            <SEO
                title="HR & Recruitment Services | HR Insights ZA - Pretoria, South Africa"
                description="Explore our HR governance, performance management, employee relations, organisational development, and recruitment services. Strategic workforce solutions for South African businesses."
                keywords="HR services South Africa, recruitment services Pretoria, HR governance, performance management systems, employee relations, organisational development, CCMA compliance"
                path="/services"
                jsonLd={[itemListSchema, breadcrumbSchema]}
            />
            <PageHeader
                title="HR & Recruitment Consulting Services"
                subtitle="Specialised HR compliance, employee relations, and talent solutions designed to build resilient teams and mitigate organizational risk in South Africa."
                backgroundImage="/images/services/services.webp"
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