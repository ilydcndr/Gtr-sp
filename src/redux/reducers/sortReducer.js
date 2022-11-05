import * as actionTypes from "../actions/actionTypes"

const sortReducer=(tabdata, action)=>{
    let newState;
    switch (action.type) {
        case actionTypes.SORT_BY_MIN:
            return(newState=state+action.payload);
            case actionTypes.SORT_BY_MAX:
            return(newState=state-action.payload);
            default:
            return state;
    
    }
};

export default sortReducer;