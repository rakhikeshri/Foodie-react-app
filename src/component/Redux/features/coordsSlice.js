import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  latitude: null,
  longitude: null,
  searchedCity:'',
  status: false,
  error: null,
};

export const coordsFetch = createAsyncThunk("city/coordsFetch", async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0283978172435ad5118d34fc15a1afe4`
  );
  return response?.data;
});

const coordsSlice = createSlice({
  name: "coords",
  initialState,
  
  reducers: {
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(coordsFetch.pending, (state) => {
        state.status = true;
      })
      .addCase(coordsFetch.fulfilled, (state, action) => {
        state.status = false;
        state.latitude = action.payload?.coord?.lat;
        state.longitude = action.payload?.coord?.lon;
        state.searchedCity = action.payload?.name;
      })
      .addCase(coordsFetch.rejected, (state) => {
        state.status = false;
        state.error = "Can't fetch the coords";
      });
  },
});

export const { setLongitude, setLatitude } = coordsSlice.actions;
export default coordsSlice.reducer;