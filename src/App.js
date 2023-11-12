import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactMe from "./Pages/ContactMe";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          {/* <Route path="/" element={<Projects />} />
          <Route path="/" element={<Vision />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
