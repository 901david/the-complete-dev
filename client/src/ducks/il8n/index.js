import { createSelector, createSlice } from '@reduxjs/toolkit';
import { languages } from '../../shared/languages';

const supportedLocales = new Set(Object.keys(languages));

const {
  name: il8n_REDUCER_KEY,
  actions: { setLocale, setMessages },
  reducer: il8nReducer,
} = createSlice({
  name: 'il8n',
  initialState: {
    locale: 'en-US',
    messages: languages['en-US'],
  },
  reducers: {
    setLocale(state, action) {
      if (!supportedLocales.has(action.payload))
        throw new Error('Unsupported Locale');
      state.locale = action.payload;
      state.messages = languages[action.payload];
    },
  },
});
const state = state => state || {};
const il8nSelector = createSelector(state, _state => _state[il8n_REDUCER_KEY]);

export { setLocale, il8nReducer, il8n_REDUCER_KEY, il8nSelector };
