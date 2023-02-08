import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../store/slices/authSlice";
import { toast } from "react-toastify";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isSuccess) {
      navigator("/");
      toast.success("You Logged In");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigator, dispatch]);
  const onChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(login(inputs));
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={onChangeHandler}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={onChangeHandler}
        />
        <button onClick={handelSubmit}>
          {isLoading ? "loading..." : "login"}
        </button>
        <div className="d-flex flex-column text-center">
          {isError && <p>{message}</p>}
          <span>Don't you have an account?</span>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}
