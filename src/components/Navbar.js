import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import logo from '../images/logo.png';
const Navbar = () => {

    const {state , dispatch }  = useContext(UserContext); 
    const history = useHistory();

    const renderList=()=>{
        if(state){
            return[
                <li className="center" id="brand-logo">
                    <Link to="/">
                        {/* <img src={logo} alt="BeautifyMe" className="brand-image" /> */}
                    Beautify Me</Link></li>,
                <li className="center"><Link to="/products">Products</Link></li>,
                <li className="center"><Link to="/appoinment">Appointment</Link></li>,
                <li className="center"><Link to="/about">About</Link></li>,
                <li className="center"><Link to="/contact">Contact</Link></li>,
                <li className="right" style={{cursor : "pointer" , marginRight:"10px"}}
                    onClick={() => {
                    localStorage.clear();
                    dispatch({ type: "CLEAR" });
                    history.push("/");
                    }}><i class="material-icons left">logout</i></li>
            ]
        }else{
            return[
                <li className="center" id="brand-logo">
                    <Link to="/">
                        {/* <img src={logo} alt="BeautifyMe" className="brand-image" /> */}
                    Beautify Me</Link></li>,
                <li className="center"><Link to="/products">Products</Link></li>,
                <li className="center"><Link to="/appoinment">Appointment</Link></li>,
                <li className="center"><Link to="/about">About</Link></li>,
                <li className="center"><Link to="/contact">Contact</Link></li>,
                <li className="right"> <Link to="/signin"><i class="material-icons left">login</i></Link></li>
            ]
        }
    }

    return(
        <div> 
            <nav className="navbar">
                <div className="nav-wrapper">
                    <Link to={state? "/":"/signin"}></Link>
                    <ul id="nav-mobile">
                        {renderList()}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
