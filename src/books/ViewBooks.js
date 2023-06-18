import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Books() {

  const [books, setBooks] = useState([])

  const { id } = useParams()

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8080/book/books")
    setBooks(result.data);
  }

  const viewBook = async (id) => {
    await axios.delete(`http://localhost:8080/book/byId/${id}`)
    loadBooks()
  }

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:8080/book/deleteBook/${id}`)
    loadBooks()
  }

  return (
    <div className='container'>

      
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              books.map((book, index) => (
                <tr>
                  {/* <th scope="row" key={index}>{index + 1}</th> */}
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.genre}</td>
                  <td>{book.price}</td>
                  <td>{book.stock}</td>
                  <td>
                    {/* <button className="btn btn-primary mx-2" onClick={() => viewBook(book.id)}>View</button> */}
                    <Link className="btn btn-outline-primary mx-2"
                      to={`/viewBook/${book.id}`}
                    >
                      View
                    </Link>
                    <Link className="btn btn-outline-primary mx-2"
                      to={`/editBook/${book.id}`}
                    >
                      Edit
                    </Link>
                    <button className="btn btn-danger mx-2"
                      onClick={() => deleteBook(book.id)}
                    > Delete
                    </button>
                  </td>


                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )

  
}
