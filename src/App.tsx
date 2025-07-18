import { Route, Routes } from "react-router-dom";
import QuotePage from "./pages/Quote";
import LandingPage from "./pages/Home" ;

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
  );
}

export default App;
