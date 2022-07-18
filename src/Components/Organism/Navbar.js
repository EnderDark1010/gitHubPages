import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar as Nb, Nav } from "react-bootstrap";
import { pages } from "../../data";
import { NavElement } from "../Atoms/NavElement";

const pageStyle = {
  height: "7vh",
  "border-radius": "100px",
  "margin-left": "20%",
};
const navStyle = {
  "background-color": "#190061",
  "box-shadow": "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
  "margin-bottom": "20px",
};
export function Navbar(props) {
  return (
    <>
      <Nb style={navStyle} collapseOnSelect expand="sm">
        <Nb.Brand>
          <Link to="/gitHubPages">
            <img style={pageStyle} src="https://i.imgur.com/bzDIE8X.jpg" />
          </Link>
        </Nb.Brand>
        <Nb.Toggle aria-controls="responsive-Nb-nav" />
        <Nb.Collapse id="responsive-Nb-nav">
          <Nav className="mr-auto">
            {pages.map((page) => {
              return <NavElement title={page.title} endpoint={page.endpoint} />;
            })}
          </Nav>
        </Nb.Collapse>
      </Nb>
      <Outlet />
    </>
  );
}
