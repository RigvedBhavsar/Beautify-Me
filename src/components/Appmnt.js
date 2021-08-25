
import React, { Component } from 'react'
import M from 'materialize-css';
import './Appointment.css';
export class Appointment extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            date: "",
            time: "",
            service: ""
        };
        this.date = React.createRef();
        this.time = React.createRef();
    }

    // componentDidMount(){
    //     M.AutoInit();
    // }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleDateChange = () => {
        this.setState({ date: this.date.current.value });
    }
    handleTimeChange = () => {
        this.setState({ time: this.time.current.value });
    }

    handleServiceChange = (event) => {
        this.setState({ service: event.target.value });
    }
    handleSubmit = (event) => {
        console.log('Name' + this.state.name +
            '\n Date' + String(this.state.date) +
            '\n Time' + String(this.state.time) +
            '\nService' + this.state.service);
        event.preventDefault();
        console.log("hie" + JSON.stringify(this.state.date));
    }

    componentDidMount() {
        //Initializers
        var context = this;
        document.addEventListener('DOMContentLoaded', function () {
            //Date
            var elemsDate = document.querySelectorAll('.datepicker');
            M.Datepicker.init(elemsDate, {
                format: "yyyy-mm-dd",
                onClose: context.handleDateChange
            });
            var elemsTime = document.querySelectorAll('.timepicker');
            M.Timepicker.init(elemsTime, {
                onCloseEnd: context.handleTimeChange
            });
        });
        M.AutoInit();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="my-card-appt">
                    <div className="card auth-card-appt input-field">
                        <h4 className="font">Book Appointment</h4>
                        <div className="input-field">
                            <input type="text" value={this.state.name} placeholder="Booking For" onChange={this.handleNameChange} />
                        </div>
                        <div className="input-field">
                            <input type="text" ref={this.date} className="datepicker"
                                onChange={this.handleDateChange}
                                placeholder="Chose Date" />
                        </div>
                        <div className="input-field">
                            <input type="text" ref={this.time} className="timepicker"
                                onChange={this.handleTimeChange}
                                placeholder="Chose Time" />
                        </div>

                        <div className="input-field col s12">
                            <select value={this.state.service} onChange={this.handleServiceChange}>
                                <option value="" disabled selected>Choose Service</option>
                                <option className="selectOption" value="Manicure">Manicure</option>
                                <option value="Pedicure">Pedicure</option>
                                <option value="Threading">Threading</option>
                                <option value="Head massage">Head Massage</option>
                                <option value="Hand waxing">Hand Waxing</option>
                                <option value="Leg Waxing">Leg waxing</option>
                                <option value="Full Body Waxing">Full Body Waxing</option>
                                <option value="Hair Cut">Hair Cut</option>
                                <option value="Hair Colour">Hair Colour</option>
                                <option value="Hair Style">Hair Style</option>
                                <option value="Hair Spa">Hair Spa</option>
                                <option value="Keratin">Keratin</option>
                                <option value="Smoothning">Smoothning</option>
                                <option value="Facial">Facial</option>
                                <option value="Clean U">Clean Up</option>
                                <option value="Blech">Blech</option>
                                <option value="De Tanning">De Tanning</option>
                                <option value="Make Up">Make Up</option>
                                <option value="Styling">Styling</option>
                                <option value="Bridal Makeup">Bridal Makeup</option>
                                <option value="Party Makeup">Party Makeup</option>
                            </select>
                        </div>

                        <div>
                            <button type="submit" value="Submit" style={{ marginTop: "10px" }} className="waves-light btn #f57f17 yellow darken-4" >Book</button>
                        </div>

                    </div>
                </div>
            </form>
        )
    }
}

export default Appointment