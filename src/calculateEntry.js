const data = require('../data/zoo_data');

function countEntrants(entrants) {
  try {
    let child1 = 0;
    let adult1 = 0;
    let senior1 = 0;

    entrants.forEach((element) => {
      if (element.age < 18) {
        child1 += 1;
      } else if (element.age <= 49) {
        adult1 += 1;
      } else if (element.age >= 50) {
        senior1 += 1;
      }
    });
    return { adult: adult1, child: child1, senior: senior1 };
  } catch (a) {
    return 0;
  }
}

function calculateEntry(entrants) {
  // seu código aquid
}

module.exports = { calculateEntry, countEntrants };
/*

const entrants = [
  { name:  'Lara Carvalho', age:  5 },
  { name:  'Frederico Moreira', age:  5 },
  { name:  'Pedro Henrique Carvalho', age:  5 },
  { name:  'Maria Costa', age:  18 },
  { name:  'Núbia Souza', age:  18 },
  { name:  'Carlos Nogueira', age:  50 },
];

{ child: 3, adult: 2, senior: 1 } */
