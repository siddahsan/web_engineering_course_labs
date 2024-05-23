// const myPromise = new Promise((resolve, reject) => { return resolve(1) }, 1000)
// console.log(myPromise);


// function getData() {
//     return new Promise((resolve, reject) => {
//         // Simulating an asynchronous operation (e.g., fetching data from an API)
//         setTimeout(() => {
//             const data = [1, 2, 3, 4, 5];
//             // Simulating successful completion
//             // resolve(data);
//             reject(data);
//             // Simulating failure
//             // reject(new Error('Failed to fetch data'));
//         }, 2000); // Simulating a delay of 2 seconds
//     });
// }
// // Consuming the Promise
// // console.log(getData())
// // .then(data => {
// //     console.log('Data received:', data);
// // })
// // .catch(error => {
// //     console.error('Error:', error.message);
// // })

// getData()
//     .then(data => { console.log(data) })
//     .catch(error => console.error("Error: ", error))


function getData() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.5) {
                const data = [1, 2, 3, 4, 5];
                resolve(data); 
            } else {
                reject(new Error('Failed to fetch data')); 
            }
        }, 5000); 
    });
}

getData()
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });