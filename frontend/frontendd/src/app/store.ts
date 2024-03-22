import { configureStore } from '@reduxjs/toolkit';
import appSlice from "../store/appSlice.ts";

const store = configureStore({
    reducer: {
        app: appSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
