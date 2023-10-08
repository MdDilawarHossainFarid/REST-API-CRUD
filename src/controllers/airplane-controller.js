const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require("../services");

/**
 * POST : /airplanes
 * req-body {modleNumber: 'airbus320', capacity:200}
 *
 */

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      moduleNumber: req.body.moduleNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully create an airplane",
      data: response,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating airplane",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
