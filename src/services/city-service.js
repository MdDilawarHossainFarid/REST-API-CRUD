const { StatusCodes } = require("http-status-codes");

const { CityRepository } = require("../repositories");

const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const City = await cityRepository.create(data);
    return City;
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      console.log(error);
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Can not create a new City object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createCity };
