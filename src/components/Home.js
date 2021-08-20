import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App';
// import {Link} from 'react-router-dom';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
const Home = () => {

    const { state, dispatch } = useContext(UserContext);
    //const [data, setData] = useState('');
    
    // useEffect(() => {
    //     fetch('/check', {
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.getItem("jwt")
    //         }
    //     }).then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             if (result.error) {
    //                 //M.toast({html: result.error , classes:"#c62828 red darken-3"})
    //             } else {
    //                 M.toast({ html: result.Message, classes: "#43a047 green darken-1" })
    //             }
    //         })
    // }, [])

    const renderButton = () => {
        if (state) {
        return[
                <a  className="waves-effect waves-light btn-large #f57f17 yellow darken-4 home-button">
                        <Link style={{color:"white"}} to="/appointment">Book Appointment</Link></a>,
                <a  className="waves-effect waves-light btn-large #f57f17 yellow darken-4 home-button">
                        <Link style={{color:"white"}} to="/products">Buy Products</Link></a>,
            ]
        }
        else {
        return[
                <a class="waves-effect waves-light btn-large #f57f17 yellow darken-4 home-button">
                        <Link style={{color:"white"}} to="/products">Buy Products</Link></a>,
            ]
        }
    }

    return (
        <div className="home">
            <div style={{ marginTop: "250px" }}>
                <h1 style={{ color: "white", height: "55px" }}>NEED A NEW LOOK ?</h1>
                <h4 style={{ color: "white" }} >WE ARE YOUR SOLUTION</h4>
                <h5>We Want To Be Your Destination For Great Beauty</h5>
            </div>
            <div style={{ marginTop: "100px" }}>
                <ul>
                    {renderButton()}
                </ul>
            </div>

        </div>
    )
}

export default Home
