import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authApi from "../services/authApi";
import userApi from "../services/userApi";
import addressApi from "../services/addressApi";
import propertyApi from "../services/propertyApi";
import propertyTypeApi from "../services/propertyTypeApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [propertyTypeApi.reducerPath]: propertyTypeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      addressApi.middleware,
      propertyApi.middleware,
      propertyTypeApi.middleware
    ),
});

setupListeners(store.dispatch);
