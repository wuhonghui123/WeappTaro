
const INITIAL_STATE = {
    orderList: []
}

export default function orderList(previousState = INITIAL_STATE, action) {
    let {type,orderList}=action;
    switch (type) {
        case 'searchOrderList':
            return {
                ...previousState,
                orderList:orderList
            };
        default:
            return previousState;
    }

}