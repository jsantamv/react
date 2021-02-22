import React from 'react'
import reactDom from 'react-dom'
import CounterApp from './components/CounterApp'
import './css/index.css'

const divRoot = document.querySelector('#root')
reactDom.render(<CounterApp value={12}/>, divRoot)


