import React from 'react';
import { render } from 'react-dom';
import { Action, createStore, Reducer } from '@reduxjs/toolkit'


// REDUX CODE
///////////////////////////////////

const increment = () => {
  return { type: 'increment' }
}

const decrement = () => {
  return { type: 'decrement' }
}

const initialState = 0;
const counterReducer: Reducer<number> = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// REACT CODE
///////////////////////////////////

const renderApp = () =>
  render(
    <CounterApp
      state={store.getState()}
    />,
    document.getElementById('root')
  )

renderApp();


// Render once with the initial state.
// Subscribe render to changes to the store's state.

function CounterApp(props: {state: number}) {
  const state = props.state;
  const onIncrementButtonClicked = () => {
    // Dispatch an 'increment' action.
    store.dispatch(increment())
  }

  const onDecrementButtonClicked = () => {
    // Dispatch an 'decrement' action.
    store.dispatch(decrement());
  }

  return (
    <div id= 'counter-app' >
      <h1>{ state } </h1>
      < button onClick = { onIncrementButtonClicked } > +</button>
        < button onClick = { onDecrementButtonClicked } > -</button>
    </div>
  )
}

store.subscribe(renderApp);
