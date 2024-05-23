// // Template Literal
// const _name = 'Ahsan';
// console.log(`Hello, ${_name}!`);

// const obj = { name: "Ahsan", cms_id: "021-21-0016", CGPA: "3.62" }
// console.log(`student details ${JSON.stringify(obj)}`)

// //Activity: How to extract exact data means name, cms-id etc. from the object in case when we are using stringify method


// //count how many times each number appears in array
// const arr = [1, 3, 4, 1, 1]

// const countMap = {};

// arr.forEach(currentValue => {
//     if (countMap[currentValue]) {
//         countMap[currentValue]++;
//     } else {
//         countMap[currentValue] = 1;
//     }
// });

// console.log(countMap);

// const obj2 = { name: "Ahsan", gender: "male", age: 26, countrycode: "+92" }

// //copy of obj2
// // const newObj = obj2

// // newObj.name = "Zain"
// // obj2.age = 100

// // console.log(newObj);
// // console.log(obj2);

// //Spread operator = same concept as cloning in java
// const newObj2 = { ...obj2 }
// obj2.name = "Zain"
// console.log(newObj2)

// console.log(obj2)


// arr1 = [1, 2, 3, 4, 5, 6, 7]
// arr2 = [...arr1]
// arr2[0] = 2

// console.log(arr1)
// console.log(arr2);


// const { name, age, ...rest } = obj2
// console.log(rest);

// //rest in array - do by yourself

// function getData() {
//     return new Promise((resolve, reject) => {
//         // Simulating an asynchronous operation (e.g., fetching data from an API)
//         setTimeout(() => {
//             const data = [1, 2, 3, 4, 5];
//             // Simulating successful completion
//             resolve(data);
//             // Simulating failure
//             // reject(new Error('Failed to fetch data'));
//         }, 2000); // Simulating a delay of 2 seconds
//     });
// }
// // Consuming the Promise
// getData()
//     .then(data => {
//         console.log('Data received:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     })

//LOCAL STORAGE

// Storing data in Local Storage
localStorage.setItem('username', 'john_doe');
localStorage.setItem('isLoggedIn', true);
// Retrieving data from Local Storage
const username = localStorage.getItem('username');
const isLoggedIn = localStorage.getItem('isLoggedIn');
console.log('Username:', username);
console.log('Is Logged In:', isLoggedIn);
// Updating data in Local Storage
localStorage.setItem('isLoggedIn', false);
// Removing data from Local Storage
localStorage.removeItem('username');
// Clearing all data from Local Storage
localStorage.clear();