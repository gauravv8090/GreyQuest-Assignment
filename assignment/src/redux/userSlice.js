import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userList : [],
  userDetail: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getuserlist: (state, action) => {

      state.userList = action.payload
    },
    getuserdetail: (state, action) => {
      state.userDetail = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getuserlist, getuserdetail} = userSlice.actions

export default userSlice.reducer;