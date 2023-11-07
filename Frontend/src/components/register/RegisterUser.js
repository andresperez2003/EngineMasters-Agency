import {  Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import { ViewColumn } from '@mui/icons-material';

const RegisterUser = () => {
    sessionStorage.removeItem('token')
    const urlPostUser ="http://localhost:3100/api/v1/auth/signin";

    const [formUser, setFormUser] = useState({firstname:'',lastname:'',email:'',phone:'',password:''});
    const [submitUser, setsubmitUser] = useState(false);
    const [MessageError, setMessageError] = useState('')
    const [isError, setIsError] = useState(false);
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#FFF',
        color:"#000",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    useEffect(() => {

    }, []); 






    const register = (e)=>{
        setsubmitUser(true)
        e.preventDefault();
            fetch(urlPostUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formUser),
            })
            .then(response => {
                // Si el código de estado es 2xx (éxito), continúa con el proceso de respuesta
                return response.json();
            })
            .then((data) => {
                if(data.message!='OK'){
                    setMessageError(data.message)
                    setIsError(true)
                    return
                }else{
                    window.location.href= 'http://localhost:3000/'
                }

                console.log('Registro exitoso:', data);
                localStorage.setItem('token', data.access )

                /* indow.location.href = 'http://localhost:3000/dashboard'; */
    
            })
            .catch((error) => {
                console.error('Error al crear el post:', error);

            });
        
        


    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormUser({
            ...formUser,
            [name]: value,
        });
        console.log(formUser)
        };

    return (
        <>
        
        <Box sx={style}>
        <h2 id="modal-title" style={{marginBottom:"40px"}}>Register</h2>
        <form>
        <div >

        <div>
        <Grid container spacing={2} display={'flex'}>
            <Grid item xs={6} >
                <TextField type='text'  label="Nombres" variant="outlined" value={formUser.fisrtname} name='firstname' onChange={handleInputChange} />
            </Grid>
            <Grid item xs={6}>
                <TextField type='text'  label="Apellidos" variant="outlined" value={formUser.lastname} name='lastname' onChange={handleInputChange} />
            </Grid>
            <Grid item xs={6}>
                <TextField type='text'  label="Correo" variant="outlined" value={formUser.email} name='email' onChange={handleInputChange} />
            </Grid>
            <Grid item xs={6}>
                <TextField type='text'  label="Telefono" variant="outlined" value={formUser.current_phone} name='phone' onChange={handleInputChange} />
            </Grid>
            <Grid item xs={6}>
                <TextField type='password'  label="Contraseña" variant="outlined" value={formUser.password} name='password' onChange={handleInputChange} />
            </Grid>

        </Grid>
        
            </div>


        </div>
        
        <div style={{ marginTop: '25px' , marginLeft:"150px" }}>
            <Button  type='submit' variant="contained" color="primary" onClick={register}>
                Registrarse
            </Button>
        </div>
        </form>
    </Box>
    </>
    )
}

export default RegisterUser