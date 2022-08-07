const data = require('../data/zoo_data');

function isManager(id) {
  // Considerando que o teste espera const managers = [stephanieId, olaId, burlId]
  // como gerentes:
  const checkingManagers = data.employees.some(
    (managerCheck) => managerCheck.managers.includes(id),
  );
  return checkingManagers;
}
isManager('9e7d4524-363c-416a-8759-8aa7e50c0992');
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const gettingManager = data.employees.filter((amIAManager) =>
      amIAManager.managers.includes(managerId))
      .map((gettingManaged) => `${gettingManaged.firstName} ${gettingManaged.lastName}`);
    return gettingManager;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
