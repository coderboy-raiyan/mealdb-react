import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import SingalMeal from "../SingalMeal/SingalMeal";

const Meals = () => {
  const [userInput, setUserInput] = useState(" ");

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [userInput]);

  const handelSearch = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };
  return (
    <section>
      <div className="bg-light">
        <Container>
          <Row className="bg-light">
            <Col xs={12} md={8} className="m-auto py-5">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search your food"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={handelSearch}
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="meals my-5">
        <Container>
          <Row className="g-4">
            {meals == null
              ? false
              : meals.map((meal) => (
                  <SingalMeal meal={meal} key={meal.idMeal} />
                ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Meals;
