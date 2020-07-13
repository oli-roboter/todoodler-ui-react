export default function authReducer(state, action) {
  switch (action.type) {
    case 'login': {
      return {
        ...state,
        error: '',
        authenticating: true,
      };
    }
    case 'success': {
      return {
        ...state,
        authenticated: true,
        authenticating: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: action.payload,
        authenticated: false,
        authenticating: false,
      };
    }
    case 'logOut': {
      return {
        ...state,
        authenticated: false,
      };
    }
    default:
      return state;
  }
}