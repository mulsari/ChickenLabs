import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChickenData } from "../../types/ChickenData";

type ComparisonState = {
    comparisonData: ChickenData[];
    comparisonActive: boolean;
    maxValues: {
        protein: number | null;
    };
    minValues: {
        calories: number | null;
        fat: number | null;
        carbohydrate: number | null;
        sugars: number | null;
        sodium: number | null;
        cholesterol: number | null;
        saturated_fat: number | null;
    };
};

const initialState: ComparisonState = {
    comparisonData: [],
    comparisonActive: false,
    maxValues: {
        protein: null,
    },
    minValues: {
        calories: null,
        fat: null,
        carbohydrate: null,
        sugars: null,
        sodium: null,
        cholesterol: null,
        saturated_fat: null,
    },
};

const calculateMaxValues = (data: ChickenData[]) => {
    const mathMax = (data: ChickenData[], property: keyof ChickenData) => {
        return data.length > 1 ? Math.max(...data.map((i) => i[property] as number)) : null;
    };
    return {
        protein: mathMax(data, "protein"),
    };
};
const calculateMinValues = (data: ChickenData[]) => {
    const mathMin = (data: ChickenData[], property: keyof ChickenData) => {
        return data.length > 1 ? Math.min(...data.map((i) => i[property] as number)) : null;
    };

    return {
        calories: mathMin(data, "calories"),
        fat: mathMin(data, "fat"),
        carbohydrate: mathMin(data, "carbohydrate"),
        sugars: mathMin(data, "sugars"),
        sodium: mathMin(data, "sodium"),
        cholesterol: mathMin(data, "cholesterol"),
        saturated_fat: mathMin(data, "saturated_fat"),
    };
};

const comparisonSlice = createSlice({
    name: "comparison",
    initialState,
    reducers: {
        setComparisonData: (state, { payload }: PayloadAction<ChickenData>) => {
            const isComparison = state.comparisonData.find((item) => item.id === payload.id);

            if (isComparison) {
                state.comparisonData = state.comparisonData.filter((item) => item.id !== payload.id);
            } else {
                if (state.comparisonData.length >= 20) {
                    alert("최대 20개까지만 선택할 수 있습니다.");
                    return;
                }
                state.comparisonData.push(payload);
            }

            state.maxValues = calculateMaxValues(state.comparisonData);
            state.minValues = calculateMinValues(state.comparisonData);
            state.comparisonActive = state.comparisonData.length > 0;
        },
        setComparisonActive: (state, action: PayloadAction<boolean>) => {
            state.comparisonActive = action.payload;
        },
        clearComparisonData: (state) => {
            state.comparisonData = [];
            state.comparisonActive = false;
            state.maxValues = initialState.maxValues;
            state.minValues = initialState.minValues;
        },
    },
});

export const { setComparisonData, setComparisonActive, clearComparisonData } = comparisonSlice.actions;
export const comparisonReducer = comparisonSlice.reducer;
