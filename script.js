// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to fetch data from an API URL
function fetchData(url) {
    return fetch(url).then(response => response.json());
}

// Use Promise.all() to fetch data from all API URLs concurrently
Promise.all(apiUrls.map(fetchData))
    .then(dataArray => {
        // Here, dataArray contains an array of responses from all API calls
        console.log(dataArray);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
