export const SET_CHARACTERS = "SET_CHARACTERS";
export const SET_FAVORITES = "SET_FAVORITES";
export const SET_LOADING = "SET_LOADING";

export const initialState = {
	characters: [],
	favorites: [],
	loading: false,
};
const charactersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CHARACTERS:
			return {
				...state,
				characters: action.payload,
			};
		case SET_FAVORITES:
			return {
				...state,
				favorites: [
					...state.favorites,
					state.characters.find((c) => c.id == action.payload),
				],
				characters: state.characters.filter((c) => c.id !== action.payload),
			};
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};

export default charactersReducer;
