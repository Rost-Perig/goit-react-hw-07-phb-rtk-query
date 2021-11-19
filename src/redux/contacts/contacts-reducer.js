
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {search} from './contacts-actions';

const filter = createReducer('', {
    [search]: (_, { payload }) => payload
});

export default combineReducers({
    filter,
});


//=====всё это не надо с RTK Query=====//

// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';

// // import { addContact, fetchContacts, delContact } from './contacts-operations'; // c createAsyncThunk

// import {
//     search,
//     //===== без createAsyncThunk =====//
//     // addContactRequest,
//     // addContactSuccess,
//     // addContactError,
//     // fetchContactsRequest,
//     // fetchContactsSuccess,
//     // fetchContactsError,
//     // delContactRequest,
//     // delContactSuccess,
//     // delContactError
// } from './contacts-actions';

// // const items = createReducer([], {
// //       //===== c createAsyncThunk =====//
// //     [addContact.fulfilled]: (state, action) => [...state, action.payload], //(state, { payload }) => [...state, payload],
// //     [fetchContacts.fulfilled]: (_, action) => action.payload, // (_, { payload }) => payload,
// //     [delContact.fulfilled]: (state, action) => state.filter(({ id }) => id.toString() !== action.payload.toString()), //(state, { payload }) => state.filter(({ id }) => id.toString() !== payload.toString()),

// //          //===== без createAsyncThunk =====//
// //     // [addContactSuccess]: (state, action) => [...state, action.payload],
// //     // [fetchContactsSuccess]: (_, action) => action.payload, 
// //     // [delContactSuccess]: (state, action) => state.filter(({ id }) => id.toString() !== action.payload.toString())
    
// // });

// const filter = createReducer('', {
//     [search]: (_, { payload }) => payload
// });

// // const loadingSpinner = createReducer(false, {
// //     //===== c createAsyncThunk =====//
// //   [addContact.pending]: () => true,
// //   [addContact.fulfilled]: () => false,
// //   [addContact.rejected]: () => false,
    
// //   [fetchContacts.pending]: () => true,
// //   [fetchContacts.fulfilled]: () => false,
// //   [fetchContacts.rejected]: () => false,
  
// //   [delContact.pending]: () => true,
// //   [delContact.fulfilled]: () => false,
// //   [delContact.rejected]: () => false,

// //         //===== без createAsyncThunk =====//
// // //   [fetchContactsRequest]: () => true,    
// // //   [fetchContactsSuccess]: () => false,    
// // //   [fetchContactsError]: () => false,    
// // //   [addContactRequest]: () => true,    
// // //   [addContactSuccess]: () => false,    
// // //   [addContactError]: () => false,    
// // //   [delContactRequest]: () => true,    
// // //   [delContactSuccess]: () => false,    
// // //   [delContactError]: () => false,    
// // });

// export default combineReducers({
//     // items,
//     filter,
//     // loadingSpinner
// });



