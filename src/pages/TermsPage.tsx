import SEO from '../Components/SEO';
import PageHeader from '../Components/PageHeader';
import TermsOfUse from '../Components/TermsOfUse';

export default function TermsPage() {
    return (
        <div className="ds-page">
            <SEO
                title="Terms of Use | HR Insights South Africa"
                description="Read the terms and conditions for using HR Insights' website and services."
            />
            <PageHeader
                title="Terms of Use"
                subtitle="The rules and regulations for using our website and services."
            />
            <section className="ds-section-light">
                <div className="ds-container">
                    <TermsOfUse />
                </div>
            </section>
        </div>
    );
}
