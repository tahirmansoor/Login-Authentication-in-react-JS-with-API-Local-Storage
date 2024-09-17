import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './App.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';





const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
 
 
  

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar className='NavSec' position="static" sx={{  backgroundColor: '#282c34',}}>
        <Toolbar>
          {/* Menu Icon for Drawer */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{display: {sm: 'none'}}} />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyWebsite
          </Typography>

          {/* Nav Links for large screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/about">
              About
            </Button>
            <Button color="inherit" href="/services">
              Services
            </Button>
            <Button color="inherit" href="/contact">
              Contact
            </Button>


            <Button color="inherit" href="/login">
              Login
            </Button>

            <Button color="inherit" href="/register">
              Register
            </Button>

            

            {/* <Button color="inherit">
              {isAuthenticated && <p className='User'> {user.name} </p>  
              }
            </Button>

            {
              isAuthenticated ? 

            <Button>
              <button class="LoginBtn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>    Log Out   </button>
            </Button>

            :

          <Button>
            <button class="LoginBtn" onClick={() => loginWithRedirect()}>Log In</button>
          </Button>
            } */}
       

            
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component="a" href="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component="a" href="/services">
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button component="a" href="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component="a" href="">
             <button>Log In</button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
