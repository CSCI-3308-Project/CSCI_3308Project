import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './css/message.css'

class Message extends React.Component {
    static propTypes = {
        messageSend: PropTypes.func.isRequired,
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
                    <FormGroup onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            value={this.state.message} 
                            placeholder="Send Message" 
                            type="text">
                        </input>
                        <button type="submit">
                            Send
                        </button>
                    </FormGroup>
                </form>
            </div>
        )
    }
}

export default Message;  