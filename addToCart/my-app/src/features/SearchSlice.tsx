import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "search",
    initialState: {
        value: ''
    },
    reducers: {
        search: (state, action) => {
        }
    }
})
export const { search } = SearchSlice.actions
export default SearchSlice.reducer;