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
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
