import ActionType from './globalActionType'

const baruStateNih = {
    totalOrderNih: 0
}
  
//reducer
const rootReducer = (abistate = baruStateNih, abiaction) => {
    switch(abiaction.type){
        case ActionType.PLUS_ORDER_GLB:
        return {
            ...abistate,
            totalOrderNih: abistate.totalOrderNih + 1
        }
        
        case ActionType.MINUS_ORDER_GLB:
        if(abistate.totalOrderNih > 0) {
            return {
            ...abistate,
            totalOrderNih: abistate.totalOrderNih - 1
            }
        } else {
            return abistate
        }
        
        default:
        return abistate
    }
}

export default rootReducer