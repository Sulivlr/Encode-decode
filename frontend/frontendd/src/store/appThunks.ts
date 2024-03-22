import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:8000';

export const encodeMessage = createAsyncThunk(
    'encode/message',
    async ({ password, message }: { password: string; message: string }) => {
        const response = await axios.post(`${backendURL}/encode`, { password, message });
        return response.data;
    }
);

export const decodeMessage = createAsyncThunk(
    'decode/message',
    async ({ password, message }: { password: string; message: string }) => {
        const response = await axios.post(`${backendURL}/decode`, { password, message });
        return response.data;
    }
);
