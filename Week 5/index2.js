itemList = [1,2,3,4,5,6]
//high order function
itemList.forEach(element => {
    console.log(element)
});

// itemList.forEach(function(element){
//     console.log(element)
// })

itemList2 = itemList.map(element => {
    return element * 2
})

console.log(itemList2)

itemList3 = itemList.filter(element => element%3)
console.log(itemList3)