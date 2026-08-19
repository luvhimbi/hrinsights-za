import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import './WhatsAppWidget.css';

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const widgetRef = useRef<HTMLDivElement>(null);

    // Handle Click Outside to Close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const whatsappNumber = "27694082742";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !selectedService) return;
        setIsSubmitting(true);

        // Structured message without asterisks
        const structuredMessage = `NEW INQUIRY - HR INSIGHTS\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Service: ${selectedService}\n\n` +
            `Message: \n${message || "No message provided."}`;

        // Direct WhatsApp Redirect
        const encodedMessage = encodeURIComponent(structuredMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        // Cleanup and close
        setTimeout(() => {
            setIsOpen(false);
            setIsSubmitting(false);
            setName('');
            setEmail('');
            setSelectedService('');
            setMessage('');
        }, 500);
    };

    return (
        <div className={`ds-whatsapp-wrapper ${isOpen ? 'is-open' : ''}`} ref={widgetRef}>
            {/* Form Popup */}
            <div className="ds-whatsapp-card">
                <div className="ds-whatsapp-header">
                    <div className="ds-whatsapp-header-info">
                        <div className="ds-whatsapp-avatar">
                            <WhatsAppIcon size={24} />
                            <span className="online-indicator"></span>
                        </div>
                        <div>
                            <h4>Book a Consultation</h4>
                            <p>A consultant will respond on WhatsApp</p>
                        </div>
                    </div>
                    <button className="ds-whatsapp-close" onClick={() => setIsOpen(false)} aria-label="Close">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="ds-whatsapp-form">
                    <div className="ds-whatsapp-field">
                        <label htmlFor="wa-name">Your Name</label>
                        <input
                            id="wa-name"
                            type="text"
                            placeholder="e.g. Sarah Adams"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoComplete="name"
                            autoCapitalize="words"
                        />
                    </div>
                    <div className="ds-whatsapp-field">
                        <label htmlFor="wa-email">Email Address</label>
                        <input
                             id="wa-email"
                             type="email"
                             placeholder="e.g. sarah@company.com"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             required
                             autoComplete="email"
                        />
                    </div>
                    <div className="ds-whatsapp-field">
                        <label htmlFor="wa-service">Service Interested In</label>
                        <select
                            id="wa-service"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            required
                        >
                            <option value="">Select a service...</option>
                            {SERVICES.map(s => (
                                <option key={s.slug} value={s.title}>{s.title}</option>
                            ))}
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                    </div>
                    <div className="ds-whatsapp-field">
                        <label htmlFor="wa-message">How can we help?</label>
                        <textarea
                            id="wa-message"
                            placeholder="Briefly describe your HR requirements or questions..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={3}
                        />
                    </div>

                    <button type="submit" className="ds-whatsapp-submit" disabled={isSubmitting}>
                        <span>{isSubmitting ? 'Opening WhatsApp...' : 'Start Booking on WhatsApp'}</span>
                        <Send size={16} />
                    </button>
                </form>
            </div>

            {/* Floating Toggle Button */}
            <button
                className="ds-whatsapp-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle WhatsApp chat"
            >
                <WhatsAppIcon size={32} />
                <span className="ds-whatsapp-pulse"></span>
            </button>
        </div>
    );
}

