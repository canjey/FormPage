import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {}
};

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = {...state.formData, ...action.payload};
    },

  },
});

export const {  
    updateFormData
} = counterSlice.actions;


export default counterSlice.reducer;
