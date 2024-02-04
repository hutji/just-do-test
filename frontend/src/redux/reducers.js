const initialState = {
    messages: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  