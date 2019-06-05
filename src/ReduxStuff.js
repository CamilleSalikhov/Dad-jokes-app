import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk'

//types
const FETCH_JOKE = 'FETCH_JOKE';

//action
const fetchJoke = () => dispatch => {
    fetch('https://icanhazdadjoke.com/',
    {method:'GET',
  headers: {
    Accept: 'application/json'
  }
})
.then(res => res.json())
.then(res => dispatch({
    type:FETCH_JOKE,
      currentJoke: res.joke
    }))
}

//reducer
const initialState = {
    joke:'Click below for a joke!'
}

const jokeReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_JOKE:
            return {
                joke: action.currentJoke
            }
            default : return initialState;
    }
}






//create store
const rootReducer = combineReducers(
    {jokes: jokeReducer}
)
const middleware = [thunk]
const store = createStore(rootReducer,{}, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export {store}
export {fetchJoke}