import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../src/pages/index";
import Books from "../src/pages/Books/index";
import TeamPage from "../src/pages/Team/index";
import ContactPage from "../src/pages/Contact/index";
import Header from "../src/components/shared/Header/index";
import Footer from "./components/shared/Footer";



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
