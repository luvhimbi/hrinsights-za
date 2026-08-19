import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../Components/SEO';
import './NotFoundPage.css';

export default function NotFoundPage() {
    return (
        <div className="ds-page">
            <SEO
                title="404 Page Not Found | HR Insights"
                description="The page you are looking for does not exist. Please return to our home page."
            />
            <div className="ds-not-found">
                <div className="ds-not-found-content">
                    <div className="ds-404-visual">
                        <div className="ds-404-number">404</div>
                        <div className="ds-404-glow"></div>
                    </div>

                    <h1 className="ds-not-found-title">404 - Page Not Found</h1>
                    <p className="ds-not-found-text">
                        The requested page doesn't exist or has been moved. 
                        At HR Insights, we believe in structural clarity—and it looks like this link is out of alignment. 
                        Let's get you back to our strategic HR solutions.
                    </p>

                    <div className="ds-not-found-actions">
                        <Link to="/" className="ds-btn ds-btn-primary">
                            <Home size={20} style={{ marginRight: '8px' }} />
                            Return to Home
                        </Link>
                        <Link to="/services" className="ds-btn ds-btn-outline-dark" style={{ marginLeft: '10px' }}>
                            Explore Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
