function getTempCallback (location, callback) {
  callback(undefined , 78);
  callback('City Not Found');

}

getTempCallback ('Islamabad', function(err, temp){
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', temp);
  }
});

function getTempPromise (location){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('City Not Found');
    }, 1000);
  });
}

getTempPromise('Islamabad').then(function(temp) {
  console.log('Temprature is ' + temp);
}, function(err) {
  console.log('Error  is ' + err);
});
