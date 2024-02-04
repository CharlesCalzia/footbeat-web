import React, { useState, useEffect } from "react";
import Router from "next/router";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SignIn from "../../components/auth/SignIn";
import SignUp from "../../components/auth/SignUp";
import ForgotPassword from "../../components/auth/ForgotPassword";
import { useAuth } from "../../src/auth";

export default function Signin() {
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            Router.push("/dashboard");
        }
    }, [user]);

    const [tab, setTab] = useState(0);

    const handleChange = (event, newTab) => {
        setTab(newTab);
    };

    return (
        <div>
            <Tabs
                value={tab}
                onChange={handleChange}
                indicatorColor="primary"
                className="text-primary"
                centered
            >
                <Tab label="Sign In" />
                <Tab label="Sign Up" />
                <Tab label="Forgot Password" />
            </Tabs>
            {tab === 0 && <SignIn />}
            {tab === 1 && <SignUp />}
            {tab === 2 && <ForgotPassword />}
        </div>
    );
}
