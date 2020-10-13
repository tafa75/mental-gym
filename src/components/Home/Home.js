 
import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import   './Home.css'


const Home = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);
const signInWithEmailAndPasswordHandler = 
        (event,email, password) => {
            event.preventDefault();
};

  const onChangeHandler = (event) => {
      const {name, value} = event.currentTarget;

      if(name === 'userEmail') {
          setEmail(value);
      }
      else if(name === 'userPassword'){
        setPassword(value);
      }
  };

return (
<div className="mt-8">
  <h1 className=" font-bold"></h1>
  <div className="border border-blue">
    {error !== null && <div className = "py">{error}</div>}
    <form className="">
     <br></br> <label htmlFor="userEmail" className="block">
        Email:
      </label>
      <br></br><input
        type="email"
        className="my-1 p-1 w-full"
        name="userEmail"
        value = {email}
        placeholder="exemple@gmail.com"
        id="userEmail"
        onChange = {(event) => onChangeHandler(event)}
      />
      <br></br><label htmlFor="userPassword" className="block">
        Password:
      </label>
     
      <br></br>  <input
        type="password"
        className="inputpw"
        name="userPassword"
        value = {password}
        placeholder="Your Password"
        id="userPassword"
        onChange = {(event) => onChangeHandler(event)}
      />
     <br></br> <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
        Sign in
      </button>
    </form>
    <p className="text-center my-3">or</p>
    <button
      className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">
      Sign in with Google
    </button>
    <p className="text-center my-3">
      Don't have an account?{" "}
      <Link to="signUp" className="text-blue-500 hover:text-blue-600">
        Sign up here
      </Link>{" "}
      <br />{" "}
      <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
        Forgot Password?
      </Link>
    </p>
  </div>
</div>
);
};

export default Home