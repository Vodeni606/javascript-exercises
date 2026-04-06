const findTheOldest = function(people) {
   return people.reduce((oldest, person) => {
  
  let currentAge = person.yearOfDeath 
    ? person.yearOfDeath - person.yearOfBirth
    : new Date().getFullYear() - person.yearOfBirth;
  
  let oldestAge = oldest.yearOfDeath
    ? oldest.yearOfDeath - oldest.yearOfBirth
    : new Date().getFullYear() - oldest.yearOfBirth;
  
  return currentAge > oldestAge ? person : oldest;
}, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;