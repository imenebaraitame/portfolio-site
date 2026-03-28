import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/ui/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
   
     
      <BrowserRouter>
        <div className="min-h-screen flex flex-col" style={{ background: "#0a080f", color: "#e8e8f0" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      
   
  )
}

export default App
