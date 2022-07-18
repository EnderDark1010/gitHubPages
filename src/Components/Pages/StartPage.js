import { Container, Row, Col } from "react-bootstrap";
import { Card } from "../Atoms/Card";

export function StartPage(props) {
  return (
    <Container>
      <Row>
        <Col lg={1} md={1}></Col>
        <Col lg={10} md={10}>
          <Card
            big={true}
            title="Who am I?"
            text={[
              "Name: Manuel A",
              "Job: Apprentice as a Software dev in the 3rd year at a big tech company",
              "Hobbies: Mainly gaming, hanging out with friends, watching anime(rarely), or reading",
              "Games: League, OSU!, MGRR",
              "Reading stuff: Re:Zero, Solo leveling, Omniscient Reader's Viewpoint and Chainsaw man",
              "Anime: Re:Zero, Steins Gate, Initial D, Fate Series",
              "",
            ]}
          />
        </Col>
        <Col lg={1} md={1}></Col>
      </Row>
    </Container>
  );
}
