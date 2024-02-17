import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts.slice.ts";
import reactionsSlice from "./reactions.slice.ts";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    reactions: reactionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
