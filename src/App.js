import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddTransaction from './components/AddTransaction';
import TransactionsList from './components/TransactionList'; // Correct the import name
import Reports from './components/Reports';
import Settings from './components/Settings';
// In index.js or App.js
import './styles/App.css'; // Adjust path if needed

const App = () => {
  return (
    <Router>
      {/* Navigation menu with links to different routes */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-transaction">Add Transaction</Link>
        <Link to="/transactions">Transactions List</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/transactions" element={<TransactionsList />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
