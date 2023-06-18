import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';



export default function ViewUser() {
    const { id } = useParams()

    const [user, setUser] = useState({ 
        id: "",  /* objekt */
        name: "",
        lastName: "",
        email: ""
    })
    
    useEffect(() => {
        loadUser()
      }, []);
    
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/byId/${id}`);
        setUser(result.data)
    };
    

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za add user pravoagolna linija */}
                    <h2 className='text-center m-4'>User Details</h2> {/* ova e za vo pravoagolnikot da pisuva register */}
                    <div className="card">
                        <div className="card-header">
                                Details of user id : {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                         <b>Name:</b> 
                                         {user.name}
                                    <li className="list-group-item">
                                        <b>Last Name:</b>
                                        {user.lastName}
                                    </li>
                                    <li className="list-group-item">
                                        <b>E-mail:</b>
                                        {user.email}
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/users"}>
                        Back to Users
                    </Link>
                </div>
            </div>
        </div>

    )
}