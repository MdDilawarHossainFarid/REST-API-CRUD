const CrudRepository = require("./crud-repository");
const { City } = require("../models");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
  // async someRowQuery(){you can write some custom or row query}
}

module.exports = CityRepository;
