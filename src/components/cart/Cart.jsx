import React, { useState, useEffect } from 'react'
import {
  Container, Card, CardHeader, CardContent, Chip,
  TableContainer, Table, TableHead, TableRow, TableBody,
  TableCell, Button, IconButton, Badge, Typography, Grid,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/AddOutlined';
import DeleteIcon from '@mui/icons-material/RemoveOutlined';

const Cart = (props) => {
  const myCart = props.cart;
  const [sumTotal, setSumTotal] = useState(0)
  const [cart, setCart] = useState(0)

  const addProductToCard = async (product) => {
    try {
      const productsToUpdate = cart.products.map(p=>{
        if(product.id === p.id){
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return p;
      })

      setCart({
        ...cart,
        products: productsToUpdate 
      });
    } catch (e) {
      console.log(e)

    }
  }

  const calcFrete = () => {
    console.log(`frete calc`);
  }

  const removeProductToCard = async (product) => {
    try {
      const productsToUpdate = cart.products.map(p=>{
        if(product.id === p.id){
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return p;
      })

      setCart({
        ...cart,
        products: productsToUpdate.filter(p=> p.quantity >0)
      });
      
    } catch (e) {
      console.log(e)

    }
  }


  useEffect(() => {
   if(myCart) {
    setCart(myCart);
   }
  }, [])
  

  useEffect(() => {
    if (cart && (cart.products.length)) {
      let total = 0
      cart.products.forEach(element => {

        total += element.quantity * (element?.price || 0)
      });


      setSumTotal(total)
    }

  }, [cart])

  const finishPayment = () => {

  }
  

  return (
    <>
      <Container maxWidth="xl">
       
        <Grid container spacing={6} sx={{ marginTop: 4, paddingBottom: 4 }}>
          <Grid item xs={12} md={7}>
            <Grid container spacing={6}>

              {cart?.products && cart?.products.length > 0 && (

                <Grid item xs={12} md={12}>
                  <Card>
                    <CardHeader title='Produtos' titleTypographyProps={{ variant: 'h6' }} />
                    <CardContent>
                      <TableContainer>
                        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
                          <TableHead>
                            <TableRow>
                              <TableCell>Produto</TableCell>
                              <TableCell>Quantidade</TableCell>
                              <TableCell>Preço unidade</TableCell>
                              <TableCell>Preço total</TableCell>

                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {cart?.products.map((item) => (
                              <TableRow hover key={item?.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                                <TableCell>{item?.name}</TableCell>
                                <TableCell>
                                  <Grid container>
                                    <Grid item md={2}>

                                      <IconButton date-testid="remove-button" onClick={() => removeProductToCard(item)} title="Remover um" color="inherit">
                                        <Badge >
                                          <DeleteIcon />
                                        </Badge>
                                      </IconButton>

                                    </Grid>
                                    <Grid item md={2}>

                                      <Typography 
                                      
                                      date-testid="value"
                                      style={{
                                        width: '30px',
                                        margin: 'auto',
                                        textAlign: 'center',
                                        marginTop: '10px'
                                      }}>
                                        {item?.quantity}
                                      </Typography>
                                      
                                    </Grid>
                                    <Grid item md={2}>
                                      <IconButton testid="add-button" onClick={() => addProductToCard(item)} title='adicionar mais um' color="inherit">
                                        <Badge >
                                          <AddIcon />
                                        </Badge>
                                      </IconButton>

                                    </Grid>

                                  </Grid>
                                </TableCell>
                                <TableCell>R$ {item?.price.toFixed(2)} </TableCell>
                                <TableCell>R$ {((item?.price || 0) * item?.quantity).toFixed(2)} </TableCell>

                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>

                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item xs={12} md={5}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={12}>

                <Card>
                  <CardHeader title='Resumo do Pedido' />

                  <CardContent>
                    <Grid container spacing={12}>
                      <Grid item xs={12} md={8}>
                        <strong>Subtotal</strong>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        R$ {sumTotal.toFixed(2)}
                      </Grid>
                    </Grid>

                    <br /><br />
                    <Grid container spacing={12}>
                      <Grid sx={{marginTop: `20px`}} item xs={12} md={4}>
                        <strong> Digite seu CEP:</strong>
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <input
                          style={{ textAlign: 'center', marginBottom: '15px' }}
                          data-testid="my-cep"
                          type="text"
                          placeholder='00.000-000' />
                        {/* <TextField
                          placeholder='00.000-000'
                          data-testid="my-cep"
                          aria-label='my cep'
                          sx={{ textAlign: 'center', marginBottom: '15px' }}
                          
                        /> */}

                        <Button testid="calc-frete" onClick={() => calcFrete()}  size='medium' variant='outlined'>
                          Calcular frete
                        </Button>
                      </Grid>

                        
                    </Grid>


                    <Grid container spacing={12}>
                      <Grid item xs={12} md={8}>
                        <strong>Total</strong>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Chip

                          label={`R$ ${sumTotal.toFixed(2)}`}
                          color='info'
                          sx={{
                            marginLeft: "auto",
                            height: 24,
                            fontSize: '1rem',
                            textTransform: 'capitalize',
                            '& .MuiChip-label': { fontWeight: 500 }
                          }}
                        />

                      </Grid>

                      <Grid item md={12}>
                        <Button onClick={() => finishPayment()} fullWidth size='large' variant='contained'>
                          Finalizar compra
                        </Button>
                      </Grid>

                      <Grid item md={12}>
                        <Button onClick={() => window.location.assign('/')} fullWidth size='large' variant='outlined'>
                          Continuar comprando
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>      
      </Container >
    </>
  )
}
export default Cart;