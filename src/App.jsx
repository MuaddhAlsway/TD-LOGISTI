import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import LastMilePage from './pages/services/LastMilePage';
import EcommercePage from './pages/services/EcommercePage';
import CustomizedPage from './pages/services/CustomizedPage';
import TechnologyPage from './pages/services/TechnologyPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AdminLogin from './pages/admin/LoginPage';
import AdminDashboard from './pages/admin/DashboardPage';
import AdminTestimonials from './pages/admin/TestimonialsPage';
import AdminBrands from './pages/admin/BrandsPage';
import AdminBlog from './pages/admin/BlogManagePage';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <Router>
          <Routes>
            {/* Admin Login - Public */}
            <Route path="/admin/login" element={<AdminLogin />} />
            
            {/* Admin Routes - Protected with Sidebar Layout */}
            <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route index element={<AdminDashboard />} />
              <Route path="testimonials" element={<AdminTestimonials />} />
              <Route path="brands" element={<AdminBrands />} />
              <Route path="blog" element={<AdminBlog />} />
            </Route>
          
          {/* Public Routes - With Header/Footer */}
          <Route path="/*" element={
            <div className="flex flex-col min-h-screen bg-white">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/last-mile" element={<LastMilePage />} />
                  <Route path="/services/ecommerce" element={<EcommercePage />} />
                  <Route path="/services/customized" element={<CustomizedPage />} />
                  <Route path="/services/technology" element={<TechnologyPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:id" element={<BlogDetailPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
        </Routes>
        </Router>
      </BlogProvider>
    </AuthProvider>
  );
}

