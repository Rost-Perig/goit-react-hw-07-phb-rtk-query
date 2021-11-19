import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import { contactsApi } from 'redux/contacts/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware),
});

export default store;