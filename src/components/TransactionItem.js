import React from 'react';
import useTransactions from '../hooks/useTransactions';

const TransactionItem = ({ transaction }) => {
  // Destructure editTransaction and deleteTransaction functions from the custom hook
  const { editTransaction, deleteTransaction } = useTransactions();

  // Handle deletion of the transaction
  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  return (
    <li>
      {/* Display transaction details */}
      {transaction.type}: {transaction.amount} ({transaction.category})
      {/* Button to edit the transaction; adds 10 to the current amount */}
      <button onClick={() => editTransaction({ ...transaction, amount: transaction.amount + 10 })}>Edit</button>
      {/* Button to delete the transaction */}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TransactionItem;
