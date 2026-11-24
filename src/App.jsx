import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import itServiceGlobalBg from './assets/images/maintenance_hero_bg_1787035173189.jpg'
import { NetworkErrorBoundary, RouteLoadingFallback } from './components/NetworkErrorBoundary.jsx'
import SmoothScrollProvider from './components/SmoothScrollProvider.jsx'
import InitialPreloader from './components/InitialPreloader.jsx'

// Critical initial landing route loaded directly
import Home from './pages/Home.jsx'

// Resilient dynamic chunk loader with automatic retry and stale-cache recovery
function lazyWithRetry(componentImport, maxRetries = 2, intervalMs = 400) {
  return lazy(() =>
    new Promise((resolve, reject) => {
      let retriesLeft = maxRetries;
      const execute = () => {
        componentImport()
          .then(resolve)
          .catch((error) => {
            if (retriesLeft <= 0) {
              const errorMsg = String(error?.message || error || '');
              const isChunkOrFetchError =
                errorMsg.includes('Failed to fetch') ||
                errorMsg.includes('dynamically imported module') ||
                errorMsg.includes('ChunkLoadError') ||
                errorMsg.includes('loading chunk');

              const retryKey = `chunk_reload_${window.location.pathname}`;
              if (isChunkOrFetchError && !window.sessionStorage.getItem(retryKey)) {
                window.sessionStorage.setItem(retryKey, 'true');
                window.location.reload();
                return;
              }
              reject(error);
              return;
            }

            retriesLeft--;
            setTimeout(execute, intervalMs);
          });
      };
      execute();
    })
  );
}

// Lazy-loaded non-critical route components for code splitting & faster initial load
const About = lazyWithRetry(() => import('./pages/About.jsx'))
const Services = lazyWithRetry(() => import('./pages/Services.jsx'))
const Portfolio = lazyWithRetry(() => import('./pages/Portfolio.jsx'))
const Journal = lazyWithRetry(() => import('./pages/Journal.jsx'))
const Contact = lazyWithRetry(() => import('./pages/Contact.jsx'))
const AdminReviews = lazyWithRetry(() => import('./pages/AdminReviews.jsx'))
const WebDevelopment = lazyWithRetry(() => import('./pages/WebDevelopment.jsx'))
const Seo = lazyWithRetry(() => import('./pages/Seo.jsx'))
const DigitalCards = lazyWithRetry(() => import('./pages/DigitalCards.jsx'))
const DigitalSolutions = lazyWithRetry(() => import('./pages/DigitalSolutions.jsx'))
const RepairingServices = lazyWithRetry(() => import('./pages/RepairingServices.jsx'))
const LaptopRepair = lazyWithRetry(() => import('./pages/LaptopRepair.jsx'))
const ComputerRepair = lazyWithRetry(() => import('./pages/ComputerRepair.jsx'))
const ChipLevelRepair = lazyWithRetry(() => import('./pages/ChipLevelRepair.jsx'))
const SecurityServices = lazyWithRetry(() => import('./pages/SecurityServices.jsx'))
const CctvInstallation = lazyWithRetry(() => import('./pages/CctvInstallation.jsx'))
const IntercomSetup = lazyWithRetry(() => import('./pages/IntercomSetup.jsx'))
const HomeOfficeSecurity = lazyWithRetry(() => import('./pages/HomeOfficeSecurity.jsx'))
const ComputerServices = lazyWithRetry(() => import('./pages/ComputerServices.jsx'))
const CustomPcBuilding = lazyWithRetry(() => import('./pages/CustomPcBuilding.jsx'))
const NewPcBuilding = lazyWithRetry(() => import('./pages/NewPcBuilding.jsx'))
const RefurbishedPcBuilding = lazyWithRetry(() => import('./pages/RefurbishedPcBuilding.jsx'))
const MaintenanceServices = lazyWithRetry(() => import('./pages/MaintenanceServices.jsx'))
const ComputerLaptopMaintenance = lazyWithRetry(() => import('./pages/ComputerLaptopMaintenance.jsx'))
const CctvMaintenance = lazyWithRetry(() => import('./pages/CctvMaintenance.jsx'))
const WebDevMaintenance = lazyWithRetry(() => import('./pages/WebDevMaintenance.jsx'))
import ConsultationInquiry from './pages/ConsultationInquiry.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.sessionStorage.removeItem(`chunk_reload_${pathname}`);
  }, [pathname]);

  return null;
}

