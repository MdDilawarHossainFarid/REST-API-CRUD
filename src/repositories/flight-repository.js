const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airport } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
  // async someRowQuery(){you can write some custom or row query}
  async getAllFlights(filter, sort) {
    const response = await this.model.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true,
        },
      ],
    });
    return response;
  }
}

module.exports = FlightRepository;
