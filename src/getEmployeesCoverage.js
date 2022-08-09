const data = require('../data/zoo_data');

const takeItAll = () => data.employees.map((e) => (
  {
    id: e.id,
    fullName: `${e.firstName}${e.lastName}`,
    species: e.responsibleFor.map((z) => (data.species.find((a) => a.id === z).name)),
    locations: e.responsibleFor.map((z) => (data.species.find((a) => a.id === z).location)),
  }));

function getEmployeesCoverage(info) {
  /* if (info && takeItAll.find((e) => e.id === info.id
|| e.fullName.includes(info.name))) {
    return takeItAll;
  } */
  let test;
  if(!info){
    return data.employees.map((q) => takeItAll(q))
  }
  if (info.name){
    test = (a) => a.firstName === info.name || a.lastName === info.name;
  }
  if(info.id){
    test = (a) => a.id === info.id
  }
  if (info) {
    throw new Error('Informações inválidas');
  }
  return takeItAll(e)
}

module.exports = getEmployeesCoverage;
