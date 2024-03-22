import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks.ts';
import { encodeMessage, decodeMessage } from './store/appThunks.ts';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const { encodedMessage, decodedMessage, error } = useAppSelector(state => state.app);
    const [password, setPassword] = useState('');
    const [inputText, setInputText] = useState('');

    const handleEncode = async () => {
        if (!password) {
            return;
        }
        dispatch(encodeMessage({ password, message: inputText }));
    };

    const handleDecode = async () => {
        if (!password || !inputText) {
            return;
        }
        dispatch(decodeMessage({ password, message: inputText }));
    };

    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    Vigenere Cipher
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={4}
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button fullWidth variant="contained" onClick={handleEncode}>
                            Encode
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button fullWidth variant="contained" onClick={handleDecode}>
                            Decode
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Encoded/Decoded Text"
                            multiline
                            rows={4}
                            value={encodedMessage || decodedMessage}
                            disabled
                        />
                    </Grid>
                    {error && (
                        <Grid item xs={12}>
                            <Typography color="error" align="center">
                                {error}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Container>
    );
};

export default App;
