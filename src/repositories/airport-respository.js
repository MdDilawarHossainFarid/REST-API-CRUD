const CrudRepository = require("./crud-repository");
const { Airport } = require("../models");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
  // async someRowQuery(){you can write some custom or row query}
}

module.exports = AirportRepository;
