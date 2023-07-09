import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import Modal  from './Modal'
import Cart from './Screens/Cart';

export default function Navbar () {
    const navigate=useNavigate();
    const cart=useSelector(state=> state.cart);
    const [cartview,setcartview]=React.useState(false);
    function logout(){
        localStorage.removeItem('authToken');
        localStorage.removeItem('mail');
        navigate('/login');
    }
    return (
        <div className='bg-body-muted bg-success text-white '>
        <nav className="navbar navbar-expand-lg  "  >
  <div className="container-fluid">
    <Link className="navbar-brand fs-2 fst-italic text-white" to="/">foodies destination</Link>
    <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-success w-100 h-100">X</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item ">
          <Link className="nav-link active text-white fs-5" aria-current="page" to="/home">Home</Link>
          
        </li>
        {
         (localStorage.getItem('authToken'))?
         <li className="nav-item ">
          <Link className="nav-link active text-white fs-5" aria-current="page" to="/myorders">Myorders</Link>
         </li>:""
         
        }
        
      </ul>
      {(!localStorage.getItem('authToken'))?
      <div className='d-flex'>
      
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
       
          <Link className="btn bg-white text-success mx-1" to="/createuser">Sign Up</Link>
       
      </div>:
      <div className='d-flex  flex-sm-column flex-md-column flex-column flex-lg-row '>
         <div className='btn bg-white text-success mx-1 m-3 ' style={{maxWidth:'160px'}} onClick={e=> setcartview(true)}>My cart <Badge bg='danger'>{cart.length}</Badge></div>
         {
          (cartview)?<Modal onClose={()=>{setcartview(false)}}><Cart/></Modal>:null
         }
         <div className='btn bg-white text-danger mx-1 m-3 ' style={{maxWidth:'160px'}} onClick={logout}>Logout</div>
      </div>
      }
    </div>
  </div>
</nav>

</div>
       
    );
}
