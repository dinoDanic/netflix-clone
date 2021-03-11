export const initialState = {
  topRated: null,
  topRatedFull: null,
  popular: null,
  orginals: null,
  user_login: false,
  user_email: null,
  user_whosWatching: false,
  api_key: "806b77e869cb164b4c4ded05ba02c78a",
  user2: null,
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
    case "USER_EMAIL":
      return {
        ...state,
        user_email: action.user_email,
      };
    case "USER_LOGIN":
      return {
        ...state,
        user_login: action.user_login,
      };
    case "ADD_USER2":
      return {
        ...state,
        user2: action.user2,
      };
    case "USER_WHOSWATCHING":
      return {
        ...state,
        user_whosWatching: action.user_whosWatching,
      };
    default:
      return state;
  }
};

export default reducer;
