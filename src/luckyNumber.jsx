import { useState, useRef, useEffect } from "react";

const LuckyNumber = () => {
    const [less, setLess] = useState(false);
    const [greater, setGreater] = useState(false);
    const [range, setRange] = useState(50);
    const [randomNumber, setRandomNumber] = useState(null);

    // Ref to store the previous random number
    const prevNumberRef = useRef(null);

    // Update previous number ref when randomNumber changes
    useEffect(() => {
        prevNumberRef.current = randomNumber;
    }, [randomNumber]);

    // Less Than
    const btnLess = () => {
        setLess(true);
        setGreater(false);
    };

    // Greater Than
    const btnGreater = () => {
        setGreater(true);
        setLess(false);
    };

    // Input Range
    const inputRange = (e) => {
        setRange(Number(e.target.value));
    };

    // Random Number
    const BtnStart = () => {
        let min = 1;
        let max = 100;
        let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!less && !greater) {
        alert("Choose if less than or greater than");
        } else {
        setRandomNumber(randomInteger);

        // Check if user guessed correctly
        if (range === randomNumber) {
            alert(
            `Congrats you guessed the number: ${range} and it was ${randomNumber}`
            );
        } else if (less && randomNumber > range) {
            alert("Congrats you guessed the number!");
        } else if (greater && randomNumber < range) {
            alert("Congrats you guessed the number!");
        } else {
            alert("Sorry, try again!");
        }
        }
    };


    
    
    return (
        <div className="main-container">
        <div className="content-area">
            <div className="wrapper-main">
            <h1>Guess the Number</h1>
            <div className="main">
                <div className="outputNumber">{randomNumber}</div>
                <div className="nav-area">
                <div className="board">
                    Previous Number: {prevNumberRef.current}
                </div>
                <div className="board"></div>
                <div className="board">Highest Score: {}</div>
                </div>
            </div>
            </div>
            <div className="button-container">
            <div className="valueContainer">
                <div className="lessValue">{less ? "Less Than" : ""}</div>
                <div className="InputValue">{range}</div>
                <div className="greaterValue">{greater ? "Greater Than" : ""}</div>
            </div>
            <div className="lessGreather">
                <div>
                <button className="greater_Than" onClick={btnLess} type="button">
                    Less
                </button>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={range}
                    onChange={inputRange}
                />
                <button className="less_Than" onClick={btnGreater} type="button">
                    Greater
                </button>
                </div>
                <div>
                <button onClick={BtnStart} className="btn" type="button">
                    Start
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default LuckyNumber;
