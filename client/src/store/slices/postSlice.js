import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const postAPI = "http://localhost:4000/api/posts/";
const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
};
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(postAPI);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);
export const getPost = createAsyncThunk(
  "posts/getPost",
  async (postID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(postAPI + postID);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);
export const getPostsByCategory = createAsyncThunk(
  "posts/getPostsByCategory ",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(postAPI + `?category=${args}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getPostsAuthor = createAsyncThunk(
  "posts/getPostsAuthor",
  async (authorId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(postAPI + `artist/${authorId}`);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.isError = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
        state.isError = false;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
export const postsReducer = postsSlice.reducer;
export const postActions = postsSlice.actions;
