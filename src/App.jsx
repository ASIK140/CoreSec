import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CertificateVerification from './pages/CertificateVerification';
import Layout from './components/Layout/Layout';
import CourseDetails from './components/CourseDetails/CourseDetails';
import "./styles/App.scss"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/verify" element={<Layout><CertificateVerification /></Layout>} />
        <Route path="/courses/:courseId" element={<Layout><CourseDetails /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App