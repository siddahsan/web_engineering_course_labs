// const obj = { name: "Ahsan", password: "1234", passkey: "1234", secret: "1111", email: "ahsan@gmail.com" }
// const { password, secret, passkey, ...restOfObj } = obj
// console.log(restOfObj)

// const copyObj = { ...obj }

// obj["name"] = "xyz"

// console.log(copyObj);
// console.log(obj);

// //SetTimeOut
// console.log('Starting setTimeout example...');
// setTimeout(() => {
//     console.log('This message will be displayed after 2 seconds.');
// }, 2000); // 2000 milliseconds = 2 seconds
// console.log('setTimeout example scheduled.');

// //SetInterval
// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log(`Interval count: ${count}`);
//     if (count === 5) {
//         clearInterval(intervalId); // Stop the interval after 5 iterations
//         console.log('Interval stopped after 5 iterations.');
//     }
// }, 1000); // 1000 milliseconds = 1 second
// console.log('setInterval example started.')


//Code For Index2.HTML File
const container = document.getElementById("container")
let posts = [];
function getThePosts() {
    fetch('https://jsonplaceholder.org/posts/')
        .then(apiResult => apiResult.json())
        .then(data => {
            posts = data;
            posts.forEach(element => {
                container.innerHTML += `<div class="card">
            <div>
                title : ${element.title}
            </div>
            <div>
                slug : ${element.slug}
            </div>
            </div>
            `
            });
        })
}

getThePosts()