import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Reaction } from "./types";

function makeRandomReactions(): Reaction[] {
  const reactions: Reaction[] = [];

  for (let i = 0; i < 101; i++) {
    const reaction = {
      id: i,
      like: Math.floor(Math.random() * 51),
      isLike: false,
      dislike: Math.floor(Math.random() * 51),
      isDislike: false,
    };
    reactions.push(reaction);
  }

  return reactions;
}

const reactionsSlice = createSlice({
  name: "reactions",
  initialState: makeRandomReactions(),
  reducers: {
    handleLike(state, action: PayloadAction<number>) {
      if (!state[action.payload].isLike) {
        state[action.payload].like++;
        state[action.payload].isLike = true;
        if (state[action.payload].isDislike) {
          state[action.payload].dislike--;
          state[action.payload].isDislike = false;
        }
      } else {
        state[action.payload].like--;
        state[action.payload].isLike = false;
      }
    },
    handleDislike(state, action: PayloadAction<number>) {
      if (!state[action.payload].isDislike) {
        state[action.payload].dislike++;
        state[action.payload].isDislike = true;
        if (state[action.payload].isLike) {
          state[action.payload].like--;
          state[action.payload].isLike = false;
        }
      } else {
        state[action.payload].dislike--;
        state[action.payload].isDislike = false;
      }
    },
  },
});

export const { handleLike, handleDislike } = reactionsSlice.actions;
export default reactionsSlice.reducer;
