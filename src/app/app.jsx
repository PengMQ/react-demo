import { createStore } from 'redux';
import React from 'react';
import {render} from 'react-dom';

const counter = (state = 0, action)=>{
    switch (action.type) {
        case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
        default:
        return state;
    }
};

const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <bgitutton onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const renderApp = ()=>{
 render(<Counter
            value={store.getState()}
            onIncrement={()=>{
             store.dispatch({type: 'INCREMENT'})
            }}
            onDecrement={()=>{
             store.dispatch({type: 'DECREMENT'});
            }}
            />,
            document.getElementById('app'))
}

const store = createStore(counter);
store.subscribe(renderApp);
renderApp();





