import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import {IconButton , Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { UserContext } from '../App';
import useStyles from './styles';
const Navbar = ({totalItems}) => {

    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const classes = useStyles();
    
    const renderList = () => {
        if (state) {
            return [
                <li className="center" id="brand-logo"><Link to="/">Beautify Me</Link></li>,
                <li className="center"><Link to="/products">Products</Link></li>,
                
                <li className="center">
                    <Link to={state ? "/appointment":"/signin"}>Appointment</Link>
                </li>,
                
                <li><a className="center smoothscroll" style={{marginLeft:"" , cursor:"pointer"}} href="#about">About</a></li>,
                <li><a className="center smoothscroll" style={{marginLeft:"" , cursor:"pointer"}} href="#contact">Contact</a></li>,
                <li className="right" style={{ cursor: "pointer", marginRight: "10px" }}
                    onClick={() => {
                        localStorage.clear();
                        dispatch({ type: "CLEAR" });
                        history.push("/");
                    }}><i class="material-icons left">logout</i>
                </li>,
                <l1 className="right" style={{marginRight:"10px"}}>
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                        </Badge>
                        </IconButton>
                    </div>
                </l1>
                
            ]
        } else {
            return [
                <li className="center" id="brand-logo"><Link to="/">Beautify Me</Link></li>,
                <li className="center"><Link to="/products">Products</Link></li>,
                <li className="center">
                    <Link to={state ? "/appointment":"/signin"}>Appointment</Link>
                </li>,
                <li><a className="center smoothscroll" style={{marginLeft:"" , cursor:"pointer"}} href="#about">About</a></li>,
                <li><a className="center smoothscroll" style={{marginLeft:"" , cursor:"pointer"}} href="#contact">Contact</a></li>,
                <li className="right"> <Link to="/signin"><i class="material-icons left">login</i></Link></li>,
                <l1 className="right" style={{marginRight:"-10px"}}>
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                        </Badge>
                        </IconButton>
                    </div>
                </l1>
            ]
        }
    }

    return (
        <div>
            <nav className="navbar">
                <div className="nav-wrapper">
                    <ul id="nav-mobile">
                        {renderList()}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
