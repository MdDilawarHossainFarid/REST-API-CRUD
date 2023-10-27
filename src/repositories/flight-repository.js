const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
  // async someRowQuery(){you can write some custom or row query}
  async getAllFlights(filter) {
    const response = await this.model.findAll({
      where: filter,
    });
    return response;
  }
}

module.exports = FlightRepository;
