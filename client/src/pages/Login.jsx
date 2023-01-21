import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" name="" id="" placeholder="username" />
        <input type="password" name="" id="" placeholder="password" />
        <button>Login</button>
        <p>error</p>
        <span>Don't you have an account?</span>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}
