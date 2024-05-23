// // arr = [1,2,3,4,5]
// // const [a,b, ...rest] = arr

// // console.log(`${a} ${b} ${rest}`)

// const obj = {
//     name: "Ahsan",
//     cms: "021-21-0016",
//     city: "Sukkur",
//     province: "Sindh"
// }

// const {name: c, cms: d , ...objRest} = obj

// console.log(c)
// console.log(d)
// console.log(objRest)

// // newobj = {...obj}

// // console.log(obj)
// // obj.name = "Amjad"
// // console.log(newobj);
// // console.log(obj)

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Promise resolved")
//         reject("Promise Reject")
//     }, 2000)
// })


// promise.then((res)=>{
//     console.log(res);
// }).catch((e)=> {
//     console.log(e);
// })

arr = [1,2,3,4]

arr.splice(2,0,3)

console.log(arr)