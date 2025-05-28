import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EarlyWarning from './pages/EarlyWarning';
import LearningHub from './pages/LearningHub';
import FinancialSupport from './pages/FinancialSupport';
import ParentPortal from './pages/ParentPortal';
import SchoolingManagement from './pages/Schooling';
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
import './index.css';
import Footer from "./components/Footer";
import About from "./pages/About";
import StudentDashboard from "./components/StudentDashboard";
import ChatBox from "./chatbot/ChatBot";
import CalendarView from "./Schooling/CalendarView";
import ProgressPage from "./Schooling/ProgressPage";
import CombinedPage from "./Schooling/CombinedCourse";
import Admin from "./adminDashboard/Admin";
import RewardSystem from "./components/RewardSystem";
import Store from "./components/Store";
import ExpertDashboard from "./components/ExpertDashboard";
import TutorDashboard from "./components/TutorDashboard";
import ParentDashboard from "./components/ParentDashboard";
import QRScanner from "./components/QRScanner";
import LoginSignupModal from "./components/SignUpLogin";
import StudentGrievanceForm from "./components/GravienceForm";
import CommunityPage from "./components/CommunityPage";
import ProtectedRoute from "./ProtctRoute";
import StudentAdminDashboard from "./adminDashboard/studentdetails/StudentAdminDash";
import CoolegeWiseDropout from "./adminDashboard/admin/collegeWiseDropout";

function App() {

  return (
    <Router>
      {/* Fixed Navbar */}
      <div className="overflow-hidden"><Navbar /></div>
      {/* Content that starts below the navbar */}
      <div className="mt-16 bg-gray-500 overflow-auto"> {/* Add padding-top for the fixed navbar height */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/early-warning" element={<EarlyWarning />} />
          <Route path="/learning-hub" element={
            <ProtectedRoute>
              <LearningHub />
            </ProtectedRoute>
          }/>
          <Route path="/financial-support" element={
            <ProtectedRoute>
              <FinancialSupport />
            </ProtectedRoute>
          } />
          <Route path="/parental-engagement" element={
            <ProtectedRoute>
              <ParentPortal />
            </ProtectedRoute>
          } />
          <Route path='/learning-hub/online-consultation' element={
            <ProtectedRoute>
              <OnlineConsultation />
            </ProtectedRoute>
          } />
          <Route path='/learning-hub/resource-library' element={
            <ProtectedRoute>
              <ResourceLibrary />
            </ProtectedRoute>
          } />
          <Route path='/learning-hub/virtual-tutoring' element={
            <ProtectedRoute>
              <VirtualTutoring />
            </ProtectedRoute>
          } />
          <Route path='/learning-hub/community-forums' element={
            <ProtectedRoute>
              <CommunityForums />
            </ProtectedRoute>
          } />
          <Route path='/learning-hub/community-forums/:forumName' element={
            <ProtectedRoute>
              <CommunityPage />
            </ProtectedRoute>
          } />
          <Route path='/learning-hub/virtual-tutoring/booking' element={
            <ProtectedRoute>
              <BookingConfirmation />
            </ProtectedRoute>
          } />
          <Route path='/financial-support/scholarships' element={
            <ProtectedRoute>
              <Scholarships />
            </ProtectedRoute>
          } />
          <Route path='/financial-support/grants' element={
            <ProtectedRoute>
              <Grants />
            </ProtectedRoute>
          } />
          <Route path='/financial-support/loans' element={
            <ProtectedRoute>
              <Loans />
            </ProtectedRoute>
          } />
          <Route path='/financial-support/faq' element={
            <ProtectedRoute>
              <FAQ />
            </ProtectedRoute>
          } />
          <Route path="/parental-engagement/resources" element={
            <ProtectedRoute>
              <ParentingResources />
            </ProtectedRoute>
          } />
          <Route path="/parental-engagement/communication" element={
            <ProtectedRoute>
              <CommunicationTips />
            </ProtectedRoute>
          } />
          <Route path="/parental-engagement/events" element={
            <ProtectedRoute>
              <UpcomingEvents />
            </ProtectedRoute>
          } />
          <Route path="/parental-engagement/faq" element={
            <ProtectedRoute>
              <ParentingFAQs />
            </ProtectedRoute>
          } />
          <Route path="/flexible-schooling" element={
            <ProtectedRoute>
              <SchoolingManagement />
            </ProtectedRoute>
          } />
          <Route path="/schooling/courses" element={
            <ProtectedRoute>
              <CombinedPage />
            </ProtectedRoute>
          } />
          <Route path="/schooling/progress" element={
            <ProtectedRoute>
              <ProgressPage />
            </ProtectedRoute>
          } />
          <Route path="/schooling/studentSchedule" element={
            <ProtectedRoute>
              <CalendarView />
            </ProtectedRoute>
          } />
          <Route path="/about" element={<About /> } />
          <Route path="/student/dashboard" element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path="/reward" element={
            <ProtectedRoute>
              <RewardSystem />
            </ProtectedRoute>
          } />
          <Route path="/shop" element={
            <ProtectedRoute>
              <Store />
            </ProtectedRoute>
          } />
          <Route path="/expert/dashboard" element={
            <ProtectedRoute>
              <ExpertDashboard />
            </ProtectedRoute>
          } />
          <Route path="/tutor/dashboard" element={
            <ProtectedRoute>
              <TutorDashboard />
            </ProtectedRoute>
          } />
          <Route path="/parent/dashboard" element={
            <ProtectedRoute>
              <ParentDashboard />
            </ProtectedRoute>
          } />
          <Route path="/attendance" element={
            <ProtectedRoute>
              <QRScanner />
            </ProtectedRoute>
          } />

          <Route path="/subadmin/student-details" element={
            <ProtectedRoute>
              <StudentAdminDashboard />
            </ProtectedRoute>
          } />

          <Route path="/admin/college-droput" element={
            <ProtectedRoute>
              <CoolegeWiseDropout />
            </ProtectedRoute>
          } />

          <Route path="/signup" element={<LoginSignupModal />} />
          <Route path="/complaint" element={
            <ProtectedRoute>
              <StudentGrievanceForm />
            </ProtectedRoute>
          } />
        </Routes>
        <ChatBox />
      </div>
      < Footer />
    </Router>
  );
}

export default App;
