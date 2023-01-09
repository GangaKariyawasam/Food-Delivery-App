import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState: {carttIsVisible: false},

    reducers:{
        toggle(state){
            state.carttIsVisible = !state.carttIsVisible
        }
    }
   
})

export const cartActions = cartUiSlice.actions;
export default cartUiSlice; 


