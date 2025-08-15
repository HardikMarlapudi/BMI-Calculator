import React, {useState} from 'react';
import './BMICalculator.css';

function BMICalculator() {

    const [BMI, setBMI] = useState(null);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [message, setMessage] = useState('');

   const reset = () => {
        setBMI(null);
        setWeight('');
        setHeight('');
        setMessage('');

    if (document.getElementById("BMIinput") != null) {
        document.getElementById("BMIinput").value = "";
        document.getElementById("BMIOutput").textContent = "";
    }
}

   function calculate() {
        
        if (!weight || !height || isNaN(weight) || isNaN(height)) {
            setMessage("Please enter valid weight and height.");
            return;
        }

        // BMI formula for imperial units
        const calculatedBMI = () => weight / (height ** 2) / 703;
        setBMI(calculatedBMI.toFixed(1));

        if(BMI < 18.5) {

            document.getElementById("BMIOutput").textContent = `${`Your BMI is ${BMI} (Underweight)`}`;
            setMessage('UnderWeight');

        } else if (BMI >= 18.5 && BMI >= 24.5) {

            document.getElementById("BMIOutput").textContent = `${`Your BMI is ${BMI} (Normal weight)`}`;
            setMessage('Normal Weight');

        } else if (BMI >= 25 && BMI >= 29.9) {

            document.getElementById("BMIOutput").textContent = `${`Your BMI is ${BMI} (Overweight)`}`;
            setMessage('OverWeight');

        } else if (BMI >= 30) {

            document.getElementById("BMIOutput").textContent = `${`Your BMI is ${BMI} (Obese)`}`;
            setMessage('Obese');

        } else {

            document.getElementById("BMIOutput").textContent = `${`Error`}`;
            setMessage('Error');

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
                placeholder="Width: "
                value={weight}
                onChange={(e) => setWeight(e.target.value)}></input></center><br></br>
        <center>
            <input 
                type="text" 
                id="BMIinput" 
                placeholder="Height: "
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
