function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    const randomNumber = Math.random() + 1;
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    if(randomNumber >= 0.5 )
    reject(new Error("Failed"))
    else
    resolve(data)
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 5000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    getData()
    .then(data => {
    console.log('Data received:', data);
    })
    .catch(error => {
    console.error('Error:', error);
    });

    
    