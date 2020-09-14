// Learning Topic?
// - Server side routing with express 

// Node's HTTP server uses a single "request handler function" for all request 
// Express gives me the ability to break up the app into request handlers for each "HTTP + URL" method combination i.e. 
server.get("/api/superhero/:id", (req, res) => {}) // <- This is Routing that Express provides me
// This feature to break the application into "request handler functions" is called "Routing" and it's one of the main features of Express

// Q: What is to come in this module? What am I about to learn? 
// - I am about to start taking a deep dive into "Routing"
// - I will cover the following concepts 
// - - I will build several endpoint using Express's routing feature
// - - cover various ways to write a Web API
// - - Introduce REST as a method of architecting of web applications 
// - - I will learn how to organize my code using Express Routers

// Q: What is my objective in this module? What should I expect to be able to do? 
// - Be able to articulate the significance of Express Routing in an application 
// - Read data from a query string, request body, and route parameters 
// - I should be able to expreince how much easier it is to use the "simplicty of the REST architecture"
// - Be able to originze Web API code using Express Routers 