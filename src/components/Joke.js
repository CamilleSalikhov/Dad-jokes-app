import React, { Component } from 'react'

export default class Joke extends Component {
    render() {
        return (
            <div style={jokeStyle}>
                {this.props.currentJoke}
            </div>
        )
    }
}

const jokeStyle = {
    alignSelf:'center',
    height:'300px',
    width:'300px',
    textAlign: 'center',
    backgroundColor:'lightGrey',
    borderStyle: 'solid',
    borderColor: 'grey'

}