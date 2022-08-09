const data = require('../data/zoo_data');

const takeItAll = data.employees.map((e) => (
  {
    id: e.id,
    fullName: `${e.firstName}${e.lastName}`,
    species: e.responsibleFor.map((z) => (data.species.find((a) => a.id === z).name)),
    locations: e.responsibleFor.map((z) => (data.species.find((a) => a.id === z).location)),
  }));

function getEmployeesCoverage(info) {
  if (info && takeItAll.find((e) => e.id === info.id || e.fullName.match(info.name))) {
    return;
  }

  if (info) {
    throw new Error('Informações inválidas');
  }
  return takeItAll;
}

module.exports = getEmployeesCoverage;
