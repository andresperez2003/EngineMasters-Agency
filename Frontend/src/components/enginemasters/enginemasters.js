import React, { useState } from 'react'
import { images } from '../../assets';
import { AppBar, Button, Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./enginemasters.scss";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import LoginUser from '../login/LoginUser';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    gap: "15px",
};


export const EngineMasters = () => {


    const [open, setOpen] = useState(false);

    const[ logIn, setLogIn] = useState(false)
    
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const logout =()=>{
      setLogIn(false)
      localStorage.removeItem('token')
      window.location.reload();
    }

    const token = localStorage.getItem('token')

    return (
        <div>

        <AppBar position="static" style={{backgroundColor:'#050520'}}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
         <img className='image-nav' src={images.logo} alt='Engine Masters Logo' />
        </Toolbar>
      </AppBar>
      
      <Drawer 
      anchor="left"
      open={open}
      onClose={handleDrawerClose}
      PaperProps={{
        sx: {
          width: 200, // Ajusta el ancho del Drawer según tus necesidades
          backgroundColor:'#050520',
          color:'#FFF'
        },
      }}
    >
  <List sx={{ display: 'flex', flexDirection: 'column', height: '100%', }}>
  <ListItem >
  <img className='image-nav' src={images.logo} alt='Engine Masters Logo' />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Quiénes somos" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
           <Link style={{textDecoration:'none', color:'#FFF'}} to="/">
            <ListItemText primary="Productos"    />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Suscribirse" />
          </ListItem>
          <div style={{ flexGrow: 1 }}></div>
          <ListItem button onClick={handleDrawerClose}>
         
         {token ? <Link style={{textDecoration:'none', color:'#FFF'}} onClick={logout}>
            <ListItemText primary="Logout"    />
            </Link>: <Link style={{textDecoration:'none', color:'#FFF'}} to="/login">
            <ListItemText primary="Login"    />
            </Link> }
          
        


          </ListItem>
        </List>
    </Drawer>

    </div>


/*         <div className='container'>
            <div className='menu'>
      
                <div className='ButtonContainer'>
          
                <Button variant="contained" >
                    Log in
                </Button>
                </div>
            </div>
        </div> */
    )
}