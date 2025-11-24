import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/Auth/LoginPage';
import { HomePage } from './components/Home/HomePage';
import { SignupPage } from './components/Auth/SignupPage';
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {children}
    </div>
  );  
};
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/login" element={
          <Layout>
            <LoginPage />
          </Layout>
        } />
        <Route path="/signup" element={
          <Layout>
            <SignupPage />
          </Layout>
        } />
        {/* 404 Fallback */}
        <Route path="*" element={
          <Layout>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-black text-slate-800 mb-4">404</h1>
                <p className="text-xl text-slate-600 mb-8">Page not found</p>
                <button
                  onClick={() => window.location.href = '/'}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-medium transition-all"
                >
                  Go Home
                </button>
              </div>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}
