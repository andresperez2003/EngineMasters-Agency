import { Box, Button, Checkbox,Alert,  FormControlLabel, FormGroup, Grid, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Suscribirse = () => {

    const [createdSusc, setCreatedSusc] = useState({
        name: '',
        email: '',
        phone: '',
        politicas: ''
    });

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#FFF',
        color: "#000",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [isError, setIsError] = useState(false);
    const [MessageError, setMessageError] = useState('')

    const handleChange = (event) => {
        setCreatedSusc(createdSusc => ({ ...createdSusc, [event.target.name]: event.target.value }))
    }

    const handlePoliticas = (event) => {
        createdSusc['politicas'] = event.target.checked;
    }

    const alertMsj = () => {
        return (
            <Alert severity="error">Error</Alert>
        )
    };

    const handleSubmit = () => {
        if (createdSusc['politicas']) {
                const url = 'http://localhost:3100/api/v1/suscritos/new-suscribe';
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(createdSusc),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.message != 'OK') {
                            setMessageError("Error")
                            setIsError(true)
                        } else {
                            window.location.href = 'http://localhost:3000/'
                        }
                        console.log('Suscripcion exitosa:', data);
                    })
                    .catch((error) => console.log(error));
        }
        else{
            setMessageError("Debe aceptar las politicas de privacidad")
            setIsError(true)
        }
    }

    return (
        <>
            {isError ? <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="error">
                    {MessageError}</Alert>
            </Stack> : ''}
            <Box sx={style}>
                <h2 id="modal-title" style={{ marginBottom: "40px" }}>Suscribirse</h2>
                <form>
                    <div >
                        <div>
                            <Grid container spacing={2} display={'flex'}>
                                <Grid item xs={6} >
                                    <TextField type='text' label="Nombres" variant="outlined" value={createdSusc.name} name='name' onChange={handleChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField type='text' label="Telefono" variant="outlined" value={createdSusc.phone} name='phone' onChange={handleChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField type='text' label="Correo" variant="outlined" value={createdSusc.email} name='email' onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} >
                                    <Checkbox onChange={handlePoliticas} />Autorizo el tratamiento de mis datos personales de acuerdo con los términos establecidos en la <a href="/politicas-privacidad" name='politicas' onChange={handleChange} >POLITICA DE PRIVACIDAD</a>
                                </Grid>
                            </Grid>
                        </div>
                    </div>

                    <div style={{marginTop: "10px"}}>
                        <Button type='submit' variant="contained" color="primary" onClick={handleSubmit}>
                            Suscribirse
                        </Button>
                        <Button variant="contained" color="error" sx={{ m: 1 }} href='/'>
                                Cancelar
                            </Button>
                    </div>
                </form>
            </Box>
        </>
    )
}

export default Suscribirse
