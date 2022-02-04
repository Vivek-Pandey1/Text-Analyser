import "./App.css";
import Navbar from "./Components/Navbar";
import Notfound from "./Components/Notfound";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
