import React from "react";
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const SingalMeal = (props) => {
  let history = useHistory();
  const { strMealThumb, strMeal, idMeal, strInstructions } = props.meal;
  const handeldetails = () => {
    history.push(`/meal/${idMeal}`);
  };
  return (
    <Col xs={12} md={4} sm={12}>
      <Card className="text-center">
        <Card.Img
          variant="top"
          src={strMealThumb}
          className="img-fluid w-75 m-auto py-3 rounded"
        />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strInstructions.slice(0, 100)}</Card.Text>
          <Button onClick={handeldetails} variant="primary">
            Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingalMeal;
