const data = require('../data/zoo_data');

function isManager(id) {
  // Considerando que o teste espera const managers = [stephanieId, olaId, burlId]
  //como gerentes:
  return checkingManagers = data.employees.some((managerCheck) => managerCheck.managers.includes(id));
}
isManager('9e7d4524-363c-416a-8759-8aa7e50c0992')
function getRelatedEmployees(managerId) {
 const acc = []
  if (isManager(managerId)){
    const team = data.employees.managers.forEach((item) => {
      if(item === managerId){
        acc.push(item)
        console.log(acc);
      }
      console.log(acc);
      return acc
      
    },)
    console.log(team);
    return team;
    
  }
  
}

module.exports = { isManager, getRelatedEmployees };
