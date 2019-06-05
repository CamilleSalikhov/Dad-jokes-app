import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchJoke} from '../ReduxStuff';
import PropTypes from 'prop-types';

class ControlPanel extends Component {
    
    onClick = (e) => {
        e.preventDefault();
        this.props.fetchJoke()
    }

    render() {
        return (
            <div>
                <button type='submit' onClick={this.onClick}>Click me!</button>
            </div>
        )
    }
}

ControlPanel.propTypes = {
    fetchJoke: PropTypes.func.isRequired
}

export default connect(null,{fetchJoke})(ControlPanel)