//Objects

const user = {
    name: 'Brianna',
    age: 26,
    "I like this video": true
    // if you want to add a string as a property you need double quotes
}

// if you want to see the output of the string you have to do this
//brackets and quotes

// delete user['I like this video']
// if you want to delete thing string property
console.log(user['I like this video'])


user.name = 'Abby'


// if you want to delete a property
// delete user.name


console.log(user.name)

for(let key in user){
    console.log(key, user[key])
}

//example question

// const func = (function(a){
//     delete a;
//     return a;
// })(5);

// a is a local variable 
// delete only works on properties from an object 

// console.log(func)
