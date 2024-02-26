const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
  };
  
  function carInfo(carObject) {
    return `The ${carObject.brand} ${carObject.model} was manufactured in ${carObject.year}.`;
  }
  
  const carInfoString = carInfo(car);
  
  console.log(carInfoString); 
  