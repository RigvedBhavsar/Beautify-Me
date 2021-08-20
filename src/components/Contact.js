import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMail = () => {

    }

    return (
        <section id="contact">
            <div className="contact-us">
                <h4 className="contact-Heading">CONTACT US</h4>
                <div className="contact-right">
                    <div>
                        <div className="card contact-auth-card input-field">
                            <h6 className="contact-Heading">GET IN TOUCH</h6>
                            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                            <button style={{ marginTop: "30px" }} className="waves-effect waves-light btn #f57f17 yellow darken-4" onClick={() => sendMail()}>Send</button>
                        </div>
                    </div>
                </div>
                <div className="contact-left">
                    <div className="row">
                        <h5 className="contact-Heading col" style={{ marginLeft: "-10px" }}>WHERE TO FIND </h5>
                        <i class="material-icons medium col location-icon">location_on</i>
                    </div>
                    <ul>
                        <li><p className="address-details">Gharda Circle &nbsp; +91 0251 123456</p></li>
                        <li><p className="address-details">Char Rasta &nbsp; +91 0251 230119</p></li>
                        <li><p className="address-details">Manpada Road &nbsp; +91 0251 255058</p></li>
                        <li><p className="address-details">Phadake Road &nbsp; +91 12345 67891</p></li>
                    </ul>
                    <div>
                        <div className="row">
                            <ul className="social-links">
                                <SocialIcon style={{ height: '30px', width: '30px', marginRight: '10px' }} url="https://twitter.com/" />
                                <SocialIcon style={{ height: '30px', width: '30px', margin: '10px' }} url="https://instagram.com/" />
                                <SocialIcon style={{ height: '30px', width: '30px', margin: '10px' }} url="https://facebook.com/" />
                                <SocialIcon style={{ height: '30px', width: '30px', margin: '10px' }} url="https://youtube.com/" />
                                <SocialIcon style={{ height: '30px', width: '30px', margin: '10px' }} url="https://whatsapp.com/" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
