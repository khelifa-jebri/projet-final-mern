import React, { useState, useRef } from "react";
import "./AddAgency.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Regions } from "../../utils/regions";
import { useDispatch } from "react-redux";
import { addAgency } from "../../redux/actions/agenciesActions";

function AddAgency() {
  const regions = [...Regions];

  const directorName = useRef("");
  const directorEmail = useRef("");
  const directorPhone = useRef("");

  const addressNumber = useRef("");
  const addressStreet = useRef("");
  const addressRegion = useRef("");
  const addressPostalCode = useRef("");

  const [agencyInf, setAgencyInf] = useState({});
  const [director, setDirector] = useState({});
  const [address, setAddress] = useState({});

  const handleChangeAgencyInf = (e) => {
    setAgencyInf({ ...agencyInf, [e.target.name]: e.target.value });
  };

  const handleChangeDirector = () => {
    setDirector({
      ...director,
      fullName: directorName.current.value,
      email: directorEmail.current.value,
      phone_number: directorPhone.current.value,
    });
  };

  const handleChangeAddress = () => {
    setAddress({
      ...address,
      number: addressNumber.current.value,
      street: addressStreet.current.value,
      region: addressRegion.current.value,
      postal_code: addressPostalCode.current.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newAgency = {
      ...agencyInf,
      director,
      address,
    };
    dispatch(addAgency({ newAgency }));
  };

  return (
    <div className="AddAgencyForm">
      <Form className="formContainer">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nom de l'agence</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom de l'agence svp"
              name="name"
              required={true}
              autoComplete="name"
              onChange={handleChangeAgencyInf}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPoneNumber">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control
              type="number"
              placeholder="98000001"
              name="phone_number"
              required={true}
              autoComplete="phone_number"
              onChange={handleChangeAgencyInf}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              name="email"
              autoComplete="email"
              onChange={handleChangeAgencyInf}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>N° Rue</Form.Label>
            <Form.Control
              type="number"
              name="number"
              autoComplete="number"
              placeholder="Entrer le numéro svp"
              ref={addressNumber}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddressStreet">
            <Form.Label>Rue</Form.Label>
            <Form.Control
              type="text"
              name="street"
              autoComplete="street"
              placeholder="Entrez le rue svp"
              ref={addressStreet}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRegion">
            <Form.Label>Region</Form.Label>
            <Form.Select
              defaultValue="Choisissez une région svp..."
              onChange={handleChangeAddress}
              ref={addressRegion}
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
              placeholder="Entrez le code postale svp"
              ref={addressPostalCode}
              autoComplete="postal_code"
              onChange={handleChangeAddress}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDirectorName">
            <Form.Label>Nom du directeur</Form.Label>
            <Form.Control
              type="text"
              name="full_Name"
              placeholder="Entrez le nom du directeur svp"
              required={true}
              ref={directorName}
              autoComplete="full_Name"
              onChange={handleChangeDirector}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDirectorEmail">
            <Form.Label>Email du directeur</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              ref={directorEmail}
              autoComplete="on"
              onChange={handleChangeDirector}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDirectorPhone">
            <Form.Label>Numéro de téléphone du directeur</Form.Label>
            <Form.Control
              type="number"
              name="director_phone"
              placeholder="98000001"
              required={true}
              ref={directorPhone}
              autoComplete="director_phone"
              onChange={handleChangeDirector}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" onClick={handleSubmit}>
          Ajouter une agence
        </Button>
      </Form>
    </div>
  );
}

export default AddAgency;
