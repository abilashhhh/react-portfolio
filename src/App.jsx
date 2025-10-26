// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Sections/Navbar";
import ProjectDetail from "./components/Sections/ProjectDetail";
import ProjectsPage from "./components/Sections/ProjectsPage";
import CertificationDetail from "./components/Sections/CertificationDetail";
import CertificationsPage from "./components/Sections/CertificationsPage";
import JourneyStepDetail from "./components/Sections/JourneyStepDetail";
import Home from "./Home";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route
              path="/certifications/:slug"
              element={<CertificationDetail />}
            />
            <Route path="/journey/:slug" element={<JourneyStepDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
