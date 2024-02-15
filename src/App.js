import './App.css';
import { useState } from 'react';

function App() {
  const [picker, setPicker] = useState();
  const setColor = (code) =>{
    const colorCode = code;
    if(colorCode.includes(code)){
      setPicker(code);
    }
  }     

  return (
    <div className="App">
     
        <h1> Color Picker </h1>
        <h3>Choosen Color : {picker}</h3>
        <input type='color' value={picker} onChange={(e)=> setColor(e.target.value)}/>      
    </div>
  );
}

export default App;
