
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function BuyBook() {
  const { id } = useParams()

  const [quantity, setQuantity] = useState(1)

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

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:8080/book/byId/${id}`)
    setBook(result.data);
  }


  const onInputChange = (e) => {
    setQuantity(e.target.value) 
  }

const buyBook = async () => {
    const result = await axios.put(`http://localhost:8080/book/buyBook/${id}/${quantity}`)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za add user pravoagolna linija */}
          <h2 className='text-center m-4'>Buy Book - {book.title} </h2> {/* ova e za vo pravoagolnikot da pisuva register */}

          <form onSubmit={buyBook}>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Name
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Last Name 
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter your last name'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Address
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter shipping address'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Phone number
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter contact phone'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='stock' className='form-label'>
                Qunatity
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter Qunatity'
                value={quantity}
                onChange={(e) => onInputChange(e)}
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
