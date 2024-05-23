function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
 
  const numbersArray = [1, 2, 3, 4, 5];
  const result = sum(...numbersArray);
  console.log(result); 
  