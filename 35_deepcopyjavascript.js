// deep copy shallow copy

var user = {
    name : "Kavita",
    age : 32,
    address : {
        city: "Sunam",
        country : "India"
    }
}

var user1 = Object.assign(user);
var user2 = JSON.parse(JSON.stringify(user));
var userStructuredClone = JSON.parse(JSON.stringify(user));
user.age = 100;
user1.name = "Shallow";
// user2.name = "Deep copy";

console.log("shallow copying", user1);

console.log("deep copying", user2);
console.log("original obj", user);
console.log("structured clone", userStructuredClone);