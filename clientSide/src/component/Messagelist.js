import React from 'react';
import Proptypes from 'prop-types';
import Message from './Message';
import './auth.css'

class Messagelist extends React.Component {
    static propTypes = {
        message: PropTypes.arrayOf(PropTypes.object)
    }
    static defaultProps = {
        message: [],
    }
    
    render() {
        return(
            <div className="Messagelist">
                <form onSubmit={this.handleSubmit}>
                    <div><span>User 1:</span></div>
                </form>
            </div>
        )
    }
}

export default Messagelist;  