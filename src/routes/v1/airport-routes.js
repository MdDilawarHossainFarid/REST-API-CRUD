const express = require("express");

const router = express.Router();

const { AirportController } = require("../../controllers");

const { AirportMiddlewares } = require("../../middlewares");

//  /api/v1/airports POST
router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

//  /api/v1/airports GET
router.get("/", AirportController.getAirports);

//  /api/v1/airports GET
router.get("/:id", AirportController.getAirports);

//  /api/v1/airports DELETE
router.delete("/:id", AirportController.destroyAirport);

module.exports = router;
