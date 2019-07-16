const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;
