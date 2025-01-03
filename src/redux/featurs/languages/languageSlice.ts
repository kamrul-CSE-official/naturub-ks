import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../../../types/index';



interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: Language.English, 
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
