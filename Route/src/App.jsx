import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserPage from './UserPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users/1">Usuário 1</Link>
            </li>
            <li>
              <Link to="/users/2">Usuário 2</Link>
            </li>
            <li>
              <Link to="/users/3">Usuário 3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users/:id" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
