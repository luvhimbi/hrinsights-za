interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

import './PageHeader.css';

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section className={`ds-page-header ${backgroundImage ? 'has-bg' : ''}`}>
      {backgroundImage && (
        <img 
          src={backgroundImage} 
          alt="" 
          className="ds-page-header-bg" 
          fetchPriority="high" 
        />
      )}
      <div className="ds-page-header-overlay" />
      <div className="ds-container">
        <h1 className="ds-page-title">{title}</h1>
        {subtitle && <p className="ds-page-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
