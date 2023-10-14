const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
  // async someRowQuery(){you can write some custom or row query}
}

module.exports = AirplaneRepository;
