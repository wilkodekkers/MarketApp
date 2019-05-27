import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className='green'>
                <div className='nav-wrapper container'>
                    <Link className='brand-logo' to='/'>MarketApp</Link>
                </div>
            </nav>
        )
    }
}

export default Header