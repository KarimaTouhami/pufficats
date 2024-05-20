import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Guide } from './Guide';
import { Roster } from './Roster';
import { Connections } from './Connections';

export default function App() {
  return (
    <Router>
      <div className="App">
        <div id="wrapper">
          <div id="main">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/guide">Guide</Link></li>
                <li><Link to="/roster">Roster</Link></li>
                <li><Link to="/connections">Connections</Link></li>
              </ul>
            </nav>
            <div id="class">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/roster" element={<Roster />} />
                <Route path="/connections" element={<Connections />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
