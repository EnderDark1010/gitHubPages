import { colors } from "@mui/material";
import { color, size } from "../../styles";

const cardStyle = {
  // background: "#190061",
  background: "#240090",
  margin: "2vh",
  "border-radius": "12px",
  "max-width": "100%",
  "box-shadow": "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
};
const imgStyle = {
  "max-width": "100%",
  "min-height": "30vh",
  "border-radius": "0 0 12px 12px",
  "object-fit": "cover",
};
const titleBoxStyle = {
  "padding-top": "1.5vh",
  "margin-bot": "1.vh",
  "margin-left": "2.5vh",
  color: "white",
};

export function Card(props) {
  const textStyle = {
    color: "#d6bfa7",
    "margin-left": "2.5vh",
    "margin-right": "2.5vh",
    "margin-bottom": "1vh",
    "margin-top": "1vh",
    "font-size": props.big ? size.textBig : size.text,
    "font-weight": "500",
  };
  const titleStyle = {
    color: color.title,
    "font-size": props.big ? size.titleBig : size.title,
    "font-weight": "600",
  };

  let title;
  let img;
  let text;
  if (props.title !== undefined)
    title = (
      <div style={titleBoxStyle}>
        <a style={titleStyle} href={props.link} target="blank">
          {props.title}
        </a>
      </div>
    );
  if (props.text !== undefined) {
    let tempText = props.text.map((txt) => (
      <>
        {txt}
        <br />
      </>
    ));
    text = <div style={textStyle}>{tempText}</div>;
  }

  if (props.img !== undefined)
    img = <img style={imgStyle} src={props.img} alt="" />;
  if (props.img !== undefined && props.link !== undefined)
    img = (
      <a href={props.link} target="blank">
        <img style={imgStyle} src={props.img} alt="" />
      </a>
    );

  return (
    <>
      <div style={cardStyle}>
        {title}
        {text}
        {img}
      </div>
    </>
  );
}
