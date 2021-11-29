module.exports = filterNumber = (lst) => {
  return [... new Set(lst.filter(x => x <= 5 || x > 8).sort((a,b) => a-b))];
}
