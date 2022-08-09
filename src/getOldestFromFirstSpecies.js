const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const gettigRespEmployee = data.employees.find((e) => e.id === id).responsibleFor[0];
  const gettingAnimals = data.species.find((a) => a.id === gettigRespEmployee).residents;
  const age = gettingAnimals.reduce((acc, animal) => (acc > animal.age ? acc : animal.age), 0);
  const finalInfo = gettingAnimals.find((z) => z.age === age);
  return Object.values(finalInfo);
}

module.exports = getOldestFromFirstSpecies;
