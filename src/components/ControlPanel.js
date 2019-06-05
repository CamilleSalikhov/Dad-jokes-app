import React, { Component } from 'react'

export default class ControlPanel extends Component {
    


    render() {
        return (
            <div>
                <button type='submit' onClick={this.props.fetchJoke}>Click me!</button>
            </div>
        )
    }
}
