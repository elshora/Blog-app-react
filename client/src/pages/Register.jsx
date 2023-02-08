import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../store/slices/authSlice";
import { toast } from "react-toastify";

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
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
      dispatch(register(inputs));
      console.log("done");
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };
  return (
    <div className="auth">
      <h2 className="display-5">Register</h2>
      <form className="rounded shadow">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          required
          onChange={onChangeHandler}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email "
          required
          onChange={onChangeHandler}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
          onChange={onChangeHandler}
        />
        <button onClick={handelSubmit}>
          {isLoading ? "loading..." : "register"}
        </button>
        <div className="d-flex flex-column gap-1">
          {isError && <p>{message}</p>}
          <span>Already have an account?</span>
          <Link className="text-center fs-5 text-primary" to="/login">
            login
          </Link>
        </div>
      </form>
    </div>
  );
}
