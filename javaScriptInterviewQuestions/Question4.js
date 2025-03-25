const user = {
    name: "Piyush",
    age: 24,
}

const strObj = JSON.stringify(user)
//converts to string

console.log(strObj)

// console.log(JSON.parse(strObj))
//converts to obj

// how can you use these things?

// most common use is storing the data in our local.storage

localStorage.setItem("test", strObj)

console.log(JSON.parse(localStorage.getItem("test"))
)