const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
  }

  const targetSpecies = data.species.find((e) => e.name === animal.specie);

  if (!targetSpecies) return 0;

  if (animal.sex) {
    return targetSpecies.residents.filter((e) => e.sex === animal.sex).length;
  }

  return targetSpecies.residents.length;
}

module.exports = countAnimals;