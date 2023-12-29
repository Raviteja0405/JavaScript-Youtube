const prom1 = new Promise(function (resolve, reject) {
  //do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); //now it is connected with then
  }, 1000);
});

prom1.then(function () {
  //has connection with resolve
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" }); //to get data to .then
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "ravi", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour //.then() if okay
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //this takes arguments as what previous then returned
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() =>
    console.log("The promise is either resolved or either rejected")
  );

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// different way to execute promiseFive
// but the problem here is we cannot gracefully handle catch -> for this we use try, catch block to gracefully handle errors
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); //await till fetch
//     // const data = response.json(); // even this need to wait to convert it into json
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/Raviteja0405")
  .then((response) => {
    return response.json();
  }) // the returned response.json() is handled by next .then()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

  // NOTE: even Error 404 status are counted as success i.e they wont go to rejected.