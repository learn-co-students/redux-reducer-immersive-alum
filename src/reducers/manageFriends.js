export function manageFriends(
  state = {
    friends: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const keepTheseFriends = state.friends.filter(
        (friend) => friend.id !== action.id
      );
      return { ...state, friends: [keepTheseFriends].flat(1) };
  }

  return state;
}
