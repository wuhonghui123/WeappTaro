const INITIAL_STATE = {
    orderFoodList: []
}

export default function shopCart(previousState = INITIAL_STATE, action) {
    let {type,orderFoodList}=action;
    switch (type) {
        case 'AddOrderFoodList':
            return {
                ...previousState,
                orderFoodList: orderFoodList
            };
        default:
            return previousState;
    }
}