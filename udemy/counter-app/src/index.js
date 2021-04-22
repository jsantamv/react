import React from 'react'
import reactDom from 'react-dom'
import PrimeraApp from './components/PrimeraApp'
//import CounterApp from './components/CounterApp'

import './css/index.css'

const divRoot = document.querySelector('#root')

reactDom.render(<PrimeraApp saludo="Hola doy hola"/>, divRoot)


