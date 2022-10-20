import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Values} from "../type";

const initialState:Values = {
   purchase:0,
   stake:0,
}

export const valuesSlice = createSlice({
   name: 'values',
   initialState,
   reducers: {

      setPurchase: (state, action: PayloadAction<string>) => {
         state.purchase = +action.payload;
      },

      setStake: (state, action: PayloadAction<string>) => {
         state.stake = +action.payload;
      },
   },
})

export const {
   setPurchase,
   setStake,
} = valuesSlice.actions

export default valuesSlice.reducer