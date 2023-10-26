const express = require("express");

const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportsRoutes = require("./airport-routes");
const flightsRoutes = require("./flight-routes");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportsRoutes);
router.use("/flights", flightsRoutes);

router.get("/info", InfoController.info);

module.exports = router;
