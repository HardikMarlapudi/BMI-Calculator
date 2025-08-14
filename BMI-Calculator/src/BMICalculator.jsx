import React, {useState} from 'react';
import './BMICalculator.css';

function BMICalculator() {

    let [BMI, setBMI] = useState(0);
    let [weight, setWeight] = useState(0);
    let [height, setHeight] = useState(0);

   function reset() {
        setBMI(0);
        setWeight(0);
        setHeight(0);

    if (document.getElementById("BMIinput") != null) {
        document.getElementById("BMIinput").value = "";
        document.getElementById("BMIOutput").textContent = "";
    }
}

   function calculate() {
        BMI = weight / (height ** 2) / 703;

        if(BMI < 18.5) {

            document.getElementById("BMIOutput").textContent = `${`Your BMI is ${BMI} (Underweight)`}`;
            console.log(BMI);

        } else if (BMI >= 18.5 && BMI >= 24.5) {

            document.getElementById("BMIOutput").textContent = `${`Your BMI is ${BMI} (Normal weight)`}`;
            console.log(BMI);

        } else if (BMI >= 25 && BMI >= 29.9) {

            document.getElementById("BMIOutput").textContent = `${`Your BMI is ${BMI} (Overweight)`}`;
            console.log(BMI);

        } else if (BMI >= 30) {

            document.getElementById("BMIOutput").textContent = `${`Your BMI is ${BMI} (Obese)`}`;
            console.log(BMI);

        } else {

            document.getElementById("BMIOutput").textContent = `${`Error`}`;
            console.log('Error');

        }
   }

    return (
        <>
        <div className="border-scale">
        <title>BMI Calculator app</title>

        <h1 id="title">BMI Calculator</h1>

        <center><input type="text" id="BMIinput"></input></center><br></br>
        <center><p type="text" id="BMIOutput"></p></center><br></br>

        <div className="buttons">
        <button id="BMIButton" onClick={calculate}>Calculate</button>
        <button id="reset" onClick={reset}>Reset</button>
        </div>
        </div>
        </>
    )
}

export default BMICalculator;
