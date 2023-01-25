import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    getData: (state, action) => {
      state.items = action.payload
    },
  },
})
export const { getData } = basketSlice.actions
export default basketSlice.reducer
