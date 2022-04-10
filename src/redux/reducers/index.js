const initialState = {
  allCharacters: [],
  character: {},
  characterFav: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload,
      };

      case "GET_CHARACTER":
        return{
          ...state,
          character: action.payload[0],
        }
        case "GET_CHARACTER_FAV":
          return{
            ...state,
            characterFav: [...state.characterFav, action.payload],
          }
          case "DELETE_CHARACTER_FAV":
            const charf = state.characterFav.filter((c)=>{
              return c.char_id !== action.payload;
            });
            return{
              ...state,
              characterFav: charf,
            }
    default:
      return { ...state };
  }
};

export default rootReducer;
