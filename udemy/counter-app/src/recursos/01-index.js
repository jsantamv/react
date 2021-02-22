import React from 'react'
import reactDom from 'react-dom'
import PrimeraApp from './components/PrimeraApp'
import './index.css'


const divRoot = document.querySelector('#root')
reactDom.render(<PrimeraApp saludo="hola mundo" subtitulo="ahora si"/>, divRoot)

