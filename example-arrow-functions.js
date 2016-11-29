var names = ['Salman', 'Qasim', 'Robert'];

names.forEach(function(name) {
  console.log('foreach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));
