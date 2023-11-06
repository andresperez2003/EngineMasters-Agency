import React, { useState } from 'react'
import { images } from '../../assets';
import { Button } from '@mui/material';
import "./enginemasters.scss";
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
    return (
        <div className='container'>
            <div className='menu'>
                <img src={images.logo} alt='Engine Masters Logo' />
                <div className='ButtonContainer'>
                <Button variant="contained" color="success">
                    Suscribirse
                </Button>
                <Button variant="contained" >
                    Log in
                </Button>
                </div>
            </div>
            <div className='title'>
                <h1>NUESTROS PRODUCTOS</h1>
            </div>
        </div>
    )
}