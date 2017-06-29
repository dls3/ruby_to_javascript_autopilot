function getNewCar() {
  return {
    city: "Toronto",
    passengers: 0,
    gas: 100
  };
}

function addCar(car, new_car) {
  var car = car.push(new_car);
  return console.log("Adding new car to fleet. Fleet size is now " + cars.length + " .");
}

function pickUpPassenger(car) {
  car["passengers"] += 1;
  car["gas"] -= 10;
  return console.log("Picked up passenger. Car now has " + car["passengers"] + " passengers.");
}

function getDestination(car) {
  {
  if (car["city"] === "Toronto") {
    return "Mississauga"
} else if (car["city"] === "Mississauga") {
    return "London"
} else if (car["city"] === "London") {
    return "Toronto"
    }
  }
}

function fillUpGas(car) {
  var oldGas = car["gas"];
  car["gas"] = 100;
  return console.log("Filled up to " + getGasDisplay(car["gas"]) + " on gas from " + getGasDisplay(oldGas) + " .");
}

function getGasDisplay(gas_amount) {
  return gas_amount
}

function drive(car, city_distance) {
  {
  if (car["gas"] < city_distance) {
    return fillUpGas(car)
  };
  }
  car["city"] = getDestination(car);
  car["gas"] -= city_distance;
  return "Drove to " + car["city"] + " . Remainging gas: " + getGasDisplay(car["gas"]);
}

function dropOffPassengers(car) {
  var previous_passengers = car["passengers"];
  car["passengers"] = 0;
  return console.log("Dropped off " + previous_passengers + " passengers");
}

function act(car) {
  var distance_between_cities = 50;
  if (car["gas"] < 20) {
    fillUpGas(car)
  } else if (car["passengers"] < 3) {
    pickUpPassenger(car)
  } else
    if (car["gas"] < distance_between_cities) {
      return fillUpGas(car)
  }
  var droveTo = drive(car, distanceBetweenCities);
  var passengersDropped = dropOffPassengers(car);
  return console.log(droveTo + " " + passengersDropped);
}

function commandFleet(cars) {  // QUESTSIONS
  for (var i = 0; i < cars.length; i++) {
    var action = act(car);
    var j = i + 1;
    console.log("Car " + j + " : " + action);
  }
  return console.log("---")
}

function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays; i++) {
    var newCar = getNewCar;
    console.log(addCar + newCar);
    return commandFleet(cars);
  }
}

var cars = [];
addOneCarPerDay(cars, 10);
