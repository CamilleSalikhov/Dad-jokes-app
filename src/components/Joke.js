import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class Joke extends Component {
    render() {
        return (
            <div style={jokeStyle}>
                {this.props.currentJoke}
            </div>
        )
    }
}

Joke.propTypes = {
    currentJoke: PropTypes.string.isRequired
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
const mapStateToProps = (state) => ({
    currentJoke: state.jokes.joke
});

export default connect(mapStateToProps,null)(Joke)
