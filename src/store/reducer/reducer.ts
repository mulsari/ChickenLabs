import { chickenReducer } from "../slices/chickenSlice";
import { comparisonReducer } from "../slices/comparisonSlice";

const reducer = {
    comparison: comparisonReducer,
    chicken: chickenReducer,
};

export default reducer;
