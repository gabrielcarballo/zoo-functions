const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const gettigRespEmployee = data.employees.find((e) => e.id === id).responsibleFor[0];
  console.log(gettigRespEmployee);
  const gettingAnimals = data.species.find((a) => a.id === gettigRespEmployee).residents;
  const age = gettingAnimals.reduce((acc, animal) => (acc > animal.age ? acc : animal.age), 0);
  console.log(gettingAnimals);
  console.log(data.species.residents);
  const finalInfo = gettingAnimals.find((z) => z.age === age);
  console.log(finalInfo);
  return Object.values(finalInfo);
}

module.exports = getOldestFromFirstSpecies;
