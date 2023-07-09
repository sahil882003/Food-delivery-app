import React from 'react'
import { Link,useNavigate } from "react-router-dom";
export default function Login() {
  let navigate=useNavigate();
  const [credentials, setcredentials] = React.useState({mail: "", password: ""});
  function onchange(e) {
    e.preventDefault();
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  async function handlesubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mail: credentials.mail, password: credentials.password,})
    })
    const data = await response.json();
    if (!data.success)
    alert('enter valid credentials');
    else{
      localStorage.setItem('authToken',data.authToken);
      localStorage.setItem('mail',credentials.mail);
      navigate('/')
    }
     
  }
  return (
    <div className='container w-25 mt-5'>
      <form>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" onChange={onchange} value={credentials.mail} className="form-control" aria-describedby="emailHelp" name='mail' />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={onchange} value={credentials.password} className="form-control" name='password' />
        </div>


        <button onClick={handlesubmit} className="btn btn-success">Submit</button>
        <Link to='/createuser' className='m-3 btn btn-danger'>Create new user</Link>
      </form>
    </div>
  )

}
