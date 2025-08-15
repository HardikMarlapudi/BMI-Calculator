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
            setMessage("Please enter valid weight and height.");
            return;
        }

        // BMI formula for imperial units
        const value = weight / (height ** 2) * 703;
        const rounded = Number(value.toFixed(1));
        setBMI(rounded);

        if (value < 18.5) setMessage('Underweight');
        else if (value >= 18.5 && value <= 24.9) setMessage('Normal weight');
        else if (value >= 25 && value <= 29.9) setMessage('Overweight');
        else setMessage('Obese');
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
                min="0"
                step="any"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}></input></center><br></br>
        <center>
            <input 
                type="text" 
                id="BMIinput" 
                placeholder="Height: (inches)"
                min="0"
                step="any"
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
