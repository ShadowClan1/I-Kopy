import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

export default function Signup() {
  
  const context = useContext(noteContext);
  const { setalerts } = context;
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    cP: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  const handleClick = async (name, email, password) => {
    
    const resp = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    alert('handle click pressed')
    const json = await resp.json(); 
    console.log(json);
    if (json.success) {
      setalerts({ type: "success", message: "Account created" });
      setTimeout(() => {
        setalerts({ type: "", message: "" });
      }, 1000);

      navigate("/login");
    } else {
      setalerts({ type: "danger", message: "Check details first" });
      setTimeout(() => {
        setalerts({ type: "", message: "" });
      }, 1000);
    }
  };
  return (
    <div>
      <h1>Sign up for i-KOPY</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={values.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            onChange={onChange}
            className="form-control"
            id="email"
            name="email"
            value={values.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={onChange}
            className="form-control"
            id="password"
            name="password"
            value={values.password}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>{" "}
          {values.cP != values.password && (
            <span
              className="text-muted"
              style={{ backgroundColor: "RGB(230, 153, 151, 0.3)", padding: 1 }}
            >
              ! password doesn't match with confirm password
            </span>
          )}
          <input
            type="password"
            onChange={onChange}
            className="form-control"
            id="password"
            name="cP"
            value={values.cP}
          />
        </div>

        <button
          type="submit"
          disabled={
            values.name < 3 ||
            values.email < 5 ||
            values.password < 8 ||
            values.cP != values.password
          }
          onClick={() => {
            handleClick(values.name, values.email, values.password);
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
        
      </form>
    </div>
  );
}
