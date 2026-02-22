import { createSlice } from "@reduxjs/toolkit";
import { clear } from "@testing-library/user-event/dist/clear";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: [],
    movieResults: [],
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    setSuggestions: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearSuggestions: (state) => {
      state.movieNames = [];
      state.movieResults = [];
    },
  },
});

export const { toggleGPTSearch, setSuggestions, clearSuggestions } =
  gptSlice.actions;
export default gptSlice.reducer;
