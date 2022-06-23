
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';






function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      
    }else{
      setMode('light');
    }
  }

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const changeBtnText = ()=>{
    if(mode === 'light'){
      setBtnText('Enable Dark Mode');
    }else{
      setBtnText('Enable Light Mode');
    }

  }

  return (
    <>
    
    <Navbar 
    title = "TextUtils" 
    aboutText = "About TextUtils" 
    mode = {mode} 
    toggleMode = {toggleMode}
    changeBtnText = {changeBtnText}/>

    <div className="container">
      <TextForm 
      headerText = "Enter text to Analyse" 
      labelText = "Write text here" 
      buttonName1 = "Convert to UpperCase" 
      buttonName2 = "Comvert to LowerCase"
      buttonName3 = "Clear"
      buttonName4 = "Copy Text" 
      buttonName5 = "Remove Extra Spaces" />
    </div>


    <About/>
    

    </>
  );
}

export default App;
