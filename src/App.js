
import './App.css';
import {Helmet} from "react-helmet";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from './components/Navbar2';
import Users from './users/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

import AddBook from './books/AddBook';
import ViewBook from './books/ViewBook';
import ViewBooks from './books/ViewBooks';
import Books from './books/Books';
import SearchBook from './books/SearchBooks'
import EditBook from './books/EditBook'
import BuyBook from './books/BuyBook'
import AddAuthor from './authors/AddAuthor';
import ViewAuthor from './authors/ViewAuthor';
import ViewAuthors from './authors/ViewAuthors';
import EditAuthor from './authors/EditAuthor';






function App() {
  return (
    <div className="App">

      
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bookstore</title>
                <link rel="canonical" href="http://localhost:3000/" />
                <meta name="description" content="Bookstore" />

            </Helmet>
    
      <Router>
        <Navbar2 />
        <Routes>
        <Route exact path="/users" element={<Users/>}/>
        <Route exact path="/addUser" element={<AddUser/>}/>
        <Route exact path="/editUser/:id" element={<EditUser/>}/>
        <Route exact path="/viewUser/:id" element={<ViewUser/>}/>

        <Route exact path="/" element={<Books/>}/>
        <Route exact path="/addBook" element={<AddBook/>}/>
        <Route exact path="/viewBook/:id" element={<ViewBook/>}/>
        <Route exact path="/editBook/:id" element={<EditBook/>}/>
        <Route exact path="/viewBooks" element={<ViewBooks/>}/>
        <Route exact path="/searchBook/:searchTerm" element={<SearchBook/>}/>
        <Route exact path="/buyBook/:id" element={<BuyBook/>}/>

        <Route exact path="/addAuthor" element={<AddAuthor/>}/>
        <Route exact path="/viewAuthor/:id" element={<ViewAuthor/>}/>
        <Route exact path="/editAuthor/:id" element={<EditAuthor/>}/>
        <Route exact path="/authors" element={<ViewAuthors/>}/>

      
        </Routes>
      
      </Router>
     

          
    </div>

    


  );
}

export default App;
