const user = {name: "Lydia", age : 21};
const admin = {admin:true , ...user};

console.log(admin)

for(key in admin){
    console.log(key, admin[key])
}