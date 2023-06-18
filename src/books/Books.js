import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EuroIcon from '@mui/icons-material/Euro';


export default function Users() {

  const [books, setBooks] = useState([])

  const { id } = useParams()

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8080/book/books")
    setBooks(result.data);
  }

  

  // const viewUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/user/byId/${id}`)
  //   loadUsers()
  // }

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/user/deleteUser/${id}`)
  //   loadUsers()
  // }

  return (
    <div style={{ padding: 30 }} >
    <Grid
      // width="80%"
      // container
      // direction="row"
      // justifyContent="center"
      // justify="space-evenly"
      // alignItems="center"

      container
  spacing={0}
  direction="row"
  alignItems="center"
  justify="center"
  justifyContent="center"
    >
      {
        books.map((book) => (
          // <Paper>
          <Card sx={{ width: 250}} style={{padding: 10, margin: 10}} >
            <Link to={`/viewBook/${book.id}`} >
            <CardContent>
            <Typography>
                {book.title}
              </Typography>
              <CardMedia
                sx={{ height: 300, padding: "1em 1em 1em 1em", objectFit: "fit"  }}
                image={book.imageLink}              />
             
              <Typography>
               <Link to={`/viewAuthor/${book.author.id}`}> {book.author.name} {book.author.lastName}</Link>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {book.price} <EuroIcon style={{height: 15, width: 15}}/>
              </Typography>
             
              {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
            </CardContent>
            </Link>
            <Link to={`/buyBook/${book.id}`} ><Typography sx={{ mb: 1.5 }} color="text.secondary" >
                <ShoppingCartIcon /> Buy Book
              </Typography></Link>
            {/* <button onClick={() => buyBook(book.id, 1)}><Typography sx={{ mb: 1.5 }} color="text.secondary" >
                <ShoppingCartIcon /> Buy Book
              </Typography></button> */}
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
            {'\n'} 
          </Card>
          // </Paper>
        ))
      }
    </Grid>
    </div>
  )


}
