import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyName: "",
            occasion: "",
            address: '',
            date: "",
            time: "",
            package: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    companyhandler = (event) => {
        this.setState({
            companyName: event.target.value
        })
    }
    occasionhandler = (event) => {
        this.setState({
            occasion: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    datehandler = (event) => {
        this.setState({
            date: event.target.value
        })
    }
    timehandler = (event) => {
        this.setState({
            time: event.target.value
        })
    }
    packagehandler = (event) => {
        this.setState({
            package: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Reserved Successfully`)
        console.log(this.state);
        this.setState({
            companyName: "",
            occasion: "",
            address: '',
            date: "",
            time: "",
            package: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>RESERVATION</h1>
                    <select onChange={this.companyhandler} defaultValue="Company Name">
                        <option defaultValue>SELECT COMPANY</option>
                        <option value="Rain">Rain's Photo and Video Service</option>
                        <option value="Zhel">Zhel's Photo and Video Service</option>
                        <option value="Joshua">Joshua's Photo and Video Service</option>
                        <option value="Auriel">Auriel's Photo and Video Service</option>
                    </select><br />
                    <input type="text" value={this.state.occasion} onChange={this.occasionhandler} placeholder="OCCASION" /><br />
                    <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="ADDRESS" /><br />
                    <input type="date" value={this.state.date} onChange={this.datehandler} placeholder="" /><br />
                    <input type="time" value={this.state.time} onChange={this.timehandler} placeholder="" /><br />
                    <select onChange={this.packagehandler} defaultValue="SELECT PACKAGE">
                        <option defaultValue>SELECT PACKAGE</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="debut">Debut</option>
                        <option value="christening">Christening</option>
                        <option value="event">Event</option>
                        <option value="other">Other</option>
                    </select><br />
                    <input type="submit" value="RESERVE" />
                </form>

            </div>
            
        )
    }
}

export default Form
