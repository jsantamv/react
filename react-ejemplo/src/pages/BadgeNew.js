import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import Navbar from '../componets/Navbar'
import Badge from '../componets/Badge'
import BadgeForm from '../componets/BadgeForm'

class BadgeNew extends  React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt="logo"></img>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>                            
                            <Badge
                                firstName="Juan Carlos"
                                lastName='Santamaria'
                                tuiter='jsantamv'
                                avatarUrl='https://avatars0.githubusercontent.com/u/10082595?s=460&v=4'
                                jobTitle='Ingeniero'
                            />
                        </div>

                        <div className='col-6'>
                            <BadgeForm
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew