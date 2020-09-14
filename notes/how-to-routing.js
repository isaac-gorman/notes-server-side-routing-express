// Learning Obejective: 
// - How does routing works in an express application

// INTRO
// Q: Routing is one of the main features of express. But how can we use routing? 
// - Routing helps use organize our app by routing specific operations on the server based on specific URL's, and HTTP Methods. 

// Q: What does Routing make so much easier? 
// - Expresses routing feature makes building WEB API's a breeze
// - I can have a single URL per resource execute on various based on the various HTTP Method/verb used by the clients request.

// Q: Why is building Web API's to preform CRUD operations on resources so much easier with Express?
// - Becuase Express gives us HTTP methods that allow me to map to the desired operation  

// OVERVIEW
// Q: What is an example of basic routing? 
// - So let's say I want my Express application to respond to a GET requests on different urls, I will add the following endpoints 

// this request handler executes when making a GET request to "/dogs"
server.get("/dogs", (req,res)=>{
  res.status(200).send('<h1>🐕</h1>')
})

// this request handler executes when making a GET request to "/cats"
server.get("/cats", (req,res)=>{
  res.status(200).send('<h1>🐱 </h1>')
})

// TWO THINGS TO NOTE
// Q: What HTTP request are we using on both endpoints? 

// Q: What type of data can I return with valid HTTP? 



