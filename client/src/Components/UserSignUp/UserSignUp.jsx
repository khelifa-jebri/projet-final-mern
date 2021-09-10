import React, { useState } from "react";
import { Regions } from "../../utils/regions";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./UserSignUp.css";

function UserSignUp() {
  const regions = [...Regions];

  const [userInf, setUserInf] = useState({});
  const [address, setAddress] = useState({});

  const history = useHistory();

  const handleChangeUserInf = (e) => {
    setUserInf({ ...userInf, [e.target.name]: e.target.value });
  };

  const handleChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const user = { ...userInf, address };
    console.log(user.password);
    axios
      .post("/api/users/registerUser", user)
      .then(() => alert("Registration successfully ..."))
      .catch((err) => alert("Registration Failed ..."));
    history.push("/");
  };

  return (
    <div className="SignUpForm">
      <Form className="formContainer">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCin">
            <Form.Label>N° CIN</Form.Label>
            <Form.Control
              type="number"
              placeholder="Entrez le CIN svp"
              name="cin"
              required={true}
              autoComplete="cin"
              onChange={handleChangeUserInf}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom svp"
              name="firstName"
              required={true}
              autoComplete="firstName"
              onChange={handleChangeUserInf}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le prénom svp"
              name="lastName"
              required={true}
              autoComplete="lastName"
              onChange={handleChangeUserInf}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDateOfBirth">
            <Form.Label>Date de naissance</Form.Label>
            <Form.Control
              type="date"
              name="date_of_birth"
              autoComplete="date_of_birth"
              onChange={handleChangeUserInf}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez l'email svp"
              name="email"
              required={true}
              autoComplete="email"
              onChange={handleChangeUserInf}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhoneNumber">
            <Form.Label>N° Tel</Form.Label>
            <Form.Control
              type="number"
              placeholder="Entrez le numéro de téléphone svp"
              name="phone_number"
              required={true}
              autoComplete="phone_number"
              onChange={handleChangeUserInf}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Genre</Form.Label>

            <Form.Select
              aria-label="Floating label select example"
              name="gender"
              onChange={handleChangeUserInf}
            >
              <option value="">--------</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez le mot de passe svp"
              name="password"
              required={true}
              autoComplete="password"
              onChange={handleChangeUserInf}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridConfirmPassword">
            <Form.Label>Mot de passe de confirmation</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez de nouveau le mot de passe svp"
              name="password_confirm"
              required={true}
              autoComplete="password_confirm"
              onChange={handleChangeUserInf}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddressNumber">
            <Form.Label>N° Rue</Form.Label>
            <Form.Control
              type="number"
              placeholder="Entrez le numéro"
              name="number"
              autoComplete="number"
              onChange={handleChangeAddress}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddressStreet">
            <Form.Label>Rue</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le rue svp"
              name="street"
              autoComplete="street"
              onChange={handleChangeAddress}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRegion">
            <Form.Label>Region</Form.Label>
            <Form.Select
              defaultValue=""
              name="region"
              autoComplete="regin"
              onChange={handleChangeAddress}
            >
              {regions
                .sort((a, b) => a.localeCompare(b))
                .map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPostalCode">
            <Form.Label>Code postale</Form.Label>
            <Form.Control
              type="number"
              name="postal_code"
              autoComplete="on"
              onChange={handleChangeAddress}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default UserSignUp;
