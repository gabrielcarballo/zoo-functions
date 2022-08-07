const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimalsSheet = data.species.find((element) => element.name === animal).residents;
  return getAnimalsSheet.every((e) => e.age > age);
}

module.exports = getAnimalsOlderThan;
