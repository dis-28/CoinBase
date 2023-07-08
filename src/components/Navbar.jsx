import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import TollIcon from '@mui/icons-material/Toll';
import { green } from '@mui/material/colors';

const Navbar = () => {
    return (<AppBar position="static" style={{ backgroundColor: green[400] }}>
        <Toolbar>
            <IconButton size="large" edge='start' color="inherit" aria-label='logo'>
                <TollIcon />
            </IconButton>
            <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
                coinbase
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color="inherit">
                    <Link to='/' >Homepage</Link>
                </Button>
                <Button color="inherit">
                    <Link to='/Cryptocurrencies'>Cryptocurrencies</Link>
                </Button>
            </Stack>
        </Toolbar>
    </AppBar>)
}

export default Navbar;