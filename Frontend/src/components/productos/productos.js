import * as React from 'react';
import { images } from '../../assets';
import { Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./productos.scss";
import { useEffect, useState } from 'react'  
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



export const Productos = () => {
    const urlProducto = 'http://localhost:3100/api/v1/products'

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
    const [products, setProducts] = useState(null);

  const lastIndex = page * 3;
  const firstIndex = lastIndex - 3;
  const currentItems = products?.slice(firstIndex, lastIndex);
  const numPages = Math.ceil(products?.length/3)
  console.log(numPages)
console.log(currentItems)



    useEffect(() => {
        fetch(urlProducto, {
            method: 'GET',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
            .catch((error) => console.log(error))
    }, []);



    return (
        <div className='productos-container'>
                <div className='title'>
                <h1>NUESTROS PRODUCTOS</h1>
                </div>
            <div className='productos-list'>
                {currentItems?.map((producto) => (
                    
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={"http://localhost:3100/"+producto.imagen}
                        title="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {producto?.nombre}
                    
                    </Typography>
                        <Typography variant="body2" color="text.secondary" style={{minHeight:'85px'}}>
                            {producto?.descripcion}
                        </Typography>
                    <div style={{marginTop:'15px', display:'flex', justifyContent:'space-between'}}>
                    <div style={{display:'flex'}}>
                    <Typography variant="body2" color="text.secondary">
                            <span style={{textDecoration:'line-through'}}>${producto?.precio}</span> {producto?.descuento*100}%
                        </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            <b style={{color:'green'}}>${producto?.precio * producto?.descuento}</b>
                        </Typography>
                    </div>

             
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                ))}
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <Pagination count={numPages} page={page} onChange={handleChange} color="primary"  />
            </div>
        </div>
    )
}