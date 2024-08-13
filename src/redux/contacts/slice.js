import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import toast from "react-hot-toast";

const pendingState = (state) => {
  state.isLoading = true;
  state.error = false;
};

const rejectedState = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, pendingState)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, rejectedState)
      .addCase(addContact.pending, pendingState)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success("Contact added");
      })
      .addCase(addContact.rejected, rejectedState)
      .addCase(deleteContact.pending, pendingState)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
        toast.success("Contact deleted");
      })
      .addCase(deleteContact.rejected, rejectedState);
  },
});

export const contactsReducer = contactsSlice.reducer;
