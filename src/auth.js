import React, { useEffect, useState, useContext, createContext } from "react";
import Router from "next/router";
import {
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { updateDoc, doc, setDoc } from "firebase/firestore";
import PropTypes from "prop-types";

const authContext = createContext();

export function AuthProvider({ children }) {
    const authUser = useFirebaseAuth();
    return (
        <authContext.Provider value={authUser}>{children}</authContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => {
    return useContext(authContext);
};

function useFirebaseAuth() {
    const [user, setAuthUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => unsubscribe();
    }, [user]);

    const signup = async (email, password) => {
        const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await setAuthUser(user);
        await setDoc(
            doc(db, "users", user.uid),
            {
                emailVerified: false,
                settings: {
                    theme: "light",
                },
                name: user.displayName || "",
                email: user.email,
                smartwatchLink: false
            },
            { merge: true }
        );
        Router.push("/settings");
    };

    const signin = async (email, password) => {
        const { user } = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        setAuthUser(user);
        Router.push("/settings");
    };

    const signout = async () => {
        await signOut(auth);
        setAuthUser(null);
        Router.push("/");
    };

    const forgotpassword = async (email) => {
        await sendPasswordResetEmail(auth, email);
    };

    return { user, signup, signin, signout, forgotpassword };
}
