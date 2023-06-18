import React from 'react'
import { Link } from 'react-router-dom'
import Users from '../pages/Users'

export default function Home() {
  return (
<div>
<nav className="home home-expand-lg home-dark bg-primary">

  <div className="container-fluid">
    <a className="home-brand" href="#">
      Books
     </a>
    <button className="home-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#homeSupportedContent" 
    aria-controls="homeSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="home-toggler-icon"></span>
    </button>
    
    <Link className="btn btn-outline-light" to="addBook">Add Book</Link>
    
    <Link className="btn btn-outline-light" to="books">Books</Link>

   
  </div>
  
</nav>
         
</div>




  )
}
