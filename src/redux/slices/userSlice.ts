import { TUser } from "@/types/user.type";
import { createSlice } from "@reduxjs/toolkit";

type TUserState = {
  user: TUser | null;
};

const initialState: TUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log(state);
      state.user = action.payload;
      // console.log(state);
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
