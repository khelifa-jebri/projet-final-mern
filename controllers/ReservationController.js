const reservationService = require("../services/ReservationService");


module.exports = {
    addReservation(req, res) {
        const { start_date, end_date, client_id, car_id } = req.body;
        reservationService.addNewReservation(start_date, end_date, client_id, car_id, res);
    },

    findAllReservations(req, res) {
        reservationService.findAllReservations(res);
    },

    findReservationById(req, res) {
        const { id } = req.params;
        reservationService.findReservationById(id, res);
    },

    updateReservation(req, res) {
        const { id } = req.params;
        const { start_date, end_date, car_id } = req.body;
        let start_time = new Date(start_date);
        let end_time = new Date(end_date);
        reservationService.updateReservation(id, start_time, end_time, car_id, res);
    },

    acceptReservation(req, res) {
        const { id } = req.params;
        reservationService.acceptReservation(id, res);
    },

    refuseReservation(req, res) {
        const { id } = req.params;
        reservationService.refuseReservation(id, res);
    },

    deleteReservation(req, res) {
        const { id } = req.params;
        reservationService.deleteReservation(id, res);
    }
}