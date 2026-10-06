import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { LAYERS } from "@/lib/site";
import { pageTransition } from "@/lib/motion";
import Home from "@/pages/Home";
import Team from "@/pages/Team";
import Registration from "@/pages/Registration";
import NotFound from "@/pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        id="main-content"
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-1"
      >
        <ScrollToTop />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <a
          href="#main-content"
          className={`sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 ${LAYERS.skipLink} focus:rounded-ui focus:bg-white focus:px-4 focus:py-3 focus:text-[0.875rem] focus:font-medium focus:text-purple-800`}
        >
          Əsas məzmuna keç
        </a>

        <div className="flex min-h-svh flex-col">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}
