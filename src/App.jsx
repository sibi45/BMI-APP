import { useState } from 'react'

import './App.css'

function App() {
   const [height, setHeight] = useState("");
   const [Weight, setWeight] = useState("");
   const [bmi, setBmi] = useState(null);
   const [bmiStatus, setBmiStatus] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const calculatebmi = () => {
    const isValidHeight = /^\d+s/.test(height);
    const isValidWeight = /^\d+s/.test(Weight);


    if(height && Weight) {
      const heightInMeters = height / 100;
      const bmiValue = Weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5){
        setBmiStatus("under weight")

      }else if (bmiValue >=18.5 && bmiValue < 24.5){
        setBmiStatus("Normal weight");
      }else if (bmiValue >=25 && bmiValue < 29.9){
        setBmiStatus("over Weight");

      }else {
        setBmiStatus("obese");
      }
      setErrorMessage("");
    }else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values for height and weight.");
    }
   };
   
   const clearAll = () => {
    setHeight("")
    setWeight("")
    setBmi(null);
    setBmiStatus("");
   };
  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>

         {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" value={height} id="height" onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">weight (kg):</label>
            <input type="text" value={Weight} id="weight" onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <button onClick={calculatebmi}>Calculate bmi</button>
          <button onClick={clearAll}> Clear</button>
         {bmi !== null && (
           <div className="result">   
           <p> your BMI is : {bmi}</p>  
           <p> status: {bmiStatus}</p>
         </div>  
         )}
        </div>

       </div>
    </>
  );
}

export default App;
