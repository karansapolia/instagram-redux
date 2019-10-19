function posts(state = [], action) {
  console.log('Posts reducer RAN');
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const index = action.index;
      return [
        ...state.slice(0, index),
        { ...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
  console.log(state, action);
  return state;
}

export default posts;
