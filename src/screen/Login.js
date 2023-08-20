import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar1';


export default function Login() {

    const [credentials, setcredentials] = useState({email: "", password: "" })
let navigate = useNavigate();
// const apiUrl = "http://localhost:4000/api/loginuser" || "https://food-lecp.onrender.com/api/loginuser";
const apiUrl = process.env.REACT_APP_API_URL;
   
const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
        const response = await fetch(`https://${apiUrl}/api/loginuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credentials ")
        }
        if (json.success) {
            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate("/");
        }
    }
    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
          <div>
                <Navbar1 />
            </div>
            <div className="container" style={{"marginBottom":"40px", "marginTop":"40px"}}>
                <form onSubmit={handleSubmit} >


                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onchange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onchange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new user</Link>
                </form>
            </div>
            <div>

<Footer />
</div>
        </>
    )
}
