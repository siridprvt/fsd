// xhr

// Create a new instance of XMLHttpRequest
let xhr = new XMLHttpRequest();

// Open the request (GET method, URL to fetch)
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

// Set up the response handler
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // The request is complete and was successful
        let response = JSON.parse(xhr.responseText); // Parse the JSON response
        console.log(response); // Log the response to the console
    } else if (xhr.readyState === 4) {
        // If the request completes but the status is not 200
        console.error("Request failed with status:", xhr.status);
    }
};

// Send the request
xhr.send();