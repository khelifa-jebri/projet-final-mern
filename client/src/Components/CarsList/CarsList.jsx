import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/carsActions";
import CarCard from "../CarCard/CarCard";

function CarsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
    // eslint-disable-next-line
  }, []);

  const cars = useSelector((state) => state.carsReducer.cars);
  return (
    <Fragment>
      <h1 style={{ margin: "20px" }}>this is the cars List</h1>
      {cars
        .filter((car) => car.is_available === true)
        .map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
    </Fragment>
  );
}

export default CarsList;
