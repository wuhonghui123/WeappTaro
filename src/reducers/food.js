const INITIAL_STATE = {
    foodList: []
}

export default function food(previousState = INITIAL_STATE, action) {
    let {type,foodList}=action;
    switch (type) {
        case 'searchFood':
            // console.log("reducer: ",foodList.data.data);
            return {
                ...previousState,
                foodList: foodList.data.data
            };
        default:
            return previousState;
    }
}
