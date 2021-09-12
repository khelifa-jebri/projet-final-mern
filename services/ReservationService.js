const reservationModel = require("../models/ReservationModel");
const carModel = require("../models/CarModel")

module.exports = {
    addNewReservation(start_date, end_date, client_id, car_id, res) {
        carModel.findById(car_id, (err, data) => {
            if (err) throw err;
            let duration_of_reservation = ((new Date(end_date).getTime() - new Date(start_date).getTime()) / 3600000);
            let cost = duration_of_reservation * data.hour_price;
            reservationModel.create({
                    start_date,
                    end_date,
                    cost,
                    client_id,
                    car_id
                })
                .then(data =>
                    res.json({
                        status: 200,
                        message: "Car reserved successfully.",
                        data: data
                    }))
                .catch(err =>
                    console.log(err)
                );
        })
    },

    findAllReservations(res) {
        reservationModel.find({})
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "All reservations",
                    data: data
                }))
            .catch(err =>
                console.log(err)
            );
    },

    findReservationById(id, res) {
        reservationModel.findById(id)
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "A reservation by id",
                    data: data
                }))
            .catch(err =>
                console.log(err)
            );
    },

    updateReservation(id, start_date, end_date, car_id, res) {
        carModel.findById(car_id, (err, data) => {
            if (err) throw err;
            let duration_of_reservation = (end_date.getTime() - start_date.getTime()) / 3600000;
            let cost = duration_of_reservation * data.hour_price;
            reservationModel.findByIdAndUpdate(id, { start_date, end_date, cost, car_id })
                .then(data =>
                    res.status(200).json({
                        status: 200,
                        message: "The updated reservation ...",
                        data: data
                    })
                )
                .catch(err =>
                    console.log(err)
                );
        })
    },

    acceptReservation(id, res) {
        reservationModel.findByIdAndUpdate(id, { state: "in_progress" })
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "The accepted reservation ...",
                    data: data
                }))
            .catch(err =>
                console.log(err)
            );
    },

    refuseReservation(id, res) {
        reservationModel.findByIdAndUpdate(id, { state: "refused" })
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "The refused reservation ...",
                    data: data
                }))
            .catch(err =>
                console.log(err)
            );
    },

    terminateReservation(id, res) {
        reservationModel.findByIdAndUpdate(id, { state: "terminated" })
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "The terminated reservation ...",
                    data: data
                }))
            .catch(err =>
                console.log(err)
            );
    },

    deleteReservation(id, res) {
        reservationModel.findByIdAndDelete(id)
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "The deleted reservation ...",
                    data: data
                }))
            .catch(err =>
                console.log(err)
            );
    }
}