export function gamesHasErrored(state = false, action) {
	switch (action.type) {
		case 'GAMES_HAS_ERRORED':
			return action.hasErrored;

			default:
				return state;
	}
}

export function gamesIsLoading(state = false, action) {
	switch (action.type) {
		case 'GAMES_IS_LOADING':
			return action.isLoading;

		default: 
			return state;
	}
}


export function games(state = [], action) {
	switch (action.type) {
		case 'GAMES_GET_DATA_SUCCESS':
			return action.games;

		default:
			return state;
	}
}

//Friends reducer initial state
export const initialFriendState = {
      friends: [
        { "id": 1,
          "name": "maxpower",
          "avatar": "http://www.radfaces.com/images/avatars/little-pete-wrigley.jpg",
          "delete": "function() {console.log(this)}"
        },
        { "id": 2,
          "name": "lisasimpson",
          "avatar": "http://www.radfaces.com/images/avatars/aeon-flux.jpg",
          "delete": "function() {console.log(this)}"
        },
        { "id": 3,
          "name": "HansMoleman",
          "avatar": "http://www.radfaces.com/images/avatars/artie-strongman.jpg",
          "delete": "function() {console.log(this)}"
        },
        { "id": 4,
          "name": "hughJass",
          "avatar": "http://www.radfaces.com/images/avatars/bradley-taylor.jpg",
          "delete": "function() {console.log(this)}"
        },
        { "id": 5,
          "name": "carlCcarlson",
          "avatar": "http://www.radfaces.com/images/avatars/lawrence-cohen.jpg",
          "delete": "function() {console.log(this)}"
        }
      ]
  };

//friends reducer - directly call these with store.dispatch right now
export function friends(state = initialFriendState, action) {
	switch (action.type) {
		case 'ADD_FRIEND':
			let newId = state.friends.length + 1;
			//makes new Id for friend
			return Object.assign({}, state, {
				friends: [...state.friends, {
					id: newId,
					name: action.name,
					avatar: action.avatar
				}]
			})
		case 'DELETE_FRIEND':
			console.log(action.id);
			return Object.assign({}, {
				friends: state.friends.filter(friend => friend.id !== action.id)
				});
		default:
			return state;
	}
}






