import React, { useState, useRef } from "react";
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

  const handleChangeDirector = (e) => {
    setDirector({
      ...director,
      fullName: directorName.current.value,
      email: directorEmail.current.value,
      phone_number: directorPhone.current.value,
    });
  };

  const handleChangeAddress = (e) => {
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
    <div style={{ margin: "5%" }}>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nom de l'agence</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom de l'agence svp"
              name="name"
              required={true}
              autoComplete="on"
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
              autoComplete="on"
              onChange={handleChangeAgencyInf}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              name="email"
              autoComplete="on"
              onChange={handleChangeAgencyInf}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>N° Rue</Form.Label>
            <Form.Control type="number" ref={addressNumber} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddressStreet">
            <Form.Label>Rue</Form.Label>
            <Form.Control
              type="text"
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
              ref={addressPostalCode}
              autoComplete="on"
              onChange={handleChangeAddress}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDirectorName">
            <Form.Label>Nom du directeur</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom du directeur svp"
              required={true}
              ref={directorName}
              autoComplete="on"
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
              placeholder="98000001"
              ref={directorPhone}
              autoComplete="on"
              onChange={handleChangeDirector}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Ajouter une agence
        </Button>
      </Form>
    </div>
  );
}

export default AddAgency;
