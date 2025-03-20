let nums  = {
    a:100,
    b: 200,
    title: "My mums",
}

multiplyByTwo(nums);

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        }
    }
}

console.log(nums)
