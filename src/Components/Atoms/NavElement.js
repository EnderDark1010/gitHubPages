import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const navElementStyle = {
  padding: "0",
  "background-color": "#240090",
  color: "white",
  "margin-top": "1vh",
  "margin-left": "1vh",
  "border-left": "4px solid",
  "box-shadow": "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
  "border-radius": "10px",
};
const linkStyle = {
  color: "white",
  "text-decoration": "underline",
  "text-decoration-color": "white",
  padding: "2vh",
  "font-size": "1.5rem",
  "font-weight": "600",
};
export function NavElement(props) {
  console.log(props);
  console.log(props.endpoint !== undefined ? props.endpoint : "");
  return (
    <Nav.Link style={navElementStyle}>
      <Link to={props.endpoint !== undefined ? props.endpoint : ""}>
        <div style={linkStyle}>{props.title}</div>
      </Link>
    </Nav.Link>
  );
}
