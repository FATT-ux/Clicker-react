import React from 'react'
import logo from '../img/logo.png'
import HeaderNav from './HeaderNav'
class Header extends React.Component{
    render(){
        return(
            <header className='header'>
                <div className='container'>
                <img className='header-logo' src={logo} />
                <HeaderNav />
                </div>
            </header>
        )
    }
}

export default Header