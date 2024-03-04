import allUserSlice from "./allUserSlice";

const rootReducer = () => {
    return {
        allUser: allUserSlice,
    }
}

export default rootReducer;