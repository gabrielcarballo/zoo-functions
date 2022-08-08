const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animalsQtd = data.species.reduce((acc, item) => {
      const animals = item.name;
      const animalsAmount = item.residents.length;
      acc[animals] = animalsAmount;
      return acc;
    }, {});
    return animalsQtd;
  }
  if (animal.sex) {
    return data.species.find((e) => e.name === animal.specie).residents
      .filter((e) => e.sex === animal.sex).length;
  }
  if (animal.specie) {
    const a = data.species.find((e) => e.name === animal.specie).residents.length;
    return a;
  }
}

module.exports = countAnimals;
