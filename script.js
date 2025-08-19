// Get reference to button and URL display element
    const button = document.getElementById("button");
    const urlDisplay = document.getElementById("url");

    // When button is clicked
    button.addEventListener("click", (event) => {
		event.preventDefault(); // stop form from refreshing
      // Get the values entered in input fields (remove extra spaces with trim())
      const name = document.getElementById("name").value.trim();
      const year = document.getElementById("year").value.trim();

      // Start with base URL
      let baseUrl = "https://localhost:8080/";
      // Array to hold query parameters (like name=Alice, year=2025)
      let params = [];

      // If name is not empty, add it to query params
      if (name) {
        // encodeURIComponent ensures special characters (like spaces, &, etc.) are safe in URL
        params.push(`name=${encodeURIComponent(name)}`);
      }

      // If year is not empty, add it to query params
      if (year) {
        params.push(`year=${encodeURIComponent(year)}`);
      }

      // If there are parameters, join them with "&" and add to base URL
      if (params.length > 0) {
        baseUrl += "?" + params.join("&");
      }

      // Update the h3 element to show the final URL
      urlDisplay.textContent = baseUrl;
    });




//Explaination 
// Step 1: params.length > 0

// params is an array holding all query parameters.

// Example:

// If name = "Alice" and year = "2025" →

// params = ["name=Alice", "year=2025"]


// If nothing is entered →

// params = []


// So params.length > 0 means "Do we have at least one parameter?"

// Yes → build query string.

// No → leave URL as it is.

// Step 2: params.join("&")

// join("&") takes the array and joins all elements with & between them.

// Example:

// ["name=Alice", "year=2025"].join("&")
// // "name=Alice&year=2025"


// If only one item:

// ["name=Alice"].join("&")
// // "name=Alice"


// If empty:

// [].join("&")
// // ""

// Step 3: "?" + params.join("&")

// Adds a ? before the joined string (since query string starts with ?).

// Example:

// "?" + "name=Alice&year=2025"
// // "?name=Alice&year=2025"

// Step 4: baseUrl += ...

// Starts with:

// baseUrl = "https://localhost:8080/";


// After adding:

// If both inputs filled:

// https://localhost:8080/?name=Alice&year=2025


// If only name filled:

// https://localhost:8080/?name=Alice


// If only year filled:

// https://localhost:8080/?year=2025


// If nothing filled:

// https://localhost:8080/


// (no change because params.length = 0)




// encodeURIComponent in JavaScript

// encodeURIComponent is a built-in JavaScript function that makes strings safe to use inside a URL by converting special characters into a format that won’t break the URL.

// 🔎 Why do we need it?

// URLs can only safely contain certain characters:

// Letters (a–z, A–Z)

// Numbers (0–9)

// A few symbols (- _ . ~)

// But many characters (like space, &, ?, =, /) have special meanings in URLs.
// If we use them directly, the browser might misinterpret the URL.

// That’s where encodeURIComponent comes in:
// It replaces unsafe characters with percent-encoded values (also called URL encoding).