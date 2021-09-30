import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push("/meals");
  };
  return (
    <section className="bg-light">
      <Container>
        <Row className="py-4">
          <Col xs={12} md={12}>
            <div className="inner">
              <h1 className="text-center py-5">Home page is coming soon</h1>
              <Button
                onClick={handelClick}
                variant="warning"
                className="d-block m-auto"
              >
                Go to Meals
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
