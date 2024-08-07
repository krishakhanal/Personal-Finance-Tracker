import React from 'react';
import useTransactions from '../hooks/useTransactions';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  // Destructure transactions from the custom hook
  const { transactions } = useTransactions();

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {/* Map over the transactions array and render a TransactionItem for each transaction */}
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
