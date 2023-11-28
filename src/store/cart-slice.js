import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", 
    initialState: {cartIsVisible: false}, 
    reducers: {},
});
 

export const uiActions = cartSlice.actions;
export default cartSlice.reducer;