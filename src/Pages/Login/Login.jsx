import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
export default function Login(props) {
  const staticValue = { name: "Aya Magdy", password: "12345" };
  const [formValue, setFormValue] = useState({ username: "", password: "" });
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      history.push("/");
    }
  }, []);
  const cookies = new Cookies();
  const form = `${formValue.username},${formValue.password}`;
  cookies.set("cinemaApp", formValue.username, {
    path: "/login",
    maxAge: "43200",
  });
  cookies.get("cinemaApp");

  const updateField = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const printValues = (e) => {
    e.preventDefault();
    console.log(formValue.username, formValue.password);
  };
  //   const [isAuth, setIsAuth] = useState(false);

  return (
    <Container>
      <form onSubmit={printValues}>
        <input
          type="userName"
          name="username"
          placeholder="enter ur userName"
          className="w-25"
          value={formValue.username}
          onChange={updateField}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValue.password}
          className="w-25"
          onChange={updateField}
        />

        <button
          type="submit"
          value="Submit"
          onClick={() => [
            (window.location.href = "/"),
            // history.push("/", formValue.username),
            localStorage.setItem("user", JSON.stringify(formValue)),
          ]}
        >
          Submit
        </button>
      </form>
    </Container>
  );
}
