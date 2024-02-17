import Service from "./Service.ts";
import {
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostsStart,
} from "./posts.slice.ts";
import { AppDispatch } from "./store.ts";

const fetchPosts = (request: string) => async (dispatch: AppDispatch) => {
  dispatch(fetchPostsStart());

  try {
    const data = await Service.getPosts(request);
    dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

export default fetchPosts;
