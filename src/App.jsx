import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./home/pages/home";
import About from "./about/pages/about";
import Booking from "./booking/pages/booking";
import { FormProvider } from "./context/formContext";

function AppContent() {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const isBookingPage = location.pathname === "/booking";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center h-screen bg-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <motion.p
              className="text-gray-700 text-6xl sm:text-8xl md:text-9xl font-bold italic"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              Fly
            </motion.p>
            <motion.p
              className="text-blue-200 text-6xl sm:text-8xl md:text-9xl font-bold"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              Logistics
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isTransitioning && (
        <div
          className={`w-auto h-screen overflow-auto ${
            !isBookingPage
              ? "md:px-16 lg:px-24 xl:px-32 px-8 bg-gray-700"
              : ""
          }`}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>

            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <FormProvider>
        <Router>
        <AppContent />
        </Router>
    </FormProvider>
  );
}
