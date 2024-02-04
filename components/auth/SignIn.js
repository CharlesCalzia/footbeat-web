import React, { useState } from "react";
import { useAuth } from "../../src/auth";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function SignIn() {
    const { signin } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        try {
            await signin(email, password);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container maxWidth="xs">
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                className="bg-primary"
                onClick={handleSubmit}
            >
                Sign In
            </Button>
        </Container>
    );
}
