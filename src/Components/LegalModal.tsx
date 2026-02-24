import React from 'react';
import './LegalModal.css';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="ds-modal-overlay" onClick={onClose}>
            <div className="ds-modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="ds-modal-header">
                    <h2 className="ds-modal-title">{title}</h2>
                    <button className="ds-modal-close" onClick={onClose} aria-label="Close modal">
                        &times;
                    </button>
                </div>
                <div className="ds-modal-body">
                    {children}
                </div>
                <div className="ds-modal-footer">
                    <button className="ds-btn ds-btn-primary" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
