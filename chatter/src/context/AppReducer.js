export default (state , action) =>{
    switch(action.type) {
        case "ADD_MESSAGES":
            return{
                ...state,
               message:action.payload
            }
        default:
            return state;
    }
}