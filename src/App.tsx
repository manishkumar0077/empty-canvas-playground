import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Collections from './pages/Collections';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import Login from './pages/Login';
import SacredBlessings from './pages/SacredBlessings';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import FloatingChat from './components/FloatingChat';
import LanguageSelector from './components/LanguageSelector';
import LanguageSelectionModal from './components/LanguageSelectionModal';
import WelcomeModal from './components/WelcomeModal';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import ProductManagement from './components/admin/ProductManagement';
import CategoryManagement from './components/admin/CategoryManagement';
import OrderManagement from './components/admin/OrderManagement';
import { useAuth } from './hooks/useAuth';

const AppContent = () => {
  const { user, profile } = useAuth();
  const { showLanguageModal, setShowLanguageModal, setLanguage } = useLanguage();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    if (user && !localStorage.getItem('welcome_shown')) {
      setShowWelcomeModal(true);
      localStorage.setItem('welcome_shown', 'true');
    }
  }, [user]);

  const handleCloseWelcome = () => {
    setShowWelcomeModal(false);
  };

  const handleLanguageSelect = (language: 'en' | 'hi') => {
    setLanguage(language);
  };

  return (
    <div className="min-h-screen bg-temple-ivory">
      <LanguageSelectionModal 
        isOpen={showLanguageModal} 
        onLanguageSelect={handleLanguageSelect}
      />
      <LanguageSelector />
      
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="categories" element={<CategoryManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="customers" element={<div>Customer Management (Coming Soon)</div>} />
          <Route path="coupons" element={<div>Coupon Management (Coming Soon)</div>} />
          <Route path="analytics" element={<div>Analytics (Coming Soon)</div>} />
          <Route path="settings" element={<div>Settings (Coming Soon)</div>} />
        </Route>

        {/* Public Routes */}
        <Route path="/*" element={
          <>
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/collections/:category" element={<Collections />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/blessings" element={<SacredBlessings />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account" element={<Account />} />
                <Route path="/login" element={<Login />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/shipping" element={<ShippingPolicy />} />
                <Route path="/returns" element={<ReturnPolicy />} />
              </Routes>
            </main>
            <Footer />
            <FloatingChat />
            {user && profile && (
              <WelcomeModal
                isOpen={showWelcomeModal}
                onClose={handleCloseWelcome}
                userName={profile.full_name || 'Sacred Seeker'}
              />
            )}
          </>
        } />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <CartProvider>
          <Router>
            <AppContent />
          </Router>
        </CartProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;