import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };

    const handleAdd = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    };

    const handleSubtract = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    };

    const handleMultiply = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };

    const handleDivide = () => {
        setResult(parseFloat(num1) / parseFloat(num2));
    };

    return (
        <div>
            <div>
                <input style={{ fontSize: '1.2rem', borderRadius: '6px' }} type="text" value={num1} onChange={handleNum1Change} placeholder="Enter first number" />
                &nbsp;&nbsp;
                <input style={{ fontSize: '1.2rem', borderRadius: '6px' }} type="text" value={num2} onChange={handleNum2Change} placeholder="Enter second number" />
            </div>
            &nbsp;&nbsp;
            <div>
                <button style={{ fontSize: '1rem', padding: '6px' }} onClick={handleAdd}>+</button>
                &nbsp;&nbsp;
                <button style={{ fontSize: '1rem', padding: '6px' }} onClick={handleSubtract}>-</button>
                &nbsp;&nbsp;
                <button style={{ fontSize: '1rem', padding: '6px' }} onClick={handleMultiply}>*</button>
                &nbsp;&nbsp;
                <button style={{ fontSize: '1rem', padding: '6px' }} onClick={handleDivide}>/</button>
            </div>
            &nbsp;&nbsp;
            <div style={{ borderRadius: '12px', width: '150px', height: '50px', padding: '5px', backgroundColor: '#a2a2a3', fontSize: "20px" }}>Result: {result}</div>
        </div>
    );
};

export default Calculator;