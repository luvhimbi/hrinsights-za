import SEO from '../Components/SEO';
import PageHeader from '../Components/PageHeader';
import PrivacyPolicy from '../Components/PrivacyPolicy';

export default function PrivacyPage() {
    return (
        <div className="ds-page">
            <SEO
                title="Privacy Policy | HR Insights - Data Protection"
                description="Our privacy policy details how HR Insights manages and protects your personal information in compliance with POPIA."
            />
            <PageHeader
                title="Privacy Policy"
                subtitle="How we protect and manage your personal information in accordance with POPIA."
            />
            <section className="ds-section-light">
                <div className="ds-container">
                    <PrivacyPolicy />
                </div>
            </section>
        </div>
    );
}
