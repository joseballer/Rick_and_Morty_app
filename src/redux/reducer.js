import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV:
      const filtered = state.myFavorites.filter(
        (char) => parseInt(char.id) !== parseInt(payload)
      );
      return {
        ...state,
        myFavorites: filtered,
      };
    case FILTER:
      const filterByGender = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === "All" ? state.allCharacters : filterByGender,
      };
    case ORDER:
      const orderById = [...state.allCharacters];

      return {
        ...state,
        myFavorites:
          payload === "A"
            ? orderById.sort((a, b) => a.id - b.id)
            : orderById.sort((a, b) => b.id - a.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
