import type { ReactNode } from 'react';
import {
    FileText,
    Users,
    BarChart3,
    ShieldCheck,
    GitBranch,
    ClipboardCheck
} from 'lucide-react';

export interface ServiceItem {
    slug: string;
    title: string;
    category: 'Core Solutions';
    brief: string;
    seoDescription: string;
    icon: ReactNode;
    image?: string;
    fullContent: ReactNode;
}

export const SERVICES: ServiceItem[] = [
    {
        slug: 'hr-governance-documentation',
        title: 'HR Governance & Documentation',
        category: 'Core Solutions',
        image: '/images/Governance.webp',
        icon: <FileText size={28} />,
        brief: 'Legally sound HR foundations for your organisation.',
        seoDescription: 'HR governance and documentation services in South Africa. Employment contracts, HR policies aligned to BCEA, LRA, and Employment Equity legislation. Reduce compliance risk with defensible HR systems.',
        fullContent: (
            <>
                <p className="ds-body-lg">We develop and align HR documentation to ensure compliance, consistency, and fairness across the organisation.</p>
                <p>Our focus is not documentation for its own sake but documentation that supports defensible decision-making.</p>

                <h3 className="ds-heading-3">This service includes:</h3>
                <ul className="ds-list">
                    <li>Employment contracts & Offer letters</li>
                    <li>Addendums for role or employment changes</li>
                    <li>HR policies aligned to BCEA, LRA, and Employment Equity legislation</li>
                    <li>Procedural guidelines for managers</li>
                </ul>

                <h3 className="ds-heading-3">Value to your business:</h3>
                <ul className="ds-list">
                    <li>Reduced legal and compliance risk</li>
                    <li>Consistent HR application</li>
                    <li>Clear guidance for management decisions</li>
                </ul>
            </>
        ),
    },
    {
        slug: 'performance-management-systems',
        title: 'Performance Management Systems',
        category: 'Core Solutions',
        image: '/images/performance.webp',
        icon: <BarChart3 size={28} />,
        brief: 'Role-aligned performance, not generic KPIs.',
        seoDescription: 'Performance management systems designed for South African businesses. Job descriptions, KPI frameworks, PIPs, and performance review templates aligned to labour law and organisational goals.',
        fullContent: (
            <>
                <p className="ds-body-lg">We design performance systems aligned to actual job roles, organisational objectives, and legal requirements.</p>

                <h3 className="ds-heading-3">This service includes:</h3>
                <ul className="ds-list">
                    <li>Job descriptions aligned to duties</li>
                    <li>Role-specific KPI frameworks</li>
                    <li>Performance review templates</li>
                    <li>Performance Improvement Plans (PIPs)</li>
                    <li>Poor performance policies</li>
                </ul>

                <h3 className="ds-heading-3">Why this matters:</h3>
                <p>Poorly designed performance systems often lead to disputes and CCMA exposure. We ensure accountability without unfairness or legal risk.</p>
            </>
        ),
    },
    {
        slug: 'employee-relations-ir-support',
        title: 'Employee Relations & IR Support',
        category: 'Core Solutions',
        image: '/images/relations.webp',
        icon: <ShieldCheck size={28} />,
        brief: 'Procedurally fair, compliant employee relations.',
        seoDescription: 'Employee relations and industrial relations support in South Africa. Disciplinary hearings, CCMA preparation, IR policy alignment, and management advisory for procedurally fair outcomes.',
        fullContent: (
            <>
                <p className="ds-body-lg">We provide structured IR support (Employee Relations) to ensure fairness and compliance at every stage.</p>

                <h3 className="ds-heading-3">Our support includes:</h3>
                <ul className="ds-list">
                    <li>Disciplinary documentation and hearing dockets</li>
                    <li>Chairing of disciplinary hearings (where required)</li>
                    <li>Advisory support to management</li>
                    <li>Alignment of IR-related policies</li>
                </ul>

                <p>Where chairing is not required, we ensure documentation and processes are audit-ready and defensible.</p>
                <p><strong>Focus:</strong> Preventing disputes and strengthening management capability.</p>
            </>
        ),
    },
    {
        slug: 'organisational-development',
        title: 'Organisational Development (OD)',
        category: 'Core Solutions',
        image: '/images/od.webp',
        icon: <GitBranch size={28} />,
        brief: 'Creating clarity, accountability, and alignment.',
        seoDescription: 'Organisational development consulting in South Africa. Structure reviews, role clarity, job architecture, and change management support to align people practices with business performance.',
        fullContent: (
            <>
                <p className="ds-body-lg">Our OD services ensure organisational structures, roles, and people practices support performance rather than create risk.</p>

                <h3 className="ds-heading-3">This service includes:</h3>
                <ul className="ds-list">
                    <li>Organisational structure reviews</li>
                    <li>Role clarity and job architecture</li>
                    <li>Alignment of roles, performance, and accountability</li>
                    <li>Manager capability support</li>
                    <li>Support during restructuring, growth, or change</li>
                </ul>

                <h3 className="ds-heading-3">Why OD matters:</h3>
                <p>Many performance, engagement, and IR issues stem from unclear structures and misaligned roles. We address root causes, not symptoms.</p>
            </>
        ),
    },
    {
        slug: 'recruitment-governance-compliance',
        title: 'Recruitment Governance & Compliance',
        category: 'Core Solutions',
        image: '/images/rg.webp',
        icon: <ClipboardCheck size={28} />,
        brief: 'Recruitment processes that are fair, structured, and defensible.',
        seoDescription: 'Recruitment governance and compliance services in South Africa. Selection policies, interview guides, scoring templates, and Employment Equity alignment for legally defensible hiring.',
        fullContent: (
            <>
                <p className="ds-body-lg">We support organisations in building recruitment systems that are fair, structured, and legally defensible.</p>

                <h3 className="ds-heading-3">This service includes:</h3>
                <ul className="ds-list">
                    <li>Recruitment and selection policy development</li>
                    <li>Job specifications and job descriptions</li>
                    <li>Interview guides and scoring templates</li>
                    <li>Reference check templates</li>
                    <li>Employment Equity alignment and bias mitigation</li>
                </ul>

                <h3 className="ds-heading-3">Benefit:</h3>
                <p>Recruitment processes that are consistent, compliant, aligned with organisational values, and defensible under scrutiny.</p>
            </>
        ),
    },
    {
        slug: 'recruitment',
        title: 'Recruitment',
        category: 'Core Solutions',
        image: '/images/strategic.webp',
        icon: <Users size={28} />,
        brief: 'Strategic recruitment with a compliance focus.',
        seoDescription: 'Strategic recruitment services in Pretoria, South Africa. Retainer and project-based hiring with governance-led processes. Headhunting, talent pooling, and compliant recruitment for all industries.',
        fullContent: (
            <>
                <p className="ds-body-lg">At HR Insights, recruitment is treated as a governance and decision-making process, not a transactional activity.</p>
                <p>Our recruitment services are flexible and structured to support both ongoing hiring needs and once-off recruitment requirements.</p>

                <h3 className="ds-heading-3">I. Retainer Recruitment Support</h3>
                <p>For organisations requiring ongoing recruitment support or talent pipeline management. Under a retainer model, we support:</p>
                <ul className="ds-list">
                    <li>Continuous sourcing and talent pooling</li>
                    <li>Proactive skills identification</li>
                    <li>Ongoing recruitment coordination</li>
                    <li>Consistent, compliant recruitment practices</li>
                </ul>
                <p>This model provides continuity and governance without the cost of an in-house function.</p>

                <h3 className="ds-heading-3">II. Project-Based (Once-Off) Recruitment</h3>
                <p>For specific or once-off hiring needs. This includes:</p>
                <ul className="ds-list">
                    <li>Headhunting and specialist roles</li>
                    <li>Replacement hires</li>
                    <li>Urgent recruitment</li>
                    <li>Short-term recruitment projects</li>
                </ul>
                <p>All projects follow the same compliance and fairness standards.</p>
            </>
        ),
    },
];

/**
 * FIXED: Re-added the missing helper functions
 */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
    return SERVICES.find((s: ServiceItem) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceItem[] {
    return SERVICES.filter((s: ServiceItem) => s.slug !== currentSlug);
}