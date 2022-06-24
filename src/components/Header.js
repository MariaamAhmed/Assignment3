import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'



export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                <i class="fa-solid fa-bars" width="40"></i>
                </div>
                <div className="logo">
                    <h1><Link to="/">System Tron  <i class="fa-solid fa-cubes"></i></Link></h1>  
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">AboutUs</Link></li>
                        <li><Link to="/products">Product</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                        <i class="fa-solid fa-xmark" width="30"></i>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                        <i class="fa-solid fa-cart-shopping" width="20"></i>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
