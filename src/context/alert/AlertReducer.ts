import { AlertStateType } from '../../type';

type AlertActionType = {
    type: string;
    payload: AlertStateType
}

const alertReducer = (state: AlertStateType | null, action: AlertActionType) => {
    switch (action.type) {
        case 'SET_ALERT': 
            return {
                ...state,
                msg: action.payload.msg,
                msgType: action.payload.msgType
            }
        case 'CLEAR': 
            return null;
        default:
            return state;
    }
}

export {alertReducer};