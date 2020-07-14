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
        user: action.payload,
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
    case 'logout': {
      return {
        ...state,
        authenticated: false,
        user: '',
      };
    }
    default:
      return state;
  }
}
