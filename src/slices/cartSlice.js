import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    cartTotal:(state, action)=>{
        console.log(state);
        console.log(action);
        
    }
  }
})

// Action creators are generated for each case reducer function
export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer