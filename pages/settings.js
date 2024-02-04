import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import General from "../components/settings/General";
import Interests from "../components/settings/Interests";
import { useAuth } from "../src/auth";
import Router from "next/router";

export default function Login() {
    const [tab, setTab] = useState(0);
    const { user } = useAuth();

    const handleChange = (event, newTab) => {
        setTab(newTab);
    };
    useEffect(() => {
        if (!user) {
            Router.push("/signin");
        }
    }, [user]);

    return (
        <div>
            <Tabs
                value={tab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="General" />
            </Tabs>
            {tab === 0 && <General />}
        </div>
    );
}
