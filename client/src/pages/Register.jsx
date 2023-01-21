import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" name="" id="" placeholder="username" required />
        <input type="email" name="" id="" placeholder="email " required />
        <input type="password" name="" id="" placeholder="password" required />
        <button>Login</button>
        <p>error</p>
        <span>Already have an account?</span>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}
