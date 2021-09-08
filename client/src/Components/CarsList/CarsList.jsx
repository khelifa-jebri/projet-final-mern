import React, { useEffect, useState, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/carsActions";
import { getAgencies } from "../../redux/actions/agenciesActions";
import CarCard from "../CarCard/CarCard";
import { FloatingLabel, Form } from "react-bootstrap";

function CarsList() {
  const cars = useSelector((state) => state.carsReducer.cars);
  const agencies = useSelector((state) => state.agenciesReducer.agencies);

  const [agency, setAgency] = useState({});
  const [filtredCars, setFiltredCars] = useState({});

  const selectedAgencyName = useRef("");

  async function handleChange(e) {
    const agencyName = selectedAgencyName.current.value;
    console.log(agencyName);

    const agencyAux = agencies.find((a) => a.name === agencyName);
    setAgency(agencyAux);

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].agency_id === agency._id) {
        await setFiltredCars({...filtredCars, ...cars[i]});
      }
    }
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
            <option>...</option>
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
        {cars
          .filter((car) => car.is_available === true)
          .map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
      </div>
    </Fragment>
  );
}

export default CarsList;
