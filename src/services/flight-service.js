const { StatusCodes } = require("http-status-codes");

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

module.exports = { createFlight };
