import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EarlyWarning from './pages/EarlyWarning';
import LearningHub from './pages/LearningHub';
import FinancialSupport from './pages/FinancialSupport';
import ParentPortal from './pages/ParentPortal';
import SchoolingManagement from './pages/Schooling';
import './index.css'
import OnlineConsultation from './pages/OnlineFreeConsultation';
import ResourceLibrary from './pages/ResourceLibrary';
import VirtualTutoring from './pages/VirtualTutoring';
import CommunityForums from './pages/CommunityForums';
import BookingConfirmation from './pages/BookingConfirmation';
import Scholarships from './Financial Support/Scholarships';
import Grants from './Financial Support/Grants';
import Loans from './Financial Support/Loans';
import FAQ from './Financial Support/FAQ';
import ParentingResources from './Parent\'s Corner/ParentingResources';
import CommunicationTips from './Parent\'s Corner/CommunicationTips';
import UpcomingEvents from './Parent\'s Corner/UpcomingEvents';
import ParentingFAQs from './Parent\'s Corner/ParentingFaq';
import EveningClasses from './Schooling/EveningClasses';
import PartTimePrograms from './Schooling/PartTimePrograms';
import Enrollment from './Schooling/Enrollment';
import ContactUs from './Schooling/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/early-warning" element={<EarlyWarning />} />
        <Route path="/learning-hub" element={<LearningHub />} />
        <Route path="/financial-support" element={<FinancialSupport />} />
        <Route path="/parental-engagement" element={<ParentPortal />} />
        
        <Route path='/learning-hub/online-consultation' element={<OnlineConsultation />} />
        <Route path='/learning-hub/resource-library' element={<ResourceLibrary />} />
        <Route path='/learning-hub/virtual-tutoring' element={<VirtualTutoring />} />
        <Route path='/learning-hub/community-forums' element={<CommunityForums />} />
        <Route path='/learning-hub/virtual-tutoring/booking' element={<BookingConfirmation />} />
        <Route path='/financial-support/scholarships' element={<Scholarships />} />
        <Route path='/financial-support/grants' element={<Grants />} />
        <Route path='/financial-support/loans' element={<Loans />} />
        <Route path='/financial-support/faq' element={<FAQ />} />
        <Route path="/parental-engagement/resources" element={<ParentingResources />} />
        <Route path="/parental-engagement/communication" element={<CommunicationTips />} />
        <Route path="/parental-engagement/events" element={<UpcomingEvents />} />
        <Route path="/parental-engagement/faq" element={<ParentingFAQs />} />

        <Route path="/flexible-schooling" element={<SchoolingManagement />} />
        <Route path="/schooling/evening-classes" element={<EveningClasses />} />
        <Route path="/schooling/part-time-programs" element={<PartTimePrograms />} />
        <Route path="/schooling/enrollment" element={<Enrollment />} />
        <Route path="/schooling/contact" element={<ContactUs />} />

      </Routes>
    </Router>
  );
}

export default App;
