import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';



export default function ViewBook() {
    const { id } = useParams()

    const [book, setBook] = useState({ 
        id: "",  /* objekt */
        title: "",
        genre: "",
        price: "",
        desciption: "",
        stock: "",
        author: {
            id: "",  /* objekt */
        name: "",
        lastName: "",
       
    }
    })
    
    useEffect(() => {
        loadBook()
      }, []);
    
    const loadBook = async () => {
        const result = await axios.get(`http://localhost:8080/book/byId/${id}`);
        setBook(result.data)
    };
    

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za add book pravoagolna linija */}
                    <h2 className='text-center m-4'>Book Details</h2> {/* ova e za vo pravoagolnikot da pisuva register */}
                    <div className="card">
                        <div className="card-header">
                                Details of book id : {book.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                         <b>Title:</b> 
                                         {book.title}
                                    <li className="list-group-item">
                                        <b>Genre:</b>
                                        {book.genre}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Price:</b>
                                        {book.price}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Description:</b>
                                        {book.description}
                                    </li>
                                    <li className="list-group-item">
                                        <b>In Stock:</b>
                                        {book.stock > 0 ? "Yes" : "No"}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Author:</b>
                                        {book.author.name} {book.author.lastName}
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>

    )
}