import React, { useState, useEffect } from 'react'
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
  const [data, setData] = useState(null);
  const [register, setRegister] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setRegister(false)
    localStorage.removeItem('token')
    window.location.reload();
  }
  
  const token = localStorage.getItem('token')


  useEffect(() => {
    console.log("La cookie es: " + token);

    fetch('http://localhost:3100/api/v1/auth/get-me', {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: ' + token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Unauthorized' || token === null) {
          console.log('Usuario no autenticado')
        } else {
          setData(data);
          //window.location.reload();
          console.log(data);
        }

      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>

      <AppBar position="static" style={{ backgroundColor: '#050520' }}>
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
            backgroundColor: '#050520',
            color: '#FFF'
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
            <Link style={{ textDecoration: 'none', color: '#FFF' }} to="/">
              <ListItemText primary="Productos" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link style={{ textDecoration: 'none', color: '#FFF' }} to="/suscribirse">
              <ListItemText primary="Suscribirse" />
            </Link>
          </ListItem>
          <div style={{ flexGrow: 1 }}></div>
          <ListItem button onClick={handleDrawerClose}>
              <Link style={{ textDecoration: 'none', color: '#FFF' }} to="/register">
                <ListItemText primary="Register" />
              </Link> 
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            {token ? <Link style={{ textDecoration: 'none', color: '#FFF' }} onClick={logout}>
              <ListItemText primary="Logout" />
            </Link> : <Link style={{ textDecoration: 'none', color: '#FFF' }} to="/login">
              <ListItemText primary="Login" />
            </Link>}
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