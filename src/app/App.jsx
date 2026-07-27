import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/ui/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Footer} from "./components/ui/Footer";
import SplashScreen from "./components/ui/SplashScreen";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  return (
   
     
      <BrowserRouter>
          <div className="min-h-screen flex flex-col" style={{ background: "#0a080f", color: "#e8e8f0" }}>
            <motion.div
              initial={{ opacity: 0.92 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-h-screen flex flex-col"
            >
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
              <Footer />
             </motion.div>
          </div>
          <AnimatePresence>
          {loading && (
            <SplashScreen
              onFinish={() => setLoading(false)}
              duration={7000}
            />
          )}
        </AnimatePresence>
        
      </BrowserRouter>
      
   
  )
}

export default App
