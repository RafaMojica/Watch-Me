import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = "";

export const dataSearch = createAction("SEARCH");

const searchReducer = createReducer(initialState, {
  [dataSearch]: (state, action) => state = action.payload
});

export default searchReducer;

