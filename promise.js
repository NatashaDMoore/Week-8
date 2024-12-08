let randomNumPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    const randomVal = Math.random();
    if (randomVal> 0.5) {
      resolve(randomVal);
    }
    reject(randomVal);
  }, 1000);
});

randomNumPromise
  .then(function(number) {
    console.log('success', number);
  })
  .catch(function(error) {
    console.log('error', error);
  });

// -------------- Code from class -----------------

//let isLoading = false; pseudo

// let movieTimesPromise = new Promise(function(resolve, reject) {
//   //isLoading = true; pseudo
//   setTimeout(function() {
//     const movieTime = {
//       name: 'Captain Marvel',
//       time: '19:20',
//       location: 'Meridian 16',
//     }
//     resolve(movieTime);
//   }, 1000);
// });

// movieTimesPromise
//   .then(function(resolved) {
//     console.log(resolved);
//     // add to html
//     return resolved;
//   })
//   .then(function(data) {
//     console.log('chain');
//     console.log(JSON.stringify(data));
//   })
//   .catch(function(error) {
//     // add error to html
//     console.log('error', error);
//   }) 
//   .finally(function() {
//     // isLoading = false pseudo
//   });




// const requestTemperature = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject('Something went wrong'), 1500);
//   });

// const handleTemperature = async function () {
//   let temp;
//   try {
//     temp = await requestTemperature();
//   } catch (e) {
//     console.log(e); // Log the error
//     return; 
//   }

//   // Ensure `temp` is defined before calculating
//   const fahrenheit = (temp * 9) / 5 + 32;
//   console.log(fahrenheit);
// };

// handleTemperature();