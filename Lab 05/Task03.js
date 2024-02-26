function applyFunction(numbers, func) {

    const results = [];
  
    for (const num of numbers) {

      results.push(func(num));
    }
  
    return results;
  }
  
  const numbers = [1, 2, 3];
  const doubleFunction = (x) => x * 2;
  
  const doubledNumbers = applyFunction(numbers, doubleFunction);
  
  console.log(`Original numbers: ${numbers}`);
  console.log(`Doubled numbers: ${doubledNumbers}`);
  