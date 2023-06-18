import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from 'react-router-dom'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import axios from 'axios';
import Button from '@mui/material/Button';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorElBooks, setAnchorElBooks] = React.useState(null);
  const isBooksMenuOpen = Boolean(anchorElBooks);

  const handleProfileBooksMenuOpen = (event) => {
    setAnchorElBooks(event.currentTarget);
  };

  const handleBooksMenuClose = () => {
    setAnchorElBooks(null);
  };







  const [anchorElAuthors, setAnchorElAuthors] = React.useState(null);
  const isAuthorsMenuOpen = Boolean(anchorElAuthors);

  const handleProfileAuthorsMenuOpen = (event) => {
    setAnchorElAuthors(event.currentTarget);
  };

  const handleAuthorsMenuClose = () => {
    setAnchorElAuthors(null);
  };









  const [searchTerm, setSearchTerm] = React.useState();
  const onInputChange = (e) => {
    setSearchTerm(e.target.value); /* ke dodava novi objekti */
    console.log(searchTerm)
  }
  const [book, setBook] = useState()
  let navigate=useNavigate()

  const searchBook = async () => {
    const result = await axios.get(`http://localhost:8080/book/searchBook?search=${searchTerm}`)
    setBook(result.data)
    console.log(book[0].id)
  }

// OVAAAA EEEEE PRV MENUUUUUUUUUUUUUUUUUU
  const menuId = 'primary-search-account-menu';
  const renderBooksMenu = (
    <Menu 
      anchorEl={anchorElBooks}
      anchorOrigin={{
        vertical: 50,
        horizontal: 120,
      }}
      // PaperProps={{
      //      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        square: 'true'

      }}
      open={isBooksMenuOpen}
      onClose={handleBooksMenuClose}
    >
      <MenuItem onClick={handleBooksMenuClose}><Link to="viewBooks" style={{color: 'black'}}>VIEW BOOKS</Link></MenuItem>
      <MenuItem onClick={handleBooksMenuClose}><Link to="addBook" style={{color: 'black'}}>ADD BOOK</Link></MenuItem>
          
    </Menu>
  );








  const renderAuthorsMenu = (
    <Menu 
      anchorEl={anchorElAuthors}
      anchorOrigin={{
        vertical: 50,
        horizontal: 120,
      }}
      // PaperProps={{
      //      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        square: 'true'

      }}
      open={isAuthorsMenuOpen}
      onClose={handleAuthorsMenuClose}
    >
      <MenuItem onClick={handleAuthorsMenuClose}><Link to="authors" style={{color: 'black'}}>VIEW AUTHORS</Link></MenuItem>
      <MenuItem onClick={handleAuthorsMenuClose}><Link to="addAuthor" style={{color: 'black'}}>ADD AUTHOR</Link></MenuItem>
     
    </Menu>
  );








  
  // books code style end
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>BOOKSTORE</Link> 
          </Typography>
          
          <Search >
          {/* <IconButton onClick={searchBook} >
              <SearchIcon />
          </IconButton> */}
           <Link to={{ pathname: `/searchBook/${searchTerm}`}} >
              <SearchIcon />
          </Link>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={(e) => onInputChange(e)} />
          </Search>
          {/* <Link to={`/viewBook/${book[0].id}`}>
          <Button  size="small"
            edge="start"
            color="inherit" onClick={searchBook} variant="outlined">search</Button>
</Link> */}
          <IconButton onClick={handleProfileBooksMenuOpen}
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
           >
            <AutoStoriesIcon />
            BOOKS
          </IconButton>




          <IconButton onClick={handleProfileAuthorsMenuOpen}
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
           >
            <HistoryEduIcon  />
            AUTHORS
          </IconButton>







          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Link className="btn btn-outline-light" to="users">
                <GroupsIcon /> View Users
              </Link>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Link className="btn btn-outline-light" to="addUser">
                <PersonAddAltIcon />Add User
              </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileBooksMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderBooksMenu}
      {renderAuthorsMenu}
    </Box>

  );
}
