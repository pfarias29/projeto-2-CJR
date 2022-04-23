import React from 'react';
import './App.css';
import Header from './components/header/index'
import {Nav, Tabela} from './components/body/tabela/index'
import Footer from './components/body/footer/index'


const Dinnerdash = () => {
  return (
    <main>
      <body>
        <Header/>
        <Nav/>
        <Tabela/>
        <Footer/>
      </body>  
    </main> 
  );
}

export default Dinnerdash;
