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

// Function to update cell value
function updateCellValue(cellId, value) {
    const cell = document.getElementById(cellId);
    cell.textContent = value;
}

// Use Promise.all() to fetch data from all API URLs concurrently
Promise.all(apiUrls.map(fetchData))
    .then(dataArray => {
        const allTime = dataArray.reduce((total, data) => total + data.id, 0);
        updateCellValue("output-all", allTime);

        return Promise.any(apiUrls.map(fetchData));
    })
    .then(data => {
        updateCellValue("output-any", data.id);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
