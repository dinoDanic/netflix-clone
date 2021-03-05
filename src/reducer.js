export const initialState = {
  topRated: null,
  api_key: "806b77e869cb164b4c4ded05ba02c78a",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "TOP_RATED1":
      return {
        ...state,
        topRated: action.topRated,
      };

    default:
      return state;
  }
};

export default reducer;
