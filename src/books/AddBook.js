
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AddBook() {

  let navigate = useNavigate()

  const [book, setBook] = useState({   /* objekt */
    title: "",
    genre: "",
    description: "",
    price: "",
    stock: "",
    imageLink: "",
    
    // author: {
    //   id: "",
    //   name: "",
    //   lastName: "",
    //   description: "",
    //   dateOfBirth: ""
    // }
  })


  const onInputChange = (e) => {

    setBook({ ...book, [e.target.name]: e.target.value }); /* ke dodava novi objekti */

  }

  const onSubmit1 = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/book/addBook/${author.id}`, book)
    navigate("/")
  }




  const [author, setAuthor] = useState({   /* objekt */
      id: 0,
      name: "",
      lastName: "",
      description: ""
    })

  const onInputChangeAuthor = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value }); /* ke dodava novi objekti */
  }
  const searchAuthor = async (e) => {
    e.preventDefault()
    const result = await axios.get(`http://localhost:8080/author/byNameAndLastName/${author.name}/${author.lastName}`);
    setAuthor(result.data)
  }








  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za add user pravoagolna linija */}
          <h2 className='text-center m-4'>Insert Book</h2> {/* ova e za vo pravoagolnikot da pisuva register */}

          <form onSubmit={(e) => onSubmit1(e)}>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Title
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter title'
                name="title"
                value={book.title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Genre
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter genre'
                name="genre"
                value={book.genre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Price
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter price'
                name="price"
                value={book.price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Description
              </label>
              <textarea type={"text"}
                className="form-control"
                placeholder='Enter description'
                name="description"
                value={book.description}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='stock' className='form-label'>
                Stock
              </label>
              <textarea type={"text"}
                className="form-control"
                placeholder='Enter stock'
                name="stock"
                value={book.stock}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className='mb-3'>
              <label htmlFor='imageLink' className='form-label'>
                Add book cover link
              </label>
              <textarea type={"text"}
                className="form-control"
                placeholder='Enter book cover link'
                name="imageLink"
                value={book.imageLink}
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












          <form onSubmit={searchAuthor}>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Author Name
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter author name'
                name="name"
                value={author.name}
                onChange={(e) => onInputChangeAuthor(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                LastName
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter lastname'
                name="lastName"
                value={author.lastName}
                onChange={(e) => onInputChangeAuthor(e)}
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
