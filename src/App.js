import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/About";
import DiscussionSection from "./components/Discussion";
import Home from "./components/Home";
import Notes from "./components/Notes";
import PomodoroTimer from "./components/Pomodoro";
import Blog from "./components/blog";
import Event from "./components/event";
import Footer from "./components/footer";
import Goals from "./components/goals";
import MenteeCalendarIntegration from "./components/mentee/CalendarIntegration";
import Mentee from "./components/mentee/Mentee";
import MentorshipResources from "./components/mentee/MentorshipResources";
import MenteeNotifications from "./components/mentee/Notifications";
import SendRequest from "./components/mentee/SendRequest";
import Navbar from "./components/navbar";
import Chatbot from "./components/Chatbot/Chatbot";
import ContextProvider from "./Context/chatbotContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/blogs" element={<Blog />} exact />
          <Route path="/events" element={<Event />} exact />
          <Route path="/goal" element={<Goals />} exact />
          <Route path="/mentee" element={<Mentee />} exact />
          <Route path="/discussion" element={<DiscussionSection />} exact />
          <Route path="/pomodoro" element={<PomodoroTimer />} exact />
          <Route path="/notes" element={<Notes />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="/chatbot" element={<ContextProvider><Chatbot/></ContextProvider>} exact />
          <Route
            path="/access_mentorship_resources"
            element={<MentorshipResources />}
            exact
          />
          <Route
            path="/mentee_calendar_integration"
            element={<MenteeCalendarIntegration />}
            exact
          />
          <Route
            path="/send_mentorship_requests"
            element={<SendRequest />}
            exact
          />
          <Route
            path="/mentee_receive_notifications"
            element={<MenteeNotifications />}
            exact
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
