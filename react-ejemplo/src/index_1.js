import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import Badge from './componets/Badge'
//import BadgeNew from './pages/BadgeNew'



const container = document.getElementById('app')

/*Simpre a react hay que paserle un 
    render para que se muestre
    por eso colocamos ---> <Badge/>
*/
ReactDOM.render(<Badge
                    firstName="Juan Carlos"
                    lastName="Santamaria"
                    jobTitle='FrontEnd Engineer'
                    tuiter='jsantamv'
                    avatarUrl='https://avatars0.githubusercontent.com/u/10082595?s=460&v=4'
                /> 
                ,container)