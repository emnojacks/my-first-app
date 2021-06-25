import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg';
import './App.css';
import Inputs from './components/site/Inputs'
import View from './components/site/View'
//import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';


function App() {
  
    const [name, setName] = useState("name");
    const [age, setAge] = useState("age");
    const [hobbies, setHobbies] = useState("hobbies");
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h2>
        React Challenge 1
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My First App 
        </a>
      
      </header>
      <div>
        
        <Inputs
          name={name}
          age={age}
          hobbies={hobbies}
          setName={setName}
          setAge={setAge}
          setHobbies={setHobbies}
        />
        <View
        //keys are from child, values from parent
          passedName={name}
          age={age}
          hobbies={hobbies}
        />
       
      
      </div>
    </div>
  );
}

export default App;
