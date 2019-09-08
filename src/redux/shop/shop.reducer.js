import SHOP_DATA from "./shop.data";

const initialState = {
    collections: SHOP_DATA
}

const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    // case typeName:
    //     return { ...state, ...payload }

    default:
        return state
    }
}

export default shopReducer;