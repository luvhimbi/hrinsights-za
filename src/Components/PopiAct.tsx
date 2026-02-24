
const PopiAct = () => {
    return (
        <div className="ds-popi-content">
            <header className="mb-4 pb-3 border-bottom">
                <div className="ds-tag" style={{ color: '#0a1628', fontWeight: 'bold', fontSize: '0.75rem' }}>POPIA COMPLIANCE</div>
                <p className="ds-body-sm opacity-75">Last updated: February 23, 2026</p>
            </header>

            <div className="ds-legal-sections" style={{ color: '#334155' }}>
                <section className="mb-4">
                    <h2 className="ds-heading-3 mb-2" style={{ color: '#0a1628', fontSize: '1.2rem' }}>1. Introduction</h2>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        HR Insights ("we," "us," or "our") is committed to protecting the privacy and security of your personal information in accordance with the
                        <strong> Protection of Personal Information Act (POPIA)</strong>, No. 4 of 2013, of South Africa. As an HR consultancy and recruitment firm, we handle sensitive personal data on behalf of our clients and candidates, and we take this responsibility seriously.
                    </p>
                </section>

                <section className="mb-4">
                    <h2 className="ds-heading-3 mb-2" style={{ color: '#0a1628', fontSize: '1.2rem' }}>2. Lawful Processing Conditions</h2>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        As an HR Consultancy and Recruitment firm, we ensure all personal data (including candidate CVs, client details, and employee records) is processed according to the eight POPIA conditions:
                    </p>
                    <div className="p-3 mb-3" style={{ background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <ul className="ds-legal-list" style={{ fontSize: '0.9rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', listStyle: 'none', padding: 0 }}>
                            <li><strong>• Accountability:</strong> Taking ownership of data management.</li>
                            <li><strong>• Processing Limitation:</strong> Processing data lawfully and for minimal purposes.</li>
                            <li><strong>• Purpose Specification:</strong> Defining why data is collected.</li>
                            <li><strong>• Further Processing:</strong> Ensuring secondary uses align with the original purpose.</li>
                            <li><strong>• Information Quality:</strong> Keeping data accurate and up to date.</li>
                            <li><strong>• Openness:</strong> Maintaining transparency about data collection.</li>
                            <li><strong>• Security Safeguards:</strong> Protecting data from unauthorized access.</li>
                            <li><strong>• Data Participation:</strong> Allowing subjects to access/correct their data.</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-4">
                    <h2 className="ds-heading-3 mb-2" style={{ color: '#0a1628', fontSize: '1.2rem' }}>3. Purpose of Processing</h2>
                    <p style={{ fontSize: '0.95rem' }}>We collect and process personal information primarily to:</p>
                    <ul style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        <li>Facilitate recruitment, headhunting, and placement services.</li>
                        <li>Provide HR consulting, governance audits, and risk assessment services.</li>
                        <li>Draft and manage employment contracts, disciplinary policies, and HR frameworks on behalf of clients.</li>
                        <li>Administer payroll and employee benefits processing (for clients who engage this service).</li>
                        <li>Maintain legislative compliance with the LRA, BCEA, EEA, UIF, and SARS requirements.</li>
                        <li>Respond to inquiries and consultation bookings submitted via our website or WhatsApp.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="ds-heading-3 mb-2" style={{ color: '#0a1628', fontSize: '1.2rem' }}>4. Security Measures</h2>
                    <p style={{ fontSize: '0.95rem' }}>
                        We implement rigorous organizational and technical measures to safeguard personal information, including:
                    </p>
                    <ul style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        <li>Encrypted digital storage for all client and candidate records.</li>
                        <li>Restricted access protocols — only authorized HR personnel may access personal data on a need-to-know basis.</li>
                        <li>Secure physical storage for any hardcopy documents, with controlled access.</li>
                        <li>Regular internal security audits and staff awareness training on data protection.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="ds-heading-3 mb-2" style={{ color: '#0a1628', fontSize: '1.2rem' }}>5. Retention of Information</h2>
                    <p style={{ fontSize: '0.95rem' }}>
                        We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by South African law. Key retention periods include:
                    </p>
                    <ul style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        <li><strong>Candidate data:</strong> Up to 12 months after submission, unless consent is given for longer retention.</li>
                        <li><strong>Client records:</strong> 5 years after the end of the engagement.</li>
                        <li><strong>Employment documents:</strong> Minimum 3 years after termination, per BCEA requirements.</li>
                        <li><strong>Financial records:</strong> 5 years, as required by SARS.</li>
                    </ul>
                    <p style={{ fontSize: '0.95rem' }}>After the retention period, data is securely destroyed or de-identified.</p>
                </section>

                <section className="mb-4">
                    <h2 className="ds-heading-3 mb-2" style={{ color: '#0a1628', fontSize: '1.2rem' }}>6. Data Breach Notification</h2>
                    <p style={{ fontSize: '0.95rem' }}>
                        In the event of a security compromise that results in the unauthorized access, disclosure, or destruction of personal data, HR Insights will:
                    </p>
                    <ul style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        <li>Notify the <strong>Information Regulator</strong> as soon as reasonably possible, in accordance with Section 22 of POPIA.</li>
                        <li>Notify all affected data subjects promptly, providing details of the breach, the type of data compromised, and the remedial steps being taken.</li>
                        <li>Conduct an internal investigation and implement measures to prevent recurrence.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="ds-heading-3 mb-2" style={{ color: '#0a1628', fontSize: '1.2rem' }}>7. Your Rights (Data Participation)</h2>
                    <p style={{ fontSize: '0.95rem' }}>Under POPIA, you have the right to:</p>
                    <ul style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        <li><strong>Access:</strong> Request confirmation of what personal information we hold about you.</li>
                        <li><strong>Correction:</strong> Request that inaccurate or incomplete data be corrected or updated.</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal data where it is no longer necessary for the purpose it was collected.</li>
                        <li><strong>Objection:</strong> Object to the processing of your personal information on reasonable grounds.</li>
                        <li><strong>Withdraw Consent:</strong> Withdraw consent previously given, particularly regarding recruitment placement.</li>
                    </ul>
                    <p style={{ fontSize: '0.95rem' }}>To exercise any of these rights, please contact our Information Officer using the details below.</p>
                </section>

                <section className="mb-4">
                    <h2 className="ds-heading-3 mb-2" style={{ color: '#0a1628', fontSize: '1.2rem' }}>8. Complaints &amp; Escalation</h2>
                    <p style={{ fontSize: '0.95rem' }}>
                        If you believe that your personal information has been processed in violation of POPIA, you may:
                    </p>
                    <ul style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        <li>Contact our Information Officer at <strong>hrinsights1@outlook.com</strong> to raise your concern.</li>
                        <li>If you are not satisfied with our response, you may lodge a formal complaint with the <strong>Information Regulator (South Africa)</strong>.</li>
                    </ul>
                    <div className="p-3 mb-3" style={{ background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}><strong>Information Regulator (South Africa)</strong></p>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Website: <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" style={{ color: '#0a1628' }}>inforegulator.org.za</a></p>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>Email: complaints.IR@justice.gov.za</p>
                    </div>
                </section>

                <div
                    className="ds-contact-box p-4"
                    style={{
                        background: '#0a1628',
                        color: '#ffffff',
                        borderRadius: '12px'
                    }}
                >
                    <h4 className="fw-bold mb-3" style={{ fontSize: '1.1rem', color: '#ffffff' }}>
                        Information Officer Contact
                    </h4>
                    <p className="mb-1" style={{ fontSize: '0.95rem', color: '#ffffff' }}>
                        For any POPIA-related inquiries, data access requests, or to exercise your rights, please contact:
                    </p>
                    <p className="mb-1" style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>
                        Information Officer: HR Insights
                    </p>
                    <p className="mb-1" style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>
                        Email: hrinsights1@outlook.com
                    </p>
                    <p className="mb-0" style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>
                        Location: Centurion, Gauteng, South Africa
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PopiAct;