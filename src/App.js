import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
