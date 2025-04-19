import React from 'react';
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">
        {props.children}
      </div>
    </div>
  );
}

export const NavLink = (props) => {
  if (props.as === Link) {
    return (
      <Nav.Link
        as={Link}
        to={props.to}
        className={props.className}
      >
        <span className={`nav-item lead ${props.className}`}>
          {props.children}
        </span>
      </Nav.Link>
    );
  }

  return (
    <Nav.Link
      href={props.href}
      target={props.target}
      rel={props.rel}
      className={props.className}
    >
      <span className={`nav-item lead ${props.className}`}>
        {props.children}
      </span>
    </Nav.Link>
  );
}
