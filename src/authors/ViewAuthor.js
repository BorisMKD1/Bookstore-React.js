import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';



export default function ViewAuthor() {
    const { id } = useParams()

    const [author, setAuthor] = useState({ 
        id: "",  /* objekt */
        name: "",
        lastName: "",
        email: ""
    })
    
    useEffect(() => {
        loadAuthor()
      }, []);
    
    const loadAuthor = async () => {
        const result = await axios.get(`http://localhost:8080/author/byId/${id}`);
        setAuthor(result.data)
    };
    

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za add author pravoagolna linija */}
                    <h2 className='text-center m-4'>Author Details</h2> {/* ova e za vo pravoagolnikot da pisuva register */}
                    <div className="card">
                        <div className="card-header">
                                Details of author id : {author.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                         <b>Name:</b> 
                                         {author.name}
                                    <li className="list-group-item">
                                        <b>Last Name:</b>
                                        {author.lastName}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Description:</b>
                                        {author.description}
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/authors"}>
                        Back to Authors
                    </Link>
                </div>
            </div>
        </div>

    )
}