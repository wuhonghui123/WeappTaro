const INITIAL_STATE = {
    foodClassList: []
}

export default function foodClass(previousState = INITIAL_STATE, action) {
    let {type,foodClassList}=action;
    switch (type) {
        case 'searchFoodClass':
            // console.log("reducer: ",foodClassList.data.data);
            return {
                ...previousState,
                foodClassList: foodClassList.data.data
            };
        default:
            return previousState;
    }
}
