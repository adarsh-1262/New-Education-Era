import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EarlyWarning from './pages/EarlyWarning';
import LearningHub from './pages/LearningHub';
import FinancialSupport from './pages/FinancialSupport';
import ParentPortal from './pages/ParentPortal';
import FlexibleSchooling from './pages/FlexibleSchooling';
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/early-warning" element={<EarlyWarning />} />
        <Route path="/learning-hub" element={<LearningHub />} />
        <Route path="/financial-support" element={<FinancialSupport />} />
        <Route path="/parent-portal" element={<ParentPortal />} />
        <Route path="/flexible-schooling" element={<FlexibleSchooling />} />
      </Routes>
    </Router>
  );
}

export default App;
