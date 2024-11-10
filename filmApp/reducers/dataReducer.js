export const CHARGER_FILMS = 'CHARGER_FILMS'

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARGER_FILMS:
      return {
        ...state,
        films: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default dataReducer

