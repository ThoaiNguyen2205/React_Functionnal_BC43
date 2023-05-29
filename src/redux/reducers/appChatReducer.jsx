import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrComment: [
    { name: "Huy pro", content: "Mình code giỏi quá" },
    { name: "Huy vip", content: "Huy sẽ đánh sập page cybersoft" },
  ],
  userComment: {
    name: "",
    content: "",
  },
};

const appChatReducer = createSlice({
  name: "appChatReducer",
  initialState,
  reducers: {
    addCommentAction: (state, action) => {
      //Lấy dữ liệu action từ payload
      const userComment = { ...action.payload };
      state.arrComment.push(userComment);
    },
    updateUserComment: (state, action) => {
      //Lấy id và value từ action payload
      const { id, value } = action.payload;
      state.userComment[id] = value;
      console.log(action);
    },
  },
});

export const { addCommentAction, updateUserComment } = appChatReducer.actions;

export default appChatReducer.reducer;
