import { Container, Row, Col } from "react-bootstrap";
import { Card } from "../Atoms/Card";

export function CardPage(props) {
  return (
    <Container fluid>
      <Row>
        {props.data.map((data, key) => {
          return (
            <>
              <Col lg={3} md={4}>
                <Card
                  title={data.title}
                  img={data.img}
                  text={data.text}
                  link={data.link}
                />
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
}
