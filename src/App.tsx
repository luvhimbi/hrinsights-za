import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import { Suspense, lazy } from 'react';
import HomePage from './pages/HomePage';

const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));

const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const PopiaPage = lazy(() => import('./pages/PopiaPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="ds-page-loader" style={{ minHeight: '100vh', background: '#fff' }} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetailPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="popia" element={<PopiaPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}



export default App;
