import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  lastname: null,
  email: null,
};

export const userLogin = createAction("USER_LOGIN");
export const userLogout = createAction("USER_LOGOUT");

const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) =>
    (state = {
      name: action.payload.name,
      lastname: action.payload.lastname,
      email: action.payload.email,
    }),
  [userLogout]: (state, action)=> state = {}
});

export default userReducer;
