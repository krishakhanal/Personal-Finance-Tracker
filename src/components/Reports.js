import React, { useMemo } from 'react';
import useTransactions from '../hooks/useTransactions';

const Reports = () => {
  // Destructure transactions from the custom hook
  const { transactions } = useTransactions();

  // Calculate total income using useMemo to avoid recalculating on every render
  const totalIncome = useMemo(() => {
    return transactions
      .filter(t => t.type === 'Income') // Filter transactions for type 'Income'
      .reduce((sum, t) => sum + t.amount, 0); // Sum up the amounts
  }, [transactions]); // Recalculate only when transactions change

  // Calculate total expenses using useMemo
  const totalExpenses = useMemo(() => {
    return transactions
      .filter(t => t.type === 'Expense') // Filter transactions for type 'Expense'
      .reduce((sum, t) => sum + t.amount, 0); // Sum up the amounts
  }, [transactions]); // Recalculate only when transactions change

  // Calculate total savings using useMemo
  const totalSavings = useMemo(() => {
    return transactions
      .filter(t => t.type === 'Savings') // Filter transactions for type 'Savings'
      .reduce((sum, t) => sum + t.amount, 0); // Sum up the amounts
  }, [transactions]); // Recalculate only when transactions change

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Total Savings: {totalSavings}</p>
    </div>
  );
};

export default Reports;
