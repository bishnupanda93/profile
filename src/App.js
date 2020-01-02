import React from 'react';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const person ={
    name : 'Priya Gupta',
    address: 'Amstelveen, NL',
    phone :'+31 645827857',
    email:'guptapriyab@gmail.com',
    linkedIn:'https://www.linkedin.com/in/priya-gupta-46549aab'
  }
  const summary = 'Highly creative, sassy and motivated front-end web developer with 4.25 years of experience in building and maintaining responsive websites. Passionate about building pixel perfect application, with focus on consistency and reusability of components. Proficient in modern libraries and frameworks and experience in Agile development method.';
  const skills=[
    'HTML5, CSS3, JavaScript ',
    'React, Redux, ES6, Jest',
    'Vue.js, Vuex'
  ];
  return (
    <div className="container">
      <Header personDetails = {person}></Header>
      <Portfolio skills={skills} summary={summary}></Portfolio>
    </div>
  );
}

export default App;
