// Learning Topic: 
// - Basic Routing

// Q: What is routing? 
// - Routing is about how the server respondes to a clienst request based on particular endpoints, which is known as a URL (or path) and a specific HTTP request method such as (GET, POST, PUT, DELETE and so on ...)

// Q: How many handler function can each route have? 
// - Each route can have one or more handler functions which are executed when the route is matched

// Q: What is the structure that a route definition takes? 
server.METHOD(PATH, HANDLER)

// Q: What is what in in the structure of route? 
// - "server" is merly just an instance of express
// - "METHOD" is the repersenation of a lowercase HTTP request method such as (GET, POST, PUT, DELETE and so on ...)
// - "PATH" is a URL, or otherwise known as a path on the server (a place in storage perhapse)
// - "HANDLER" is the function that executes if the METHOD + PATH === the endpoint request from the client

