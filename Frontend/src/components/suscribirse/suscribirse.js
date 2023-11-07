import { Box, Button, Checkbox, Alert,FormControlLabel, FormGroup, Grid, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Suscribirse = () => {

    const [createdSusc, setCreatedSusc] = useState({
        name: '',
        email: '',
        phone: '',
        politicas: ''
    });

    const handleChange = (event) => {
        setCreatedSusc(createdSusc => ({ ...createdSusc, [event.target.name]: event.target.value }))
    }

    const handlePoliticas = (event) => {
        createdSusc['politicas'] = event.target.checked;
    }

    const alertMsj = () => {
        return(
        <Alert severity="error">Error</Alert>
        )
    };

    const handleSubmit = () => {
        if (createdSusc['politicas'] ) {
            if (createdSusc['name'] != '' && createdSusc['email'] != '' && createdSusc['phone'] != '') {
                const url = 'http://localhost:3100/api/v1/suscritos/new-suscribe';
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(createdSusc),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(error));
            }
            else {
                alert('Debe llenar todos los campos');
            }
        }
        else {
            alert('Debe aceptar las politicas de privacidad');
        }
    }

    return (
        <div className='formulario'>
            <Box
                component="form"
                sx={{
                    width: '100%',
                    '& > :not(style)': { m: 1, width: '100%' }
                }}
                noValidate
                autoComplete="off"
            >
                <h1 style={{ textAlign: "center" }}>Suscribirse</h1>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField id="outlined-basic" label="Nombre" variant="outlined" sx={{ m: 1, width: '90%' }} name='name' onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ m: 1, width: '90%' }} name='email' onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField id="outlined-basic" label="Teléfono" variant="outlined" sx={{ m: 1, width: '90%' }} name='phone' onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Checkbox onChange={handlePoliticas} />Autorizo el tratamiento de mis datos personales de acuerdo con los términos establecidos en la <a href="/politicas-privacidad" name='politicas' onChange={handleChange} >POLITICA DE PRIVACIDAD</a>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} >
                        <Button variant="contained" color="primary" sx={{ m: 1 }} onClick={handleSubmit}>
                            Registrarme
                        </Button>
                        <Button variant="contained" color="error" sx={{ m: 1 }} href='/'>
                            Cancelar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Suscribirse
