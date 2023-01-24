type StateAction = {
  type: string,
  payload: string
};

const reducer = (state = initialState, action: StateAction) => {
  switch (action.type) {
    case 'songs/addSong': {
      return [...state, action.payload]
    }
    case 'songs/removeSong': {
      return state.filter(song => song !== action.payload)
    }

    default: {
      return state;
    }
  }

}

const initialState = ['Take Five', 'Claire de Lune', 'Respect'];
const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
};
const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
};
const removeAll = {
  type: 'songs/removeAll'
};

const globalSong = 'We are the World';

const playlistReducer = (state: string[] = [], action: StateAction) => {
  switch (action.type) {
    case 'songs/addGlobalSong': {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}

const state = ['Take Five', 'Claire de Lune', 'Respect'];
const addAction = { type: 'songs/addGlobalSong', payload: 'We are the World' };
const newState = playlistReducer(state, addAction);

const removeItemAtIndex = (list: string[], index: number) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1, list.length)
  ]
};

console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));
