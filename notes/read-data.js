// Learning objectives:
// - I will learn how to read data, coming in from
// - - query string
// - - request body
// - - route parameters

// INTRO
// Q: What do most web API's require? And in what way's could they come in?
// - Most Web API's require data from the client and this data can come in the following ways
// - 1: route parameters
// - 2: key/value pairs inside the query string
// - 3: request body

// Q: What will I cover in this module?
// - In this module I will explore ways to read this data coming from clients using all these methods

// OVERVIEW
// - READING AND USING ROUTE PARAMETERS
// Q: Thinking in terms of the DELETE operation how does the API know which hobbit to delete or update?
// - the "/:id" the route parameter

// Q: How do we define route paramters?

// Q: When would the route handler execute?

// Q: What type of value will always be a string?

// Q: Does Express routing support multiple routing parameters?

// - USING THE QUERY STRING
// Q: What is the query string, and how is it used to read data from the client?
// - Query String is just another strategy used to pass data using the URL from client to server
// - The query string is structured as a set of key/value pairs where each pair is spearated by and "&"
// - To mark the beginning of he query string use a "?" and at the end of the URL followed by a set of ?&key=value&? pairs

// Q: What is an example of a query string, and what is the query string portion?
// -  https://www.google.com/search?name=isaac&id=89?
// - the query string portion is the ?name=isaac&id=89? portion

// Q: How and why would we add sorting capablities to our API?
// - I'll provide a way for clients to hit the "/hobbits" endpoint and pass the field they want to use to sort the response and our API will sort the data that field in ascending order

// Q: What would this be written?
server.get("/hobbits", (req, res) => {
  // query string parameters get added to the req.query
  const sortField = req.query.sortby || "id";
  const hobbits = [
    {
      id: 1,
      name: "Samwise Gamgee",
    },
    {
      id: 2,
      name: "Frodo Baggins",
    },
  ];

  // now I apply the sorting
  const response = hobbits.sort((a, b) =>
    a[sortField] < b[sortField] ? -1 : 1
  );

  res.status(200).json(response);
});

// Q: What would happen if I vistied "localhost:8000/hobbits?sortby=name" now?

// Q: To read values from a query string what do I use?

// Q: What would be the value of the "typeOf" paramter if more then one value is passed for the same key and string when only one value is passed?

// Q: What is another caveat with query strings is ...?

// Q: What is happening to the rest of the code before it send the response back to the client?
