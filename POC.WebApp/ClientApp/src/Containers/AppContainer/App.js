import React from 'react';
import './App.css';
import Layout from '../../HOC/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';

const App = () => {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
