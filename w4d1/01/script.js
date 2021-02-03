
fetch("https://swapi.dev/api/people/1/")
  .then((response) => {
    response.json()
      .then((jsonResponse) => {
        console.log(jsonResponse);
        document.getElementById("root").innerHTML = `<div>${jsonResponse.name}</div>`;
      })
      .catch((jsonError) => {
        console.log(jsonError);
      })
  })
  .catch((error) => {
    console.log(error);
  })


// 	const noMondays = new Promise( (resolve, reject) => {
//     if(new Date().getDay() !== 1) {
//         resolve("Good, it's not Monday!");
//     } else {
//         reject("Someone has a case of the Mondays!");
//     }
// });

// 	noMondays
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) );
