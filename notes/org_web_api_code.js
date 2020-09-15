// Learning Objective:
// - Learn how to use Express Routers to organize Web API code

// INTRO
// Q: What will add more complexity to my Web API?
// - As web apps grow, the number of resources and routes will have to increase
// - These added resources and routes will add more complexity
// - Server files thus began to become filled with 1000 of lines of code

// Q: How do Express Routers bring order to this complexity?
// - By breaking the files into different files
// - Express Router is a way to split an application into sub-applications to make it more modular and easier to maintain and reason about

// Q: What are the concepts I should understand by the end of this section of the module?
// - be able to use Express Router to organize my code for readability
// - be able to utalize common structualr Web API patterns
// - be able to use the CommonJS module system to ship (distribute) code amoungst different files

// OVERVIEW
// Q: What do Express Routers behave like, and how should my mental model of Routers be formed?
// - Express Routers behave like little minion Express applications
// - These little minion Express Aplication can have their own little Routing and Middleware, but they can only work inside the Mothership of the Express Appliation, because they are hooked up to it
// - So I should think of Router (Express Minions) as a way to organize the Express Appliation because I can write separeate pieces of code that can later be composed together (Work Togther)

// Q: What is a good example of how Express Routers organize the Express app?
"./notes-server-side-routing-express/notes/mock_api_file/main.js";

// Q: Why and when would I begin to need routers?
// - As of right now my main.js file AKA my root API file would not need routers, perhapse due to its simplicity
// - But I would need routers once my application begins to need more endpoints "/api", "/api/users", "/api/services" etc
// - Lets say my application needs endpoints to access:
// - - a list of users
// - - get details of a single user
// - - add users
// - - modify existing users
// - - inactivate a user
// - This is at least 5 endpoints for users (users endpoints)
// * Side note: seems that enpoints are based on task the user needs to accomplish and infromation they either need to read, update, create, of destroy

// Q: What is the take away form this e-commers application I should understand about routers and endpoints?
// - The e-commerce application needs also deal with other catagories of data such as
// - - products
// - - orders
// - - returns
// - - categories
// - - providers
// - - warehouses
// - - customers
// - - employees
// - - and more
// - I believe that the point of this analogy is how much code I will begin to write per each resources endpoint
// - The takeaway is that as the amount of enpoints increase per resoruce the need to bring order to the complexity with routers becomes very obvious. if each of these 8 resoruces had 5 endpoints each and each enpoint had 20 lines of code that would equate to (8*5)*20 = 800 lines of code ... yeah I don't want my team reading through that many lines not even 100 if per page if they don't have to

// Q: What is "better" about this style of organizing my resources? What is the outcome?
// - Well now that the even if I need to write 10 endpoints in this file I know that I am only dealing with one resource at a time

// Q: How would I use this improved structure in my main file?
"./notes-server-side-routing-express/notes/mock_api_file/main.js";

// Q: Where are my endpoints located (what are endpoints?) and what is better about them now?
// - Now my endpoints (endpoint: URLs to the database) are nicely structured based on resource cataegory:
// - - Products = productRoutes
// - - Users = userRoutes
// - - ...etc
// - Now each endpoint only need 2 lines of code
// - - 1) The varible decliration where define its endpoint
// - - 2) Where we equip that endpoint with middleware to a sepecific endpoint category
// - Now my endpoint read much more like an index of a Choose You Adventure Book
// * Side Note: There is alternative syntax out there to write route handlers and I should be able to use the most effecinet one for my teams projects

// Q: How would I clean up the main file even more?
// - By defining a "central router" that represent the API, and have that "central router" import the routes
// - This logic wil clean up my file even more

// Q: How would the children of the route file now appear? And what is better about this now?
// - AKA Routers can use routers

// Q: What is significant about userRouters, productRouters, and clientRouters?
// - Nothing about them has changed other then the fact that I relocated them into the API folder and had to rename their paths slightly

// Q: What will I learn in the follow along section of this module?
// - I will impliment an API that returns strings, by utalizing Express Routers
// - One caveat is the yes, Express Routers may be overkill for such a simple communcation system, but as I begin to write application that have the potential to increase in complexity their are benfit long term to organizing such simple application using Express routers
