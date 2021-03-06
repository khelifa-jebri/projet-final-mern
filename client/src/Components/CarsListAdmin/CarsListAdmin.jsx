import React, { useEffect, useState, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/carsActions";
import { getAgencies } from "../../redux/actions/agenciesActions";
import { FloatingLabel, Form } from "react-bootstrap";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../utils/regions";
import CarCardAdmin from "../CarCardAdmin/CarCardAdmin";

function CarsListAdmin() {
  let user = {};
  jwt.verify(localStorage.getItem("JWT"), SECRET_KEY, (err, data) => {
    if (err) throw err;
    user = data.user;
  });

  const cars = useSelector((state) => state.carsReducer.cars);
  const agencies = useSelector((state) => state.agenciesReducer.agencies);

  const [agency, setAgency] = useState({});

  const selectedAgencyName = useRef("");

  function handleChange() {
    const agencyAux = agencies.find(
      (a) => a.name === selectedAgencyName.current.value
    );
    setAgency(agencyAux);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
    dispatch(getAgencies());
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div style={{ margin: "20px", width: "30%" }}>
        <h1>The Cars list</h1>
        <FloatingLabel
          controlId="floatingSelect"
          label="Choisissez l'agence SVP"
        >
          <Form.Select
            aria-label="Floating label select example"
            ref={selectedAgencyName}
            onChange={handleChange}
          >
            <option value="">...</option>
            {agencies.map((agency) => (
              <option key={agency._id} value={agency.name}>
                {agency.name}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {selectedAgencyName.current.value !== ""
          ? cars
              .filter(
                (car) =>
                  car.is_available === true && car.agency_id === agency._id
              )
              .map((car) => <CarCardAdmin key={car._id} car={car} user={user} />)
          : cars
              .filter((car) => car.is_available === true)
              .map((car) => <CarCardAdmin key={car._id} car={car} user={user} />)}
      </div>
    </Fragment>
  );
}

export default CarsListAdmin;
