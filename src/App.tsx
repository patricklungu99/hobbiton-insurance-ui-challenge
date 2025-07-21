import { Route, Routes } from "react-router-dom";
import QuotePage from "./pages/Quote";
import LandingPage from "./pages/Home";
import NotFoundPage from "./pages/NotFound"; 
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quote" element={<QuotePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for undefined routes */}
    </Routes>
  );
}

export default App;

