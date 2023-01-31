import React from 'react';
import { render } from 'react-dom';
import { Action, createStore, PayloadAction, Reducer, combineReducers } from '@reduxjs/toolkit'


// REDUX CODE
///////////////////////////////////
/*
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


function CounterApp(props: {state: number}) {
  const state = props.state;
  const onIncrementButtonClicked = () => {
    store.dispatch(increment())
  }

  const onDecrementButtonClicked = () => {
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
*/
/// Recipes
type Recipe = {
    id: number
    name: string;
    img: string
}

const allRecipesData = [
  { id: 0, name: 'Biscuits', img: 'img/biscuits.jpg' },
  { id: 1, name: 'Bulgogi', img: 'img/bulgogi.jpg' },
  { id: 2, name: 'Calamari', img: 'img/calamari.jpg' },
  { id: 3, name: 'Ceviche', img: 'img/ceviche.jpg' },
];


// Action Creators
////////////////////////////////////////

const addRecipe = (recipe: Recipe) => {
  return {
    type: 'favoriteRecipes/addRecipe',
    payload: recipe
  };
}

const removeRecipe = (recipe: Recipe) => {
  return {
    type: 'favoriteRecipes/removeRecipe',
    payload: recipe
  };
}

const setSearchTerm = (term: string) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  };
}

const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  };
}

// Reducers
////////////////////////////////////////

const initialAllRecipes: Recipe[] = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action: PayloadAction<Recipe>) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return action.payload
    default:
      return allRecipes;
  }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action: PayloadAction<Recipe>) => {
  switch (action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload
    case 'searchTerm/clearSearchTerm':
      return ''
    default:
      return searchTerm;
  }
}

const initialFavoriteRecipes: Recipe[] = [];
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action: PayloadAction<Recipe>) => {
  switch (action.type) {
    case 'favoriteRecipes/addRecipe':
      return [...favoriteRecipes, action.payload]
    case 'favoriteRecipes/removeRecipe':
      return favoriteRecipes.filter(recipe => {
        return recipe.id !== action.payload.id
      });
    default:
      return favoriteRecipes;
  }
}

// Create your `rootReducer` here using combineReducers().
const reducers = {
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer
}
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer)
