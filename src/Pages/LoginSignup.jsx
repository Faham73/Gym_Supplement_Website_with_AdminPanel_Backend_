import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const login = async () => {
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <div className="loginsignup-header">
          <h1>{state}</h1>
          <div className="loginsignup-toggle">
            <button 
              className={state === "Login" ? "active" : ""}
              onClick={() => setState("Login")}
            >
              Login
            </button>
            <button 
              className={state === "Sign Up" ? "active" : ""}
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </button>
          </div>
        </div>
        
        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <div className="input-group">
              <input 
                name='username' 
                value={formData.username} 
                onChange={changeHandler} 
                type="text" 
                placeholder=" " 
              />
              <label>Your Name</label>
              <span className="input-highlight"></span>
            </div>
          )}
          
          <div className="input-group">
            <input 
              name='email' 
              value={formData.email} 
              onChange={changeHandler} 
              type="email" 
              placeholder=" " 
            />
            <label>Email Address</label>
            <span className="input-highlight"></span>
          </div>
          
          <div className="input-group">
            <input 
              name='password' 
              value={formData.password} 
              onChange={changeHandler} 
              type="password" 
              placeholder=" " 
            />
            <label>Password</label>
            <span className="input-highlight"></span>
          </div>
        </div>
        
        <div className="loginsignup-actions">
          {state === "Login" && (
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
          )}
        </div>
        
        <button 
          className="loginsignup-button"
          onClick={() => {state === "Login" ? login() : signup()}}
        >
          {state === "Login" ? "Login" : "Sign Up"}
          <span className="button-overlay"></span>
        </button>
        
        <div className="loginsignup-footer">
          <p>{state === "Login" ? "Don't have an account?" : "Already have an account?"} 
            <span onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}>
              {state === "Login" ? " Sign Up" : " Login"}
            </span>
          </p>
          <p className="terms">By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;