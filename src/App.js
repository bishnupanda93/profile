import React from 'react';
import Header from './components/Header/Header';

function App() {
  const person ={
    name : 'Priya Gupta',
    address: 'Amstelveen, NL',
    phone :'+31 645827857',
    email:'guptapriyab@gmail.com',
    linkedIn:'https://www.linkedin.com/in/priya-gupta-46549aab'
  }
  return (
    <div className="container">
      <Header personDetails = {person}></Header>
    </div>
  );
}

export default App;
