import React, { useState, useRef } from 'react';
import useTransactions from '../hooks/useTransactions';

const AddTransaction = () => {
  // State to manage the type of transaction (Income, Expense, Savings)
  const [type, setType] = useState('Income');
  
  // State to manage the amount of the transaction
  const [amount, setAmount] = useState('');
  
  // State to manage the category of the transaction
  const [category, setCategory] = useState('');
  
  // Custom hook to add a new transaction
  const { addTransaction } = useTransactions();
  
  // Ref to focus on the amount input after submitting the form
  const amountRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit behavior

    // Create a new transaction object
    const newTransaction = {
      id: Date.now(), // Unique id based on current timestamp
      type,
      amount: parseFloat(amount), // Convert amount to a number
      category,
    };
    
    // Add the new transaction using the custom hook
    addTransaction(newTransaction);
    
    // Clear the form fields
    setAmount('');
    setCategory('');
    
    // Focus back on the amount input field
    amountRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
          <option value="Savings">Savings</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          ref={amountRef} // Reference to focus on this input after submit
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
