import SEO from '../Components/SEO';
import PageHeader from '../Components/PageHeader';
import PopiAct from '../Components/PopiAct';

export default function PopiaPage() {
    return (
        <div className="ds-page">
            <SEO
                title="POPIA Compliance | HR Insights Data Privacy"
                description="Learn about HR Insights' commitment to POPIA compliance and how we handle your data with the utmost care."
            />
            <PageHeader
                title="POPIA Compliance"
                subtitle="Our commitment to your data privacy and lawful processing."
            />
            <section className="ds-section-light">
                <div className="ds-container">
                    <PopiAct />
                </div>
            </section>
        </div>
    );
}
