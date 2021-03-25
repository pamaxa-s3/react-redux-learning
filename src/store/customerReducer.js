const initialState = {
   customer: []
}

export const customerReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_CUSTOMER':
         return {
            ...state, customer: state.customer + action.payload
         }
         case 'SUB_CUSTOMER':
            return {
               ...state, customer: state.customer - action.payload
            }

            default:
               return state
   }
}