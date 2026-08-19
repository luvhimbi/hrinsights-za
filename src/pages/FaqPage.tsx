import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, MessageSquare, Send, ArrowRight } from 'lucide-react';
import SEO from '../Components/SEO';
import PageHeader from '../Components/PageHeader';
import './FaqPage.css';

interface FAQ {
    question: string;
    answer: string | React.ReactNode;
    plainAnswer: string;
}

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQ[] = [
        {
            question: "How does HR Insights ensure my organisation remains compliant with labor laws?",
            plainAnswer: "We treat compliance as the foundation of your business. Our approach involves aligning all your HR documentation, from contracts to policies, with the BCEA, LRA, and Employment Equity Act.",
            answer: (
                <>
                    We treat compliance as the foundation of your business. Our approach involves aligning all your HR documentation—from contracts to policies—with the BCEA, LRA, and Employment Equity Act.
                    <br /><br />
                    <Link to="/contact?service=Compliance" className="ds-faq-cta">
                        Ensure your compliance today <ArrowRight size={16} />
                    </Link>
                </>
            )
        },
        {
            question: "What recruitment support models do you offer?",
            plainAnswer: "We provide flexible support tailored to your needs, including Retainer support for ongoing hiring and Project-based hiring for specific growth spurts. All our recruitment is governance-led to ensure fair and defensible processes.",
            answer: (
                <>
                    We provide flexible support tailored to your needs, including Retainer support for ongoing hiring and Project-based hiring for specific growth spurts. All our recruitment is governance-led to ensure fair and defensible processes.
                    <br /><br />
                    <Link to="/contact?service=Recruitment" className="ds-faq-cta">
                        Discuss your hiring needs <ArrowRight size={16} />
                    </Link>
                </>
            )
        },
        {
            question: "Can you help reduce our risk at the CCMA?",
            plainAnswer: "Yes. By implementing procedurally fair disciplinary documentation, structured IR support, and job-aligned performance systems (PIPs), we significantly reduce your organisation's CCMA exposure and vulnerability to disputes.",
            answer: (
                <>
                    Yes. By implementing procedurally fair disciplinary documentation, structured IR support, and job-aligned performance systems (PIPs), we significantly reduce your organisation's CCMA exposure and vulnerability to disputes.
                    <br /><br />
                    <Link to="/contact?service=ER%20Support" className="ds-faq-cta">
                        Protect your business from risk <ArrowRight size={16} />
                    </Link>
                </>
            )
        },
        {
            question: "How do you handle Organisational Development (OD)?",
            plainAnswer: "Our OD approach is diagnostic. We don't just treat symptoms; we identify root causes through structure reviews and role clarity assessments to ensure your people practices support sustainable performance.",
            answer: (
                <>
                    Our OD approach is diagnostic. We don't just treat symptoms; we identify root causes through structure reviews and role clarity assessments to ensure your people practices support sustainable performance.
                    <br /><br />
                    <Link to="/contact?service=OD" className="ds-faq-cta">
                        Optimize your structure <ArrowRight size={16} />
                    </Link>
                </>
            )
        },
        {
            question: "Why should we choose HR Insights over a traditional agency?",
            plainAnswer: "Traditional agencies often focus on just filling seats. HR Insights focuses on building defensible systems. We combine recruitment with governance, ensuring every hire and people decision is aligned to both labor law and your strategic goals.",
            answer: (
                <>
                    Traditional agencies often focus on just filling seats. HR Insights focuses on building defensible systems. We combine recruitment with governance, ensuring every hire and people decision is aligned to both labor law and your strategic goals.
                    <br /><br />
                    <Link to="/contact" className="ds-faq-cta">
                        Partner with us <ArrowRight size={16} />
                    </Link>
                </>
            )
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.plainAnswer
            }
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
                "name": "FAQ"
            }
        ]
    };

    return (
        <div className="ds-page">
            <SEO
                title="FAQ | HR Insights ZA - HR Compliance, Recruitment & CCMA Questions"
                description="Frequently asked questions about HR compliance in South Africa, recruitment support models, CCMA risk reduction, organisational development, and how HR Insights works with businesses."
                keywords="HR FAQ South Africa, CCMA risk reduction, recruitment support models, HR compliance questions, labour law FAQ, organisational development FAQ"
                path="/faq"
                jsonLd={[faqSchema, breadcrumbSchema]}
            />
            <PageHeader
                title="HR & Labour Compliance FAQ"
                subtitle="Clarifying how we protect and support South African businesses through structured, compliant HR solutions."
                backgroundImage="/images/faq/faq.webp"
            />

            <section className="faq-section ds-section-light">
                <div className="ds-container">
                    <div className="faq-wrapper">
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${openIndex === index ? 'active' : ''}`}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="faq-icon">
                                            {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                        </span>
                                    </button>
                                    <div className="faq-answer">
                                        <div className="faq-answer-inner">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Final CTA Section */}
                        <div className="faq-footer-cta mt-5">
                            <div className="cta-box">
                                <div className="cta-icon">
                                    <MessageSquare size={32} />
                                </div>
                                <h3>Still have questions?</h3>
                                <p>We're here to help you navigate your unique HR challenges. Let's start a conversation about how we can protect and grow your business.</p>
                                <Link to="/contact" className="btn-submit">
                                    <Send size={18} style={{ marginRight: '10px' }} />
                                    Contact Us Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
