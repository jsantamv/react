import React from 'react'
import reactDom from 'react-dom'
import CounterApp from './components/CounterApp'

import './index.css'


const divRoot = document.querySelector('#root')
reactDom.render(<CounterApp value={1123}/>, divRoot)

