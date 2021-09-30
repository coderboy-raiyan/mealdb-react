import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory, useParams } from "react-router";

const MealDetails = () => {
  let { mealId } = useParams();
  const [meal, setMeal] = useState({});
  const history = useHistory();
  const goBack = () => {
    history.push("/meals");
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [mealId]);
  const { strMeal, strCategory, strInstructions } = meal;
  return (
    <div>
      <Container>
        <Row className="align-items-center justify-content-center vh-100">
          <Col xs={6} md={6}>
            <Card>
              <Card.Header className="fs-4">{strMeal}</Card.Header>
              <Card.Body>
                <Card.Title>{strCategory}</Card.Title>
                <Card.Text>{strInstructions}</Card.Text>
                <Button onClick={goBack} variant="primary">
                  Go back
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MealDetails;
