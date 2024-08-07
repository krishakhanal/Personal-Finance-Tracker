import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TransactionProvider } from './contexts/TransactionContext'; // Import the context provider

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App component with TransactionProvider to provide context */}
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>,
  // Render the application into the HTML element with id 'root'
  document.getElementById('root')
);
