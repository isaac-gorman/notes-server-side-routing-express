// Learning Objective:
// - Be able to artiuctale the basics of the REST architectual style

// Q: What does REST stand for?
// - REpersentaional State Transfer
// - REST is a set of principles ... like zen ... lol

// Q: When was REST introduced?
// - REST was introduced Roy Fielding, as a way to define a way to design distributed software

// Q: In this module what will I learn?
// - I will learn a high level look at the "key principles" of REST

// OVERVIEW
// Q: How should I think of REST?
// - As a framework, a mental model to design distributed software. REST is a generally agreed-upon set of princicples and constraints, but they are not a standard they are "Recomendations"

// Q: When I am designing a RESTful API what principles should I keep in mind?
// - Everything is a resource
// - Each resource is available via a unqiue URI
// - Resources can have multiple repersenations
// - Communication happens over a stateless protocol (HTTP)
// - Resource managament happens via HTTP methods

// Q: What is the outcome of applying the REST architecture to my API's?
// - By applying the rest architecture to my API's i will be able to make them scalable and much simpler to maintain

// FOLLOW ALONG
// Q: How many constaints does the REST architecture have?
// - 6

// Q: What are the six constraints of the REST architecture?
// - 1) client-server architecture
// - 2) stateless architecture: each request should stand on its own and order should not matter. No state should be shared.
// - 3) cacheable: improves network preformance
// Idempotent "impregnanting the cow"
// - - GET, PUT, DELETE should be "idempotent" (aka the same command executed multiple times, the state of the resources on the server is exactly the same, much like pure functions)
// - - While POST is not "idempotent" beacuse it puts something new in the cow. 🐄
// - - "caching": is a very effecient way of store and retrieve data so that future request can be accomplished faster, without repeating expensive calculations or operations
// - "layerd system": Component A (the client) is most likely not communciacting with Component B (the server). It is very likely that their are other mechanism between them such as but not limited to:
// - - logging
// - - caching
// - - DNS server
// - - load balancers
// - - authentication
// - "Code on Demand":
// - - The API returns the resource and code to act on
// - - The client only needs to know how to act on the code
// - - This pattern makes the code more flexible, upgradable, and extendible
// - - The majority of Web Apps send JavaScript code along with that data
// - "Unifrom Interfaces":
// - - All resources should be accessible via single URL (unquie URL). This is not a requirment but it is not recommended
// - - A team should be able to seemlessly manage the applications resrouces via these unquie URL's
// - - And every interaction with the Apps resoruces should be interacted via the unquie URL we provided it
// - - "self discriptive messages"
// - "HATEOAS (Hypermedia As The Engine Of The Applications State)": Similar to Choose your own adventure books, the pages in a server are not read in order:
// - - A client can start at page 1, and basedon the info available, the reader AKA the client chooses the actions to take, moving from page to page.
// this is a great example of a HATEOAS API structure... read to take a client on mythical adventure of a lifetime from:
// https://api.github.com/
// {
// "current_user_url": "https://api.github.com/user",
// "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
// "authorizations_url": "https://api.github.com/authorizations",
// "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
// "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
// "emails_url": "https://api.github.com/user/emails",
// "emojis_url": "https://api.github.com/emojis",
// "events_url": "https://api.github.com/events",
// "feeds_url": "https://api.github.com/feeds",
// "followers_url": "https://api.github.com/user/followers",
// "following_url": "https://api.github.com/user/following{/target}",
// "gists_url": "https://api.github.com/gists{/gist_id}",
// "hub_url": "https://api.github.com/hub",
// "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
// "issues_url": "https://api.github.com/issues",
// "keys_url": "https://api.github.com/user/keys",
// "label_search_url": "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}",
// "notifications_url": "https://api.github.com/notifications",
// "organization_url": "https://api.github.com/orgs/{org}",
// "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
// "organization_teams_url": "https://api.github.com/orgs/{org}/teams",
// "public_gists_url": "https://api.github.com/gists/public",
// "rate_limit_url": "https://api.github.com/rate_limit",
// "repository_url": "https://api.github.com/repos/{owner}/{repo}",
// "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
// "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
// "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
// "starred_gists_url": "https://api.github.com/gists/starred",
// "user_url": "https://api.github.com/users/{user}",
// "user_organizations_url": "https://api.github.com/user/orgs",
// "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
// "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
// }
