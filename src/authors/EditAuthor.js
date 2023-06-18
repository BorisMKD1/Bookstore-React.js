import { Email } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Link, useNavigate, useParams } from 'react-router-dom';

export default function EditAuthor() {

  let navigate=useNavigate()

  const {id}=useParams()

  const [author, setAuthor]=useState({   /* objekt */
    id: 0,
    name:"",
    lastName:"",
    description:"",
    dateOfBirth:""
  })
  
  // const{name,lastName,email}=author

  const onInputChange=(e)=>{
    setAuthor({...author, [e.target.name]:e.target.value}); /* ke dodava novi objekti */

  }
  
  useEffect(()=>{
    loadAuthor()
  }, [])


  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/author/editAuthor`, author)
    navigate("/authors")
  }

  const loadAuthor =async()=>{
    const result=await axios.get(`http://localhost:8080/author/byId/${id}`)
    setAuthor(result.data)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za edit author pravoagolna linija */}
        <h2 className='text-center m-4'>Edit Author</h2> {/* ova e za vo pravoagolnikot da pisuva register */}
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
            </label> 
            <input type={"text"}
            className="form-control"
            placeholder='Enter author name'
            name="name"
            value={author.name}
            onChange={(e)=>onInputChange(e)}    
            /> 
        </div>
        <div className='mb-3'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
            </label> 
            <input type={"text"}
            className="form-control"
            placeholder='Enter author last name'
            name="lastName"
           value={author.lastName}   
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
            placeholder='Enter author description'
            name="description"
            value={author.description}  
           onChange={(e)=>onInputChange(e)}   
           />        
        </div>
        <div className='mb-3'>
          <label htmlFor='dateOfBirth' className='form-label'>
           Date of birth
            </label> 
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter author date of birht'
            name="dateOfBirth"
            value={author.dateOfBirth}  
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
