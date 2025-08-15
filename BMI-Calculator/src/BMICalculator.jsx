import React, {useState} from 'react';
import './BMICalculator.css';

function BMICalculator() {

    const [BMI, setBMI] = useState(null);
    const [weight, setWeight] = useState(''); // lbs
    const [height, setHeight] = useState(''); // inches
    const [message, setMessage] = useState('');

   const reset = () => {
        setBMI(null);
        setWeight('');
        setHeight('');
        setMessage('');
}

   const calculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        
        if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
            setBMI(null);
            window.alert("Please enter valid weight and height.");
            return;
        }

        // BMI formula for imperial units
        const value = weight / (height ** 2) * 703;
        const rounded = Number(value.toFixed(1));
        setBMI(rounded);

        
        if (value <= 18.5) {
            setMessage("You are UnderWeight");
        } else if (value <= 24.9) {
            setMessage("You weight is Normal");
        } else if (value <= 29.9) {
            setMessage("You are OverWeight");
        } else if (value >= 30) {
            setMessage("You are Obese");
        } else {
            window.alert("Please enter valid weight and height");
        }
        
   }

    return (
        <>
        <div className="border-scale">
        <title>BMI Calculator app</title>

        <h1 id="title">BMI Calculator</h1>

        <center>
            <input 
                type="number" 
                id="BMIinput" 
                placeholder="Width: (lbs)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}></input></center><br></br>
        <center>
            <input 
                type="text" 
                id="BMIinput" 
                placeholder="Height: (inches)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}></input></center><br></br>
        <center>
            <p type="text" id="BMIOutput">Your BMI is {BMI} ({message})</p>{!BMI && message && <p>{message}</p>}</center><br></br>

        <div className="buttons">
        <button id="BMIButton" onClick={calculate}>Calculate</button>
        <button id="reset" onClick={reset}>Reset</button>
        </div>
        </div>
        </>
    )
}

export default BMICalculator;
