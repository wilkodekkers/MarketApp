import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className='white'>
                <div className='nav-wrapper container'>
                    <Link className='brand-logo black-text' to='/'>MarketApp</Link>
                </div>
            </nav>
        )
    }
}

export default Header