import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Autorization from './components/Autorization/Autorization';
import Header from './components/Header/Header';

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={ <Autorization/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;