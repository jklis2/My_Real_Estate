import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authApi from "../services/authApi";
import userApi from "../services/userApi";
import addressApi from "../services/addressApi";
import propertyApi from "../services/propertyApi";
import propertyTypeApi from "../services/propertyTypeApi";
import featuresApi from "../services/featuresApi";
import geoApi from "../services/geoApi";
import avatarApi from "../services/avatarApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [propertyTypeApi.reducerPath]: propertyTypeApi.reducer,
    [featuresApi.reducerPath]: featuresApi.reducer,
    [geoApi.reducerPath]: geoApi.reducer,
    [avatarApi.reducerPath]: avatarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      avatarApi.middleware,
      authApi.middleware,
      userApi.middleware,
      addressApi.middleware,
      propertyApi.middleware,
      propertyTypeApi.middleware,
      featuresApi.middleware,
      geoApi.middleware
    ),
});

setupListeners(store.dispatch);
