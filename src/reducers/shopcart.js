
const INITIAL_STATE = {
    shopCartList: []
}

export default function shopCart(previousState = INITIAL_STATE, action) {
    let {type,shopCartList}=action;
    switch (type) {
        case 'searchShopCart':
            return {
                ...previousState,
                shopCartList: shopCartList.data.data
            };
        case 'deleteShopCart':

            return {
                ...previousState,
            };
        default:
            return previousState;
    }
}
