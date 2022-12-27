import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

export default function Login(props) {
  const [value, setvalue] = useState({ email: "", password: "" });
  const context = useContext(noteContext);
  const { setalerts } = context;
  let navigate = useNavigate();
  const hostC = "http://localhost:5000";
  const handleSubmit = async (email, password) => {
    console.log("chl peya");
    const response = await fetch(`${hostC}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    console.log("peya  chl");
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      setalerts({ type: "success", message: "Logged in" });
      setTimeout(() => {
        setalerts({ type: "", message: "" });
      }, 1000);
      navigate("/");
    } else {
      setalerts({ type: "danger", message: "Invalid credentials" });
      setTimeout(() => {
        setalerts({ type: "", message: "" });
      }, 1000);
    }
  };
  const onChange = (event) => {
    setvalue({ ...value, [event.target.name]: event.target.value });
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login  i-KOPY </h1>
      <form onSubmit={handleSubmit1}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChange}
            name="password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleSubmit(value.email, value.password);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
