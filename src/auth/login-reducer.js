export default function authReducer(state, action) {
  switch (action.type) {
    case 'login': {
      return {
        ...state,
        error: '',
        loading: true,
      };
    }
    case 'login success': {
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    }
    case 'signup success': {
      return {
        ...state,
        signedup: true,
        loading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: action.payload,
        authenticated: false,
        loading: false,
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
