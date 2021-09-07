import React, { useEffect, useState, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/carsActions";
import { getAgencies } from "../../redux/actions/agenciesActions";
import CarCard from "../CarCard/CarCard";
import { FloatingLabel, Form } from "react-bootstrap";

function CarsList() {
  const [agency, setAgency] = useState({});

  const selectedAgencyName = useRef("");

  const cars = useSelector((state) => state.carsReducer.cars);
  const agencies = useSelector((state) => state.agenciesReducer.agencies);

  const handleChange = (e) => {
    const agencyName = selectedAgencyName.current.value;
    console.log(agencyName);

    setAgency({ ...agency, ...agencies.filter((a) => a.name === agencyName) });
    console.log(agency);
  };

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
