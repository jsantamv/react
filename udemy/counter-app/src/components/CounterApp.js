import React from 'react';
import PropTypes from 'prop-types';


// HandleAdd
const handleAdd = (e) => {    
    return console.log("Hola Mundo")
}

const CounterApp = ({ value }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <p>{value}</p>

            <button onClick={handleAdd}>+1</button>
        </>
    );
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: "Valor por defecto"
}

export default CounterApp;