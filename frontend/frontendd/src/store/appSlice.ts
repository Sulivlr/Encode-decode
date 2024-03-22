import { createSlice } from '@reduxjs/toolkit';
import { encodeMessage, decodeMessage } from './appThunks.ts';

interface AppState {
    encodedMessage: string;
    decodedMessage: string;
    error: string | null;
}

const initialState: AppState = {
    encodedMessage: '',
    decodedMessage: '',
    error: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(encodeMessage.fulfilled, (state, action) => {
            state.encodedMessage = action.payload.encoded;
            state.error = null;
        });
        builder.addCase(decodeMessage.fulfilled, (state, action) => {
            state.decodedMessage = action.payload.decoded;
            state.error = null;
        });
        builder.addCase(encodeMessage.rejected, (state, action) => {
            state.error = action.error.message || 'Error message';
        });
        builder.addCase(decodeMessage.rejected, (state, action) => {
            state.error = action.error.message || 'Err message';
        });
    },
});

export default appSlice.reducer;
