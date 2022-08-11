const INITIAL_STATE = {
    commendList: []
}

export default function food(previousState = INITIAL_STATE, action) {
    let {type,commendList}=action;
    switch (type) {
        case 'searchCommend':
            console.log("reducer: ",commendList.data.data);
            return {
                ...previousState,
                foodList: commendList.data.data
            };
        default:
            return previousState;
    }
}
