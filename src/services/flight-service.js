const { StatusCodes } = require("http-status-codes");

const { Op } = require("sequelize");

const { FlightRepository } = require("../repositories");

const AppError = require("../utils/errors/app-error");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      console.log(error);
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Can not create a new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllFlights(query) {
  let customFilter = {};
  // trips = MUM-DEL
  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
    // TODO: add a check that they are not same
  }
  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");

    customFilter.price = {
      [Op.between]: [minPrice, maxPrice == undefined ? 20000 : maxPrice],
    };
  }
  try {
    const flights = await flightRepository.getAllFlights(customFilter);
    return flights;
  } catch (error) {
    throw new AppError(
      "Can not featch data of all flights ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = { createFlight, getAllFlights };
