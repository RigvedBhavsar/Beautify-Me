import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import M from 'materialize-css';
import './Appointment.css';
const Appointment = () => {

    const history = useHistory();
    const [name, setName] = useState("");
    const [date, setDate] = useState(null);
    // const [time, setTime] = useState(null);
    const [service, setService] = useState('');

    const makeAppointment = () => {
        fetch("/addAppointment", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                name,
                date,
                service
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: "Appointment Booked Successfully !", classes: "#43a047 green darken-1" })
                    history.push('/');
                }
            }).catch(err => {
                console.log(err);
            })
    }

    const handleSelectOptions= (event)=>
    {
        let value = Array.from(
            event.target.selectedOptions,
            (option) => option.value
          );
          setService(value);
    }

    useEffect(() => {
        M.AutoInit();
    })

    return (
        <div className="my-card-appt">
            <div className="card auth-card-appt input-field">
                <h4 className="font">Book Appointment</h4>
                <div className="input-field">
                    <input type="text" value={name} placeholder="Booking For" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="input-field col s12">
                    {/* <select value={service}  onChange={(e) => setService(e.target.value)}> */}
                    <select value={service} multiple={true}  onChange={handleSelectOptions}>
                        <option value="" disabled selected>Choose Service</option>
                        <option className="selectOption" value="Manicure">Manicure (20-30 Min)</option>
                        <option value="  Pedicure ">Pedicure (20-30 Min)</option>
                        <option value="  Threading ">Threading (10 Min)</option>
                        <option value="  Head massage ">Head Massage (10 Min)</option>
                        <option value="  Hand waxing ">Hand Waxing (20-30 Min)</option>
                        <option value="  Leg Waxing ">Leg waxing (20-30 Min)</option>
                        <option value="  Full Body Waxing ">Full Body Waxing (1 Hr)</option>
                        <option value="  Hair Cut ">Hair Cut (20-30 Min)</option>
                        <option value="  Hair Colour ">Hair Colour (2-3 Hrs)</option>
                        <option value="  Hair Style ">Hair Style (30-40 Min)</option>
                        <option value="  Hair Spa ">Hair Spa (1 Hr)</option>
                        <option value="  Keratin ">Keratin (3-4 Hrs)</option>
                        <option value="  Smoothning ">Smoothning (2-3 Hrs)</option>
                        <option value="  Facial ">Facial (40-50 Min)</option>
                        <option value="  Clean U ">Clean Up (30 Min)</option>
                        <option value="  Blech ">Bleach (30 Min)</option>
                        <option value="  De Tanning ">De Tanning (30 Min)</option>
                        <option value="  Make Up ">Make Up (1 Hr)</option>
                        <option value="  Styling ">Styling (1 Hr)</option>
                        <option value="  Bridal Makeup ">Bridal Makeup (2-3 Hrs)</option>
                        <option value="  Party Makeup ">Party Makeup (1 Hr)</option>
                    </select>
                </div>
                <div>
                    <DatePicker selected={date} dateformat='dd/MM/yy' minDate={new Date()} onChange={d => setDate(d)} placeholderText="Select Date" />
                    <h6 className="font">Timmig : 10 AM To 6 PM</h6>
                </div>
                <div>
                    <button style={{ marginTop: "20px" }} className="waves-light btn #f57f17 yellow darken-4" onClick={() => makeAppointment()}>Book</button>
                </div>
            </div>
        </div>
    )
}
export default Appointment
