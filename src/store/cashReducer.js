const initialState = {
   cash: 0
}

const ADD_CASH = 'ADD_CASH'
const SUB_CASH = 'SUB_CASH'

export const cashReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_CASH:
         return {
            ...state, cash: state.cash + action.payload
         }
         case SUB_CASH:
            return {
               ...state, cash: state.cash - action.payload
            }

            default:
               return state
   }
}