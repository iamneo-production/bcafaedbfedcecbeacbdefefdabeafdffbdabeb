export function filterOdd(...numbers) {
    return numbers.filter(num => num % 2 !== 0);
  }
  
  // Function to filter out the even numbers from an array
  export function filterEven(...numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  
  // Function to generate an array of n random numbers between 1-100
  export function generateRandomList(n = 7) {
    const list = [];
    for (let i = 0; i < n; i++) {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      list.push(randomNum);
    }
    return list;
  }