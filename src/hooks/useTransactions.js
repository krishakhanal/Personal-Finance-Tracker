import { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const useTransactions = () => {
  // Access the TransactionContext and return its value
  return useContext(TransactionContext);
};

export default useTransactions;
