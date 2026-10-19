import { configureStore } from "@reduxjs/toolkit";
import languageSlice from './slices/languageSlice';
import contactSlice from './slices/ContactSlice'

export const store = configureStore({
  reducer: {
    language: languageSlice,
    contactModal: contactSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;