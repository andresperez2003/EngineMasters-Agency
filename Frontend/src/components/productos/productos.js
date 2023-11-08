import * as React from 'react';
import { images } from '../../assets';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./productos.scss";
import { useEffect, useState } from 'react'  
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, Box, FormControl, FormGroup, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Modal, Select, Snackbar, TextField } from '@mui/material';
import { useRef } from 'react';



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
    gap: "15px",
};



export const Productos = () => {
    const urlProducto = 'http://localhost:3100/api/v1/products'
    const createProducto = 'http://localhost:3100/api/v1/products/new-product'
    const fileInputRef = useRef();
    const fileInputRefEdit = useRef();


    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };

    


    const [products, setProducts] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [openAlert, setOpenAlert] = useState(false)
    const [openAlertSucess, setOpenAlertSucess] = useState(false)
    const [openAlertSucessEdit, setOpenAlertSucessEdit] = useState(false)
    const [idProduct, setIdProduct] = useState(null);
    const [formProduct, setFormProduct] = useState({nombre:'', descripcion:'',precio:null,descuento:null,imagen:null});
    const [formProductEdit, setFormProductEdit] = useState({nombre:'', descripcion:'',precio:null,descuento:null,imagen:null});
    const [selectedValue, setSelectedValue] = useState('');

    const handleChangeCombo = (event) => {
      setSelectedValue(event.target.value);
    };

    const handleOpen = ()=>{
        setOpenModal(true)
      }

   const handleOpenEdit = (product)=>{

    setIdProduct(product._id)
    setFormProductEdit({nombre:product.nombre, descripcion:product.descripcion,precio:product.precio,descuento:product.descuento,imagen:product.imagen})
    setSelectedValue(product.descuento)
    console.log(product)
    setOpenModalEdit(true)

   }

     const handleCloseAlertSuccess=()=>{
        setOpenAlertSucess(false)
     } 

     const handleCloseAlertSuccessEdit=()=>{
      setOpenAlertSucessEdit(false)
   } 

      const handleClose = ()=>{
        setOpenModal(false)
      }

      const handleCloseEdit = ()=>{
        setOpenModalEdit(false)
      }
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormProduct({
          ...formProduct,
          [name]: value,
        });
        console.log(formProduct)
      };

      const handleInputChangeEdit = (e) => {
        const { name, value } = e.target;
        setFormProductEdit({
          ...formProductEdit,
          [name]: value,
        });
        console.log(formProductEdit)
      };


      const handleCloseAlert =()=>{
        setOpenAlert(false)
      }

      //Esta funcion esta creada unicamente para que cuando se cree un nuevo producto, se vuelva a llamar al backend para que muestre los nuevos productos
      const peticionDeProductos =()=>{
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
      }
      



      const deleteProduct = (id)=>{
        setIdProduct(id)
        const urlDeleteProduct = `http://localhost:3100/api/v1/products/${id}`

        fetch(urlDeleteProduct, {
          method: 'DELETE',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json'
          }
      })
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
              peticionDeProductos()
          })
          .catch((error) => console.log(error))
    
      }

      const editProduct = async()=>{

        const urlEditProduct = `http://localhost:3100/api/v1/products/${idProduct}`
        if(formProductEdit.nombre!=='' && formProductEdit.descripcion!=='', formProductEdit.precio!=='', formProductEdit.descuento!==''){
         const formData = new FormData();
            formData.append('nombre', formProductEdit.nombre);
            formData.append('descripcion', formProductEdit.descripcion);
            formData.append('precio', Number(formProductEdit.precio));
            console.log("Descuento", selectedValue)
            formData.append('descuento', selectedValue);
            formData.append('imagen', formProductEdit.imagen);
            for (let pair of formData) {
              console.log(pair[0] + ', ' + pair[1]);
            }
            try {
              const response = await fetch(urlEditProduct, {
                method: 'PATCH',
                body: formData,
              });
              console.log('Respuesta del servidor:', response);
              handleCloseEdit()
              peticionDeProductos()
              setOpenAlertSucessEdit(true)
              setFormProduct({nombre:'', descripcion:'',precio:'',descuento:'',imagen:null})
            } catch (error) {
              console.error('Error al enviar el formulario:', error);
            }
        }else{
            setOpenAlert(true)
        }
 
      }
      const createProduct = async(req,res)=>{
       
        if(formProduct.nombre!=='' && formProduct.descripcion!=='', formProduct.precio!=='', formProduct.descuento!=='' && formProduct.imagen!== null){
         const formData = new FormData();
            formData.append('nombre', formProduct.nombre);
            formData.append('descripcion', formProduct.descripcion);
            formData.append('precio', Number(formProduct.precio));
            console.log(formProduct.descuento)
            formData.append('descuento', (Number(formProduct.descuento)));
            formData.append('imagen', formProduct.imagen);
            for (let pair of formData) {
              console.log(pair[0] + ', ' + pair[1]);
            }
            try {
              const response = await fetch(createProducto, {
                method: 'POST',
                body: formData,
              });
              console.log('Respuesta del servidor:', response);
              handleClose()
              peticionDeProductos()
              setOpenAlertSucess(true)
              setFormProduct({nombre:'', descripcion:'',precio:'',descuento:'',imagen:null})
            } catch (error) {
              console.error('Error al enviar el formulario:', error);
            }
        }else{
            setOpenAlert(true)
        }

      }

        const handleFileChange = () => {
          const file = fileInputRef.current.files[0];
          console.log('Archivo seleccionado:', file);
          formProduct.imagen = file
          // Aquí puedes enviar el archivo a través de una solicitud HTTP, como fetch o axios
          // Ejemplo: enviar el archivo usando fetch
          // const formData = new FormData();
          // formData.append('file', file);
          // fetch('URL_DEL_ENDPOINT', {
          //   method: 'POST',
          //   body: formData,
          // });
        };

        const handleFileChangeEdit = () => {
          const file = fileInputRefEdit.current.files[0];
          console.log('Archivo seleccionado:', file);
          formProductEdit.imagen = file
          // Aquí puedes enviar el archivo a través de una solicitud HTTP, como fetch o axios
          // Ejemplo: enviar el archivo usando fetch
          // const formData = new FormData();
          // formData.append('file', file);
          // fetch('URL_DEL_ENDPOINT', {
          //   method: 'POST',
          //   body: formData,
          // });
        };


  const lastIndex = page * 3;
  const firstIndex = lastIndex - 3;
  console.log("l",lastIndex)
  console.log("f",firstIndex)
  const currentItems = products?.slice(firstIndex, lastIndex);
  console.log(currentItems)
  const numPages = Math.ceil(products?.length/3)


     

    useEffect(() => {
      
        const token = localStorage.getItem('token')
        token ? setIsAdmin(true) : setIsAdmin(false)
        console.log(token)

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

    console.log(idProduct)

    return (
        <div className='productos-container'>
            {isAdmin ?                 <div className='title' style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0px 10px'}}>
                <h1 style={{margin:'14px'}}>NUESTROS PRODUCTOS</h1>
                 <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'0px 25px'}}>
                 <Button style={{maxHeight:'30px', marginLeft:'auto', fontSize:'13px'}} variant="contained" onClick={handleOpen} startIcon={<AddIcon />}>Agregar</Button>
                 </div>
                </div>
                :
                <div className='title' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <h1 style={{margin:'14px'}}>NUESTROS PRODUCTOS</h1>
                </div>
                }

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
                            <span style={{textDecoration:'line-through'}}>${producto?.precio}</span> {producto?.descuento}%
                        </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            <b style={{color:'green'}}>${producto?.precio-(producto?.precio * (producto?.descuento/100))}</b>
                        </Typography>
                    </div>

             
                    </CardContent>
                    <CardActions>
                        <Button size="small"><EditIcon fontSize="small" style={{ color: '#050520' }} onClick={()=>handleOpenEdit(producto)}  /></Button>
                        <Button aria-label="delete" ><DeleteIcon style={{color:'#050520'}}  onClick={()=>deleteProduct(producto._id)}  /></Button>
                    </CardActions>
                </Card>
                ))}
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <Pagination count={numPages} page={page} color='primary' onChange={handleChange}  />
            </div>


             {/* Modal para la creacion de un nuevo producto */}
            <Modal open={openModal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <h2 id="modal-title">Nuevo producto</h2>
                <form>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item xs={12} style={{ marginTop: 'auto' }}>
                        <TextField type='text'   style={{width:'100%'}} label="Nombre" variant="outlined" value={formProduct.nombre} name='nombre' onChange={handleInputChange} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type='text' multiline rows={4}  style={{width:'100%'}} label="Descripcion" variant="outlined" value={formProduct.descripcion} name='descripcion' onChange={handleInputChange} />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField type='number'   label="Precio" variant="outlined"  value={formProduct.precio} name='precio' onChange={handleInputChange} InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField type='number'  label="Desc." variant="outlined" value={formProduct.descuento} name='descuento' onChange={handleInputChange}    InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}}   />
                      </Grid>
                      <Grid item xs={4} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <input type="file" ref={fileInputRef} style={{ display: 'none', marginTop:'10px' }} onChange={handleFileChange} id="fileInput"/>
                        <label htmlFor="fileInput">
                          <Button variant="contained" component="span">Imagen</Button>
                        </label>
                      </Grid>
                    </Grid>
                  </div>
                  <div style={{ marginTop: '60px' }}>
                    <Button  variant="contained" color="primary" onClick={createProduct}> Crear </Button>
                    <Button style={{marginLeft:"205px"}} onClick={handleClose}   variant="contained" color="error"> Cancelar </Button>
                  </div>
               </form>
              </Box>
            </Modal>



            {/* Modal para la edicion de un nuevo producto */}
            <Modal open={openModalEdit} onClose={handleCloseEdit} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <h2 id="modal-title">Edicion de producto</h2>
                <form>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item xs={12} style={{ marginTop: 'auto' }}>
                        <TextField type='text'   style={{width:'100%'}} label="Nombre" variant="outlined" value={formProductEdit.nombre} name='nombre' onChange={handleInputChangeEdit} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type='text' multiline rows={4}  style={{width:'100%'}} label="Descripcion" variant="outlined" value={formProductEdit.descripcion} name='descripcion' onChange={handleInputChangeEdit} />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField type='number'   label="Precio" variant="outlined"  value={formProductEdit.precio} name='precio' onChange={handleInputChangeEdit} InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
                      </Grid>
                      <Grid item xs={4}>
                      <FormControl fullWidth>
      <InputLabel id="descuento-label">Descuento</InputLabel>
        <Select name='descuento'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          
          label="Descuento"
          onChange={handleChangeCombo}
        >
          <MenuItem value={0}>0%</MenuItem>
          <MenuItem value={5}>5%</MenuItem>
          <MenuItem value={10}>10%</MenuItem>
          <MenuItem value={15}>15%</MenuItem>
          <MenuItem value={20}>20%</MenuItem>
          <MenuItem value={25}>25%</MenuItem>
          <MenuItem value={30}>30%</MenuItem>

        </Select>
        </FormControl>
      
                      </Grid>
                      <Grid item xs={4} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <input type="file" ref={fileInputRefEdit} name='imagen' style={{ display: 'none', marginTop:'10px' }} onChange={handleFileChangeEdit} id="fileInputEdit"/>
                        <label htmlFor="fileInputEdit">
                          <Button variant="contained" component="span">Imagen</Button>
                        </label>
                      </Grid>
                    </Grid>
                  </div>
                  <div style={{ marginTop: '60px' }}>
                    <Button  variant="contained" color="primary" onClick={editProduct}> Editar </Button>
                    <Button style={{marginLeft:"190px"}} onClick={handleCloseEdit}   variant="contained" color="error"> Cancelar </Button>
                  </div>
               </form>
              </Box>
            </Modal>





      {/* Alertas  */}
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'left' }}  open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert  onClose={handleCloseAlert} severity="error">
          Porfavor, llene todos los campos para crear un nuevo producto
        </Alert>
      </Snackbar>

      
      
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'left' }}  open={openAlertSucessEdit} autoHideDuration={3000} onClose={handleCloseAlertSuccessEdit}>
        <Alert  onClose={handleCloseAlertSuccessEdit} severity="success">
          Producto editado con exito!
        </Alert>
      </Snackbar>

      
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'left' }}  open={openAlertSucess} autoHideDuration={3000} onClose={handleCloseAlertSuccess}>
        <Alert  onClose={handleCloseAlertSuccess} severity="success">
          Producto creado con exito!
        </Alert>
      </Snackbar>
        </div>
    )
}