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
                        <h1 className="ds-404-number">404</h1>
                        <div className="ds-404-glow"></div>
                    </div>

                    <h2 className="ds-not-found-title">Page Not Found</h2>
                    <p className="ds-not-found-text">
                        The requested page doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>

                    <div className="ds-not-found-actions">
                        <Link to="/" className="ds-btn ds-btn-primary">
                            <Home size={20} style={{ marginRight: '8px' }} />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
