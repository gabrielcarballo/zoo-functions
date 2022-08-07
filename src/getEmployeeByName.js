const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const getEmployeeFile = data.employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName
  )
  if (employeeName === undefined) {
    return {}
  }
  return getEmployeeFile
}
module.exports = getEmployeeByName;
