import { Email } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Link, useNavigate, useParams } from 'react-router-dom';

export default function EditBook() {

  let navigate=useNavigate()

  const {id}=useParams()

  const [book, setBook]=useState({   /* objekt */
    id: 0,
    title:"",
    genre:"",
    price:"",
    description:"",
    stock:"",
    imageLink:"",
  })
  
  // const{name,lastName,email}=book

  const onInputChange=(e)=>{
    setBook({...book, [e.target.name]:e.target.value}); /* ke dodava novi objekti */

  }
  
  useEffect(()=>{
    loadBook()
  }, [])


  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/book/editBook`, book)
    navigate("/")
  }

  const loadBook =async()=>{
    const result=await axios.get(`http://localhost:8080/book/byId/${id}`)
    setBook(result.data)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za edit book pravoagolna linija */}
        <h2 className='text-center m-4'>Edit Book</h2> {/* ova e za vo pravoagolnikot da pisuva register */}
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
            </label> 
            <input type={"text"}
            className="form-control"
            placeholder='Enter book title'
            name="title"
            value={book.title}
            onChange={(e)=>onInputChange(e)}    
            /> 
        </div>
        <div className='mb-3'>
          <label htmlFor='genre' className='form-label'>
            Genre
            </label> 
            <input type={"genre"}
            className="form-control"
            placeholder='Enter book genre'
            name="genre"
           value={book.genre}   
            onChange={(e)=>onInputChange(e)}      
            />   
        </div>
        <div className='mb-3'>
          <label htmlFor='price' className='form-label'>
            Price
            </label> 
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter book price'
            name="price"
            value={book.price}  
           onChange={(e)=>onInputChange(e)}   
           />        
        </div>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
            </label> 
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter book descripton'
            name="description"
            value={book.description}  
           onChange={(e)=>onInputChange(e)}   
           />        
        </div>

        <div className='mb-3'>
          <label htmlFor='stock' className='form-label'>
            Stock
            </label> 
            <input 
            type={"field"}
            className="form-control"
            placeholder='Enter book stock'
            name="stock"
            value={book.stock}  
           onChange={(e)=>onInputChange(e)}   
           />        
        </div>

        <div className='mb-3'>
          <label htmlFor='imageLink' className='form-label'>
            Image link
            </label> 
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter book image link'
            name="imageLink"
            value={book.imageLink}  
           onChange={(e)=>onInputChange(e)}   
           />        
        </div>
        <button type='submit' className='btn btn-outline-primary'> 
        Submit
        </button>
        <Link className='btn btn-outline-danger mx-2' to="/"> 
        Cancel
        </Link>
        </form>
      </div>
      </div>
    </div>
  )
}
