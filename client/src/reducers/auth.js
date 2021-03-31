const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };

function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        loading: true,
        user: payload
      };
        case "REGISTER_SUCCESS":
            case "LOGIN_SUCCESS":
                localStorage.setItem('token',payload.token);
              return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: true
              };
        case "AUTH_ERROR":
        case "LOGOUT":
        case "LOGIN_FAIL":
        case "REGISTER_FAIL":
            localStorage.removeItem('token')
            return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null
            };
        default:
            return state;
    }
}

export default authReducer;