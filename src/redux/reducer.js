import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites, payload] };

    case REMOVE_FAV:
      const filtered = state.myFavorites.filter((char) => char.id !== payload);
      return {
        ...state,
        myFavorites: filtered,
      };

    default:
      return state ;
  }
};

export default rootReducer;
