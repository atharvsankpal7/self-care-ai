import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';
import { LoginPage } from './components/Auth/LoginPage';
import { SignupPage } from './components/Auth/SignupPage';
import { MedicalLibraryPage } from './components/MedicalLibrary/MedicalLibraryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/medical-library" element={<MedicalLibraryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
