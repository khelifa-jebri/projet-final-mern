const express = require("express");
const ConnectDB = require("./config/ConnectDB");
require("dotenv").config({ path: "./config/.env" });

const app = express();

//Middelwares
app.use(express.json());


//Creation de server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
        if (err) throw err;
        else console.log(`The server is running on PORT = ${PORT}`);
    })
    .setTimeout(30000);

//Connection BD
ConnectDB();

//connecting the routes 
app.use("/api/cars/", require("./routes/CarRoutes"));
app.use("/api/clients/", require("./routes/ClientRoutes"));
app.use("/api/agencies/", require("./routes/AgencyRoutes"));
app.use("/api/adresses/", require("./routes/AddressRoutes"));