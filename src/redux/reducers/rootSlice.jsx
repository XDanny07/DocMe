import { createSlice } from "@reduxjs/toolkit";

export const rootReducer = createSlice({
  name: "root",
  initialState: {
    loading: true,
    userInfo: {},
    isDark: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setDarkTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { setLoading, setUserInfo, setDarkTheme } = rootReducer.actions;
export default rootReducer.reducer;
