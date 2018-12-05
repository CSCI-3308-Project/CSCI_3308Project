import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './css/message.css'

class Message extends React.Component {
    //Messagelist
    constructor(props) {
        super(props);
        this.state = {
            message: [
            { body: "Connecting..." },
            { user: "You", body: "Hello!", me: true },
            { user: "Them", body: "Hey there!"  },
            ],
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    

    validateForm() {
        return this.state.message.length > 0
    };

    handleChange = event => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.onMessageSend(this.input.value)
        this.setState({
            message: ''
        })
    }

    render() {
        return(
            <div className="Message">
                <form>
                    <FormGroup className="Messagelist">
                        {this.props.message.map((message, i) => (
                        <div className="user">
                            {message.user && (
                            <span>{message.user}:</span> )}
                            {message.body}
                        </div> ))}
                    </FormGroup>
                    <FormGroup onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            value={this.state.message} 
                            placeholder="Send Message" 
                            type="text">
                        </input>
                        <button>
                            Send
                        </button>
                    </FormGroup>
                </form>
            </div>
        )
    }
}

export default Message;  