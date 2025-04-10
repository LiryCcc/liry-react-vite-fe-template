const initialState = {
  count: 0
};

const exampleReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default exampleReducer;
