import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Authors() {

  const [authors, setAuthors] = useState([])

  const { id } = useParams()

  useEffect(() => {
    loadAuthors();
  }, []);

  const loadAuthors = async () => {
    const result = await axios.get("http://localhost:8080/author/authors")
    setAuthors(result.data);
  }

  const deleteAuthor = async (id) => {
    await axios.delete(`http://localhost:8080/author/deleteAuthor/${id}`)
    loadAuthors()
  }

  return (
    <div className='container'>

      
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">LastName</th>
              <th scope="col">dateOfBirth</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              authors.map((author, index) => (
                <tr>
                  {/* <th scope="row" key={index}>{index + 1}</th> */}
                  <td>{author.id}</td>
                  <td>{author.name}</td>
                  <td>{author.lastName}</td>
                  <td>{author.dateOfBirth}</td>
                  <td>
                    {/* <button className="btn btn-primary mx-2" onClick={() => viewAuthor(author.id)}>View</button> */}
                    <Link className="btn btn-outline-primary mx-2"
                      to={`/viewAuthor/${author.id}`}
                    >
                      View
                    </Link>
                    <Link className="btn btn-outline-primary mx-2"
                      to={`/editAuthor/${author.id}`}
                    >
                      Edit
                    </Link>
                    <button className="btn btn-danger mx-2"
                      onClick={() => deleteAuthor(author.id)}
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
