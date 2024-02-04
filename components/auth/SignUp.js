import { useState } from "react";
import React, { useAuth } from "../../src/auth";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import StatusInfo from "../utils/StatusInfo";
import Router from "next/router";

export default function SignUp() {
    const { signup } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signedUp, setSignedUp] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!validateEmail(email)) {
                setSignedUp(2);
                return;
            }
            await signup(email, password);
            await setSignedUp(1);
            useEffect(() => {
                Router.push("/settings");
            }, []);
        } catch (error) {
            setSignedUp(2);
            console.log(error);
        }
    };

    function validateEmail(email){
        return String(email).match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

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
                Sign up
            </Button>
            <StatusInfo
                status={signedUp}
                success_message="Signed up successfully"
                error_message="Failed to sign up. Please try again."
            />
        </Container>
    );
}
