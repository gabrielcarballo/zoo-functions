const data = require('../data/zoo_data');

function getEmployeesCoverage() {

}

function getEmployee(info) {
  const employee = data.employees.find((e) =>
    e.id === info.id || e.firstName === info.name || e.lastName === info.name)
  return employee;
}

function getEmployeeByName()

module.exports = getEmployeesCoverage;
