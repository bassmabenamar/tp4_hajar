
import './App.css';
import React from 'react';
import Footer from './compenents/footer';
import Header from './compenents/header';
import DashedList from './compenents/DashedList';
import TableList from './compenents/TableList';
import Livre from './compenents/Livre';
import ListLivre from './compenents/ListLivre';


function App() {
  return (
    <div className="App">
      <Header/>
      <DashedList/>
      <TableList/>
      <Livre/>
      <ListLivre/>
      <Footer/>

      
    </div>
  );
}

export default App;
