import React from 'react'
import { Link,useNavigate } from 'react-router-dom'


export default function SignUp() {
  const [credentials, setcredentials] = React.useState({name:"", mail: "", password: "",location:""});
  
  function onchange(e) {
    e.preventDefault();
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  async function handlesubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: credentials.name, mail: credentials.mail, password: credentials.password, location: credentials.location })
    })
    const data = await response.json();
    if(!data.success)
    alert('enter valid credebtials');
   
    
   

  }
  return (
    <div className='container w-25 mt-5'>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" onChange={onchange} value={credentials.name} className="form-control" aria-describedby="emailHelp" name='name' />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" onChange={onchange} value={credentials.mail} className="form-control" aria-describedby="emailHelp" name='mail' />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={onchange} value={credentials.password} className="form-control" name='password' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">location</label>
          <input type="text" onChange={onchange} value={credentials.location} className="form-control" name='location' />
        </div>

        <button onClick={handlesubmit} className="btn btn-success">Submit</button>
        <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
      </form>
    </div>
  )
}
