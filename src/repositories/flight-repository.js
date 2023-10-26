const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
  // async someRowQuery(){you can write some custom or row query}
}

module.exports = FlightRepository;
