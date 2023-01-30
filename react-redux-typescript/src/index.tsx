import React from 'react';
import { render } from 'react-dom';
import { Action, createStore, PayloadAction, Reducer } from '@reduxjs/toolkit'


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

const initialState: { allRecipes: Recipe[], favoriteRecipes: Recipe[], searchTerm: string } = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ''
};

const setSearchTerm = (term: string) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  };
}

const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  };
};

const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  };
};

const addRecipe = (recipe: Recipe) => {
  return {
    type: 'favoriteRecipes/addRecipe',
    payload: recipe
  };
};

const removeRecipe = (recipe: Recipe) => {
  return {
    type: 'favoriteRecipes/removeRecipe',
    payload: recipe
  };
};

/* Complete this reducer */
const recipesReducer = (state = initialState, action: PayloadAction<Recipe>) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return {
        ...state,
        allRecipes: action.payload
      }
    case 'searchTerm/clearSearchTerm':
      return {
        ...state,
        searchTerm: ''
      }

    case 'searchTerm/setSearchTerm':
      return {
        ...state,
        searchTerm: action.payload
      } // fix me!

    case 'favoriteRecipes/addRecipe':
      return {
        ...state,
        favoriteRecipes: [...state.favoriteRecipes, action.payload]
      }

    case 'favoriteRecipes/removeRecipe':
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter((recipe: Recipe) => recipe.id !== action.payload.id)
      }

    default:
      return state;
  }
};

const store = createStore(recipesReducer);

/* DO NOT DELETE */
printTests();
function printTests() {
  // @ts-ignore
  store.dispatch(loadData());
  console.log('Initial State after loading data');
  console.log(store.getState());
  console.log();
  store.dispatch(addRecipe(allRecipesData[0]));
  store.dispatch(addRecipe(allRecipesData[1]));
    // @ts-ignore
  store.dispatch(setSearchTerm('cheese'));
  console.log("After favoriting Biscuits and Bulgogi and setting the search term to 'cheese'")
  console.log(store.getState());
  console.log();
  store.dispatch(removeRecipe(allRecipesData[1]));
    // @ts-ignore
  store.dispatch(clearSearchTerm());
  console.log("After un-favoriting Bulgogi and clearing the search term:")
  console.log(store.getState());
}
