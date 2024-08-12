import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, username, email, address }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:5000/api/user-update/${id}`,
        { username, email, address },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
