import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import Navbar from "./components/Navbar";
import './index.js'
import Home from './pages';
import About from "./pages/about";
import Dictionary from "./pages/dictionary.js";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/dictionary" element={<Dictionary />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
