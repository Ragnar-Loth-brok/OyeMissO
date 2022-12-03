import {configureStore} from '@reduxjs/toolkit';
import api from './middleware/api';
import reducer from './reducer';

export default function () {
  return configureStore({
    reducer,
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api),
  });
}

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