function PageRoutes() {
  const location = useLocation();

  return (
    <div className="w-full min-h-[calc(100vh-160px)]">
      <NetworkErrorBoundary>
        <Suspense fallback={<RouteLoadingFallback />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full"
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
                <Route path="/digital-solutions" element={<DigitalSolutions />} />
                <Route path="/services/repairing-services" element={<RepairingServices />} />
                <Route path="/repairing-services" element={<RepairingServices />} />
                <Route path="/services/security-services" element={<SecurityServices />} />
                <Route path="/security-services" element={<SecurityServices />} />
                <Route path="/services/computer-services" element={<ComputerServices />} />
                <Route path="/computer-services" element={<ComputerServices />} />
                <Route path="/services/custom-pc-building" element={<CustomPcBuilding />} />
                <Route path="/services/new-pc-building" element={<NewPcBuilding />} />
                <Route path="/services/refurbished-pc-building" element={<RefurbishedPcBuilding />} />
                <Route path="/services/maintenance-services" element={<MaintenanceServices />} />
                <Route path="/maintenance-services" element={<MaintenanceServices />} />
                <Route path="/services/computer-laptop-maintenance" element={<ComputerLaptopMaintenance />} />
                <Route path="/services/cctv-maintenance" element={<CctvMaintenance />} />
                <Route path="/services/web-development-maintenance" element={<WebDevMaintenance />} />
                <Route path="/services/cctv-installation" element={<CctvInstallation />} />
                <Route path="/services/cctv" element={<CctvInstallation />} />
                <Route path="/services/cctv.html" element={<CctvInstallation />} />
                <Route path="/cctv-installation" element={<CctvInstallation />} />
                <Route path="/services/intercom-setup" element={<IntercomSetup />} />
                <Route path="/services/home-office-security" element={<HomeOfficeSecurity />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/seo" element={<Seo />} />
                <Route path="/services/digital-cards" element={<DigitalCards />} />
                <Route path="/services/laptop-repair" element={<LaptopRepair />} />
                <Route path="/laptop-repair" element={<LaptopRepair />} />
                <Route path="/services/repair.html" element={<LaptopRepair />} />
                <Route path="/services/computer-repair" element={<ComputerRepair />} />
                <Route path="/services/chip-level-repair" element={<ChipLevelRepair />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/consultation" element={<ConsultationInquiry />} />
                <Route path="/inquiry" element={<ConsultationInquiry />} />
                <Route path="/services/consultation" element={<ConsultationInquiry />} />
                <Route path="/admin/reviews" element={<AdminReviews />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/terms-of-service/*" element={<TermsOfService />} />
                <Route path="/terms-and-conditions" element={<TermsOfService />} />
                <Route path="/terms-and-conditions/*" element={<TermsOfService />} />
                <Route path="/terms-and-services" element={<TermsOfService />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/terms/*" element={<TermsOfService />} />
                <Route path="/terms-of-services" element={<TermsOfService />} />
                <Route path="/termsofservice" element={<TermsOfService />} />
                <Route path="/terms_of_service" element={<TermsOfService />} />
                <Route path="/terms.html" element={<TermsOfService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/privacy-policy/*" element={<PrivacyPolicy />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/privacy/*" element={<PrivacyPolicy />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/privacy_policy" element={<PrivacyPolicy />} />
                <Route path="/privacy.html" element={<PrivacyPolicy />} />
                <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </NetworkErrorBoundary>
    </div>
  );
}

function App() {
  return (
    <Router>
      <InitialPreloader />
      <SmoothScrollProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#020617] text-white font-sans flex flex-col relative overflow-hidden">
          {/* Fixed Global Full-Bleed Cinematic Background */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Base Solid Darkness */}
            <div className="absolute inset-0 bg-[#020617]" />

            {/* Full-Bleed Cinematic IT Composite Background */}
            <img
              src={itServiceGlobalBg}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-25 sm:opacity-30 filter brightness-95 contrast-105"
            />

            {/* Multi-layered Dark Luxury Gradients & Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]/95" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-transparent to-[#020617]/85" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.3)_0%,rgba(2,6,23,0.85)_100%)]" />

            {/* Glowing Atmospheric Blobs */}
            <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[140px] opacity-15 animate-blob"></div>
            <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[140px] opacity-15 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-15 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-1">
              <PageRoutes />
            </main>

            <Footer />
          </div>
        </div>
      </SmoothScrollProvider>
    </Router>
  )
}

export default App
