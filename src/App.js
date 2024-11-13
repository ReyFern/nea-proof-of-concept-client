import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import './index.js'
import Home from './pages';
import About from "./pages/about";
import Dictionary from "./pages/dictionary.js";
import New_Player from './pages/new-player.js';
import Fam_Player from './pages/fam-player.js';
import Builder from './pages/builder.js';
import Builder_Level from './pages/builder/builder-level.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/dictionary" element={<Dictionary />} />
            <Route exact path="/new-player" element={<New_Player />} />
            <Route exact path="/fam-player" element={<Fam_Player />} />
            <Route exact path="/builder/*" element={<Builder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
