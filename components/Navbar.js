import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { useAuth } from "../src/auth";
import Router from "next/router";

const pages = ["Dashboard"];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { user, signout } = useAuth();

    const handleSignOut = () => {
        signout();
        handleCloseUserMenu();
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                        }}
                    >
                        <IconButton size="large" onClick={handleOpenNavMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="nav-menu"
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link href={page.toLowerCase().replace(" ", "-").replace("home", "/")} passHref>
                                        <Button>{page}</Button>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            flexGrow: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {pages.map((page) => (
                            <Link key={page} href={page.toLowerCase().replace(" ", "-").replace("home", "/")} passHref>
                                <Button
                                    sx={{ color: "white", display: "block" }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                        {user ? (
                            <>
                                <Tooltip title="User Menu">
                                    <IconButton onClick={handleOpenUserMenu}>
                                        <Avatar sx={{ bgcolor: "white" }}>
                                            <svg
                                                width="24px"
                                                height="24px"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                color="#000000"
                                            >
                                                <path
                                                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                                                    stroke="#000000"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z"
                                                    stroke="#000000"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    id="user-menu"
                                    anchorEl={anchorElUser}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center",
                                    }}
                                >
                                    <MenuItem
                                        key="signout"
                                        onClick={handleSignOut}
                                    >
                                        <Button>Sign Out</Button>
                                    </MenuItem>
                                    <MenuItem
                                        key="settings"
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Link href="settings" passHref>
                                            <Button>Settings</Button>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Link href="/signin" passHref>
                                <Button
                                    sx={{ color: "white", display: "block" }}
                                >
                                    Sign In
                                </Button>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
