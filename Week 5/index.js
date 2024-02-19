//All about arrays

        // friends = ["Ahsan", "Amjad", "Zeeshan", "Brohi", "Fazal"]
        // console.log(friends.length)
        // friends.push("Musawir")
        // console.log("Defined Array")
        // for(i in friends){
        //     console.log(friends[i])
        // }

        // friends.pop()
        // console.log("Updated Array-1")
        // for(i in friends){
        //     console.log(friends[i])
        // }

        // friends.shift()
        // console.log("Updated Array-2")
        // for(i in friends){
        //     console.log(friends[i])
        // }

        // friends.unshift("Ahsan")
        // console.log("Updated Array-3")
        // for(i in friends){
        //     console.log(friends[i])
        // }

        // friends_2 = ["Khurraim", "Irfan"]
        // friends = friends.concat(friends_2)
        // console.log("Updated Array-4")
        // for(i in friends){
        //     console.log(friends[i])
        // }

        // slice_friends = friends.slice(0, 4);
        // console.log("Slice Array")
        // for(i in slice_friends){
        //     console.log(slice_friends[i])
        // }

        // console.log("Splice Array")
        // friends.splice(2, 1, "Sufyan")
        // for(i in friends){
        //     console.log(friends[i])
        // }
        // console.log(friends.includes("Ahsan"))

        var myDict = {
            "name": "Ahsan",
            "cms-id": "021-21-0016",
            "city": "Sukkur"
        }

        console.log(Object.keys(myDict))
        console.log(Object.values(myDict))
        console.log(Object.entries(myDict))

        function makeItHappen(num ,arr){
            for(i=0; i<10; i++){
                arr.push(num*i)
            }
            for(i in arr){
                console.log(arr[i])
            }
        }

        arr = []
        makeItHappen(3, arr)

