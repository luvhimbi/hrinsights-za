import { useEffect } from 'react';

const SITE_URL = 'https://hrinsightsza.co.za';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/Capture.png`;

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    path?: string;
    ogImage?: string;
    jsonLd?: object | object[];
}

function setMetaTag(attribute: string, key: string, content: string) {
    let element = document.querySelector(`meta[${attribute}="${key}"]`);
    if (element) {
        element.setAttribute('content', content);
    } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        element.setAttribute('content', content);
        document.head.appendChild(element);
    }
}

export default function SEO({ title, description, keywords, path = '/', ogImage, jsonLd }: SEOProps) {
    useEffect(() => {
        const fullUrl = `${SITE_URL}${path}`;
        const image = ogImage || DEFAULT_OG_IMAGE;

        document.title = title;

        setMetaTag('name', 'description', description);

        if (keywords) {
            setMetaTag('name', 'keywords', keywords);
        }

        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (canonical) {
            canonical.href = fullUrl;
        } else {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = fullUrl;
            document.head.appendChild(canonical);
        }

        setMetaTag('property', 'og:title', title);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:url', fullUrl);
        setMetaTag('property', 'og:image', image);

        setMetaTag('name', 'twitter:title', title);
        setMetaTag('name', 'twitter:description', description);
        setMetaTag('name', 'twitter:url', fullUrl);
        setMetaTag('name', 'twitter:image', image);

        const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
        existingScripts.forEach(s => s.remove());

        if (jsonLd) {
            const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
            schemas.forEach((schema, index) => {
                const script = document.createElement('script');
                script.setAttribute('data-seo-jsonld', `schema-${index}`);
                script.type = 'application/ld+json';
                script.textContent = JSON.stringify(schema);
                document.head.appendChild(script);
            });
        }

        return () => {
            const scripts = document.querySelectorAll('script[data-seo-jsonld]');
            scripts.forEach(s => s.remove());
        };
    }, [title, description, keywords, path, ogImage, jsonLd]);

    return null;
}
