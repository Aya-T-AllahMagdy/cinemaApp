import React, { useState } from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useHistory, Link } from "react-router-dom";
import SearchComponent from "../../SearchComponent/SearchComponent";
export default function NavbarComponent() {
  const [text, setText] = useState("");
  let history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  // const onSubmit = (e) => {
  //   //   e.preventDefault();
  //   // alert(text);
  //   setText("");
  //   history.push(`/search/${text}`);
  // };
  // const onChange = (e) => {
  //   setText(e.target.value);
  // };
  const handleLogOut = () => {
    localStorage.clear();
    window.location.pathname = "/login";
  };
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          Cinema App
        </Col>
        <Col xs={6} md={4}>
          {/* <input type="text" placeholder="search" /> */}
          {/* <Form
            inline
            onSubmit={onSubmit}
            onChange={onChange}
            value={text}
            autoComplete="off"
            className=" pb-lg-0"
          >
            <input
              type="search"
              id="search"
              className="mb-5"
              onSubmit={onSubmit}
              onChange={onChange}
              value={text}
            />
          </Form> */}
          <SearchComponent />
        </Col>
        <Col xs={6} md={4}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaUserCircle /> {user.username}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/watchlist">
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <button onClick={handleLogOut}>sign out</button>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
}
