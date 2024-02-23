import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./AdoptedPetSlice";
import { petApi } from "./petApiService";
import searchParams from "./searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
