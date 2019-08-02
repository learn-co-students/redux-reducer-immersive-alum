export function managePresents(state, action){
    switch (action.type) {
        case 'INCREASE':
          return {numberOfPresents: state.numberOfPresents ++}
        case 'DECREASE':
          return {numberOfPresents: state.numberOfPresents --}
        default:
          return state;
      }
}
