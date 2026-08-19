import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../Components/SEO';
import PageHeader from '../Components/PageHeader';
import { getServiceBySlug, getOtherServices } from '../data/servicesData';
import './ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const otherServices = service ? getOtherServices(service.slug) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found | HR Insights ZA"
          description="The requested service could not be found."
          path={`/services/${slug || ''}`}
        />
        <PageHeader title="Service not found" />
        <section className="ds-section-light">
          <div className="ds-container text-center">
            <p className="mb-4">The service you are looking for could not be found.</p>
            <Link to="/services" className="ds-btn ds-btn-primary">
              View all services
            </Link>
          </div>
        </section>
      </>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.seoDescription,
    "url": `https://hrinsightsza.co.za/services/${service.slug}`,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://hrinsightsza.co.za/#organization",
      "name": "HR Insights ZA"
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "serviceType": "HR Consulting"
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
        "name": "Services",
        "item": "https://hrinsightsza.co.za/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title
      }
    ]
  };

  return (
    <div className="ds-page-white">
      <SEO
        title={`${service.title} | HR Insights ZA - South Africa`}
        description={service.seoDescription}
        keywords={`${service.title}, HR consulting South Africa, ${service.title} Pretoria, labour law compliance`}
        path={`/services/${service.slug}`}
        jsonLd={[serviceSchema, breadcrumbSchema]}
      />
      <PageHeader
        title={service.title}
        subtitle={service.category}
        backgroundImage={service.image || "/images/services/services.webp"}
      />

      <section className="ds-section-light">
        <div className="ds-container">
          <div className="ds-service-detail-wrapper">
            <div className="ds-service-detail-content">
              {service.fullContent}
            </div>

            <div className="ds-service-detail-cta">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="ds-btn ds-btn-primary ds-btn-lg"
              >
                Inquire about this service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section-secondary">
        <div className="ds-container">
          <div className="ds-section-header text-center mb-5">
            <h2 className="ds-heading-2">Explore Other Solutions</h2>
            <div className="ds-accent-line mx-auto"></div>
          </div>

          <div className="ds-service-grid">
            {otherServices.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="service-card"
              >
                {s.image && (
                  <div className="service-card-banner">
                    <img src={s.image} alt={s.title} loading="lazy" />
                  </div>
                )}
                <div className="service-card-body">
                  <h3 className="ds-heading-3">{s.title}</h3>
                  <p className="ds-service-brief">{s.brief}</p>
                </div>
                <div className="ds-service-actions">
                  <span className="service-link">
                    Read more <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
