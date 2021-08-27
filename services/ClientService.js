const clientModel = require("../models/ClientModel");

module.exports = {
    addNewClient(cin, firstName, lastName, phone, email, adress, res) {
        clientModel.create({
            cin,
            firstName,
            lastName,
            phone,
            email,
            adress
        }, (err, data) => {
            if (err) throw err;
            else res.json({
                status: 200,
                message: "Client added successfully.",
                data: data
            });
        })
    },

    findAllClients(res) {
        clientModel.find({})
            .then(data => {
                res.status(200).json({
                    status: 200,
                    msg: "All Clients : ",
                    Clients: data
                })
            })
            .catch(err => console.log(err))
            //res.send("All clients All clients All clients All clients");
    }
}