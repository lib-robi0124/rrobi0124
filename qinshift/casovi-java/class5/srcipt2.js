
let hotel = new Object();
hotel.name = "Bristol";
hotel.numberOfRooms = 100;
hotel.numberOfStars = 5;
hotel.hasSpaCentter = true;
hotel.bookedRooms = 55;
hotel.getAvailabality = function () {
    return this.numberOfRooms - this.bookedRooms;
}

console.log(hotel);
console.log(hotel.name);

// exam

let trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Objects"
}

console.log(trainer);
delete trainer.lecture;

console.log(trainer);
trainer.age = 45;

console.log(trainer);
trainer.getFullName = function () {
    return this.name + " " + this.lastName
}

console.log(trainer);




