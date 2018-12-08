import React from 'react';
import PropTypes from 'prop-types';
import './css/message.css'

class Messagelist extends React.Component {
    static propTypes = {
        message: PropTypes.arrayOf(PropTypes.object)
    }
    static defaultProps = {
        message: [],
    }

    static propTypes = {
        user: PropTypes.string,
        body: PropTypes.string.isRequired,
        me: PropTypes.bool,
    }

    componentDidUpdate = () => {
        this.node.scrollTOp = this.node.scrollHeight
    }
    
    render() {
        return(
            <div className="Messagelist">
                {this.props.message.map((message, i) => (
                    <div className="user">
                        {this.props.user && (
                        <span>{this.props.user}:</span> )}
                        {this.props.body}
                    </div> ))}
            </div>
        )
    }
}

export default Messagelist;  