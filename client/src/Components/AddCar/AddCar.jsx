import React, { useEffect, useReducer, useRef} from "react";
import "./AddCar.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAgencies } from "../../redux/actions/agenciesActions";
import { addCar } from "../../redux/actions/carsActions";
import axios from "axios";

function AddCar() {
  const ON_CHANGE = "ON_CHANGE";
  const ON_CHANGE_AGENCY_NAME = "ON_CHANGE_AGENCY_NAME";

  const change = (state, action) => {
    switch (action.type) {
      case ON_CHANGE:
        return { ...state, [action.evt.target.name]: action.evt.target.value };
      case ON_CHANGE_AGENCY_NAME:
        return { ...state, agency_id: action.agency_id };
      default:
        return state;
    }
  };

  const agencies = useSelector((state) => state.agenciesReducer.agencies);

  const [newCar, send] = useReducer(change, {});

  const agenceNameRef = useRef("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAgencies());
  }, [dispatch]);

  const handleChangeAgencyName = async () => {
    await axios
      .get(`/api/agencies/getAgencyByName/${agenceNameRef.current.value}`)
      .then((response) => {
        send({
          type: ON_CHANGE_AGENCY_NAME,
          agency_id: response.data.data._id,
        });
      })
      .catch((err) => alert(err.response.data.msg));
  };

  const handleSubmit = () => {
    dispatch(addCar({ newCar }));
  };

  return (
    <div className="AddAgencyForm">
      <Form className="formContainer">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNumImmatriculation">
            <Form.Label>Numero d'immatriculation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le N° d'immatriculation svp"
              name="registration_number"
              required={true}
              autoComplete="registration_number"
              onChange={(evt) => send({ type: ON_CHANGE, evt })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCarMark">
            <Form.Label>Marque de la voiture</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez la marque svp"
              name="mark"
              required={true}
              autoComplete="mark"
              onChange={(evt) => send({ type: ON_CHANGE, evt })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCarModel">
            <Form.Label>Modéle de la voiture</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le modéle svp"
              name="model"
              autoComplete="model"
              onChange={(evt) => send({ type: ON_CHANGE, evt })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCarPower">
            <Form.Label>Puissance fiscale </Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le P.F svp"
              name="power"
              required={true}
              autoComplete="power"
              onChange={(evt) => send({ type: ON_CHANGE, evt })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCarFuelType">
            <Form.Label>Type de carburant</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le type de carburant"
              name="fuel_type"
              required={true}
              autoComplete="fuel_type"
              onChange={(evt) => send({ type: ON_CHANGE, evt })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCarColor">
            <Form.Label>Couleur de la voiture</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez la couleur svp"
              name="color"
              autoComplete="color"
              onChange={(evt) => send({ type: ON_CHANGE, evt })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCarHourPrice">
            <Form.Label>Cout de la location / h</Form.Label>
            <Form.Control
              type="number"
              name="hour_price"
              autoComplete="hour_price"
              placeholder="Entrer le cout de la location / h svp"
              onChange={(evt) => send({ type: ON_CHANGE, evt })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAgenceName">
            <Form.Label>Agence</Form.Label>
            <Form.Select
              defaultValue="Choisissez une agence svp..."
              ref={agenceNameRef}
              onChange={handleChangeAgencyName}
            >
              <option value="">...</option>
              {agencies.map((agency) => (
                <option key={agency._id} value={agency.name}>
                  {agency.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="primary" onClick={handleSubmit}>
          Ajouter une agence
        </Button>
      </Form>
    </div>
  );
}

export default AddCar;
