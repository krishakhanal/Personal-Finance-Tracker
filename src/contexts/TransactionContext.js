import React, { createContext, useState, useContext } from 'react';

// Create the context for transactions
export const TransactionContext = createContext();

// Provider component for the context
export const TransactionProvider = ({ children }) => {
  // State to store the list of transactions
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction to the state
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  return (
    // Provide the transactions and addTransaction function to the context
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children} {/* Render child components that can access the context */}
    </TransactionContext.Provider>
  );
};

// Custom hook to access the transaction context
export const useTransactions = () => {
  return useContext(TransactionContext);
};
