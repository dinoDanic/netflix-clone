export const initialState = {
  topRated: null,
  topRatedFull: null,
  popular: null,
  orginals: null,
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
    case "POPULAR":
      return {
        ...state,
        popular: action.popular,
      };
    case "TOP_RATED":
      return {
        ...state,
        topRatedFull: action.topRatedFull,
      };
    case "ORGINALS":
      return {
        ...state,
        orginals: action.orginals,
      };
    default:
      return state;
  }
};

export default reducer;
