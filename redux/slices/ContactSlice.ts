import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ContactState = {
  modalIsOpen: boolean;
};

const initialState: ContactState = {
  modalIsOpen: false
};

const contactSlice = createSlice({
  name: 'contactModal',
  initialState,
  reducers: {
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { setIsModalOpen } = contactSlice.actions;
export default contactSlice.reducer;