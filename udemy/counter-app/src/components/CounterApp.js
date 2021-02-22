import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value }) => {

    const handleAdd = (e) => {
        //setCounter(counter+1)
        setCounter((c) => c + 1)
    }

    const handleReset = (e) => setCounter(value)
    const handleSubtract = (e) => setCounter((c) => c - 1)

    //Hook
    const [counter, setCounter] = useState(value)

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    );
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 10
}

export default CounterApp;