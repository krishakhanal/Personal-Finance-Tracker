import React from 'react';
import TransactionList from '../components/TransactionList';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* Render the TransactionList component to display transactions */}
      <TransactionList />
    </div>
  );
};

export default Home;
