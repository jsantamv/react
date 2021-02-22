import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    return (
        <>
            <h1>CounterApp</h1>
            <p>{value}</p>
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