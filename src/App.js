
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';






function App() {
  return (
    <>
    
    <Navbar title = "TextUtils" aboutText = "About TextUtils"/>

    <div className="container">
      <TextForm 
      headerText = "Enter text to Analyse" 
      labelText = "Write text here" 
      buttonName1 = "Convert to UpperCase" 
      buttonName2 = "Comvert to LowerCase"
      buttonName3 = "Clear" />
    </div>


    <About/>
    

    </>
  );
}

export default App;
