import {createSlice} from '@reduxjs/toolkit';
import chunk from '../assets/chunk';
import reactions from '../assets/avtardata';
import cardData from '../assets/carddata';

const slice = createSlice({
  name: 'app',
  initialState: {
    feeds: [...chunk],
    search: {
      profileData: [...cardData],
      posts: [...chunk],
    },
    reactions: [...reactions],
    dpType: {},
  },
  reducers: {
    setFeeds: (state, action) => {
      state.feeds = action.payload;
    },
  },
});

export const {setFeeds} = slice.actions;
export default slice.reducer;

// export {} from slice.actions
