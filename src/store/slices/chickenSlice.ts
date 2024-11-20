import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChickenData } from "../../types/ChickenData";
import { ChickenState } from "../../types/ChickenState";

const initialState: ChickenState = {
  data: [],
  selected: [],
  currentPage: 1,
  filteredResults: [],
  searchResults: [],
  selectedBrands: [], 
};

const chickenSlice = createSlice({
  name: "chicken",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<ChickenData[]>) {
      state.data = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilteredResults(state, action: PayloadAction<ChickenData[]>) {
      state.filteredResults = action.payload;
    },
    setSearchResults(state, action: PayloadAction<ChickenData[]>) {
      state.searchResults = action.payload;
    },
    setSelectedBrands(state, action: PayloadAction<string[]>) {
      state.selectedBrands = action.payload;
    },
  },
});

export const { setData, setCurrentPage, setFilteredResults, setSearchResults, setSelectedBrands } =
  chickenSlice.actions;
export const chickenReducer = chickenSlice.reducer;
