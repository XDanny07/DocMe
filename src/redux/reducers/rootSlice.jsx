import { createSlice } from "@reduxjs/toolkit";

export const rootReducer = createSlice({
  name: "root",
  initialState: {
    loading: true,
    userInfo: {},
    isDark:
      localStorage.getItem("theme") == null
        ? false
        : localStorage.getItem("theme") == "false"
        ? false
        : true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setDarkTheme: (state) => {
      localStorage.setItem("theme", !state.isDark);
      console.log(localStorage.getItem("theme"));
      state.isDark = !state.isDark;
    },
  },
});

export const { setLoading, setUserInfo, setDarkTheme } = rootReducer.actions;
export default rootReducer.reducer;
