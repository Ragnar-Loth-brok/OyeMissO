import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'app',
  initialState: {
    signup: {},
    siteSetup: {},
    dpType: {},
  },
  reducers: {
    setSignupData: (state, action) => {
      state.signup = action.payload;
    },
    setDpType: (state, action) => {
      state.dpType = action.payload;
    },
    setSiteSetup: (state, action) => {
      state.siteSetup = action.payload;
    },
    verification: (state, action) => {
      state.siteSetup = action.payload;
    },
  },
});

export const {setSignupData, setDpType, setSiteSetup} = slice.actions;
export default slice.reducer;

// export {} from slice.actions
