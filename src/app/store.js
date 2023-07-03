import { configureStore } from "@reduxjs/toolkit";
import { infoApi } from "../services/infoApi";

export default configureStore({
  reducer: {
    [infoApi.reducerPath]: infoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(infoApi.middleware),
});
