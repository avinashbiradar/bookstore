import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assests/lost.jpg'
import Error from '../ErrorPage/error.scss'
const NotFound = () => (
  <div >
 
  <div className="image-content">
  <h3>404 - Page Not Found </h3>
  <p>This isn't the page you're looking for .
  <p>Please click on the below link "Go Home..." to continue your surfing </p>
  </p>
  </div>
  {localStorage.getItem('bookStoreToken')?(
    <div className="link-content">
    <Link to="/dashboard">
    <h1>Go to dashboard . . .</h1>
    </Link>
    </div>
  ):( <div className="link-content">
  <Link to="/login">
  <h1>Go to login . . .</h1>
  </Link>
  </div>)}
  </div>
);

export default NotFound;