import React, { useState } from "react";
import { useAuth } from "../../src/auth";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import StatusInfo from "../utils/StatusInfo";

export default function SignUp() {
    const { forgotpassword } = useAuth();
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(0);

    const handleSubmit = async (e) => {
        try {
            await forgotpassword(email);
            await setEmailSent(1);
        } catch (error) {
            console.log(error);
            setEmailSent(2);
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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                className="bg-primary"
            >
                Forgot Password
            </Button>
            <StatusInfo
                status={emailSent}
                success_message="Sent password reset email"
                error_message="Failed to send forgot password email"
            />
        </Container>
    );
}
