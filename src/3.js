module.exports = filterNumber = (lst) => {
  // first filter the array from number that greater than 5 and less than or equal to 8
  // then sort the array from ascending order
  // then convert the array to set to filter out duplicate number
  // then spread the set to convert the set to array
  
  return [... new Set(lst.filter(x => x <= 5 || x > 8).sort((a,b) => a-b))];
}
