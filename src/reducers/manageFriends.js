export function manageFriends(state = {friends: []}, action){
	switch (action.type) {
		case "ADD_FRIEND":
			return {friends: [...state.friends, action.friend]}
		case "REMOVE_FRIEND":
			let arr = state.friends.filter(e => {
				if (e.id != action.id) {
					return e;
				}
			})
			return {friends: arr}
		default:
			return state;
	}
}