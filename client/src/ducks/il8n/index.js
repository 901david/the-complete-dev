import { createSelector, createSlice } from '@reduxjs/toolkit';

const {
  name: il8n_REDUCER_KEY,
  actions: { setLocale, setMessages },
  reducer: il8nReducer,
} = createSlice({
  name: 'il8n',
  initialState: {
    locale: 'en-US',
    messages: {},
  },
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload;
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
  },
});

const localeSelector = createSelector(state => state[il8n_REDUCER_KEY].locale);

export {
  setLocale,
  setMessages,
  il8nReducer,
  il8n_REDUCER_KEY,
  localeSelector,
};
