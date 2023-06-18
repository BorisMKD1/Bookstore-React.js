
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AddAuthor() {

  let navigate = useNavigate()

  const onInputChange = (e) => {

    setAuthor({ ...author, [e.target.name]: e.target.value }); /* ke dodava novi objekti */

  }

  const onSubmit1 = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/author/addAuthor', author)
     navigate("/authors")
  }

  const [author, setAuthor] = useState({   /* objekt */
      name: "",
      lastName: "",
      description: "",
      dateOfBirth: ""
    })

  const onInputChangeAuthor = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value }); /* ke dodava novi objekti */
  }
  

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za add user pravoagolna linija */}
          <h2 className='text-center m-4'>Insert Author</h2> {/* ova e za vo pravoagolnikot da pisuva register */}

          <form onSubmit={(e) => onSubmit1(e)}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter name'
                name="name"
                value={author.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                LastName
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter last Name'
                name="lastName"
                value={author.lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Description
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter description'
                name="description"
                value={author.description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Date of Birth
              </label>
              <input type={"date"}
                className="form-control"
                placeholder='Enter date of birth'
                name="dateOfBirth"
                value={author.dateOfBirth}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
            {/* <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            E-mail
            </label> 
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter your e-mail address'
            name="email"
            value={email}  
           onChange={(e)=>onInputChange(e)}   
           />        
        </div> */}
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
