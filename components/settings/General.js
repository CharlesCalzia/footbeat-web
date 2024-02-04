import React, { useEffect, useState } from "react";
import { useAuth } from "../../src/auth";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../src/firebase";
import Alert from "@mui/material/Alert";
import LinkWatch from "./Linkwatch";

export default function General() {
    const { user } = useAuth();
    const [name, setName] = useState("");
    const [saved, setSaved] = useState(0);

    const getName = async () => {
        const data = await getDoc(doc(db, "users", user.uid));
        return await data.data().name;
    };
    const changeName = async (name) => {
        await updateDoc(doc(db, "users", user.uid), {
            name: name,
        })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    };

    const getInitialName = async () => {
        try {
            const res = await getName();
            setName(res);
        } catch (error) {
            console.log(error);
            setName("");
        }
    };

    const getSmartwatchLink = async () => {
        const data = await getDoc(doc(db, "users", user.uid));
        return await data.data().smartwatchLink;
    }

    useEffect(() => {
        getInitialName();
    }, []);

    const handleSubmit = async (e) => {
        try {
            await changeName(name);
            await setSaved(1);
        } catch (error) {
            console.log(error);
            setSaved(2);
        }
    };

    return (
        <Container maxWidth="xs">
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <LinkWatch />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                className="bg-primary"
                onClick={handleSubmit}
            >
                Save
            </Button>
            {saved === 1 ? (
                <Alert severity="success" sx={{ mt: 3 }}>
                    Saved successfully
                </Alert>
            ) : null}
            {saved === 2 ? (
                <Alert severity="error" sx={{ mt: 3 }}>
                    Failed to save
                </Alert>
            ) : null}
        </Container>
    );
}
