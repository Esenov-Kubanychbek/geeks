import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        incriment: (state) => state + 1,
        dicrement: (state) => state - 1,
    }

})
export const { incriment, dicrement} = counterSlice.actions;
export default counterSlice.reducer 