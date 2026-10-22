import { configureStore } from "@reduxjs/toolkit";
import languageSlice from './slices/languageSlice';
import contactSlice from './slices/ContactSlice'
import navigationSlice from './slices/navigationSlice'

export const store = configureStore({
  reducer: {
    language: languageSlice,
    contactModal: contactSlice,
    navigation: navigationSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;