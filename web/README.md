# Shipyard Challenge: John Kangsumrith

## Considerations 

Redux has been replaced by Overmind. Redux is not necessary in this usecase (and most usecases) where a light weight state manager will do just fine. 

Since Redux was used on the initial app, a global state manager will be used. But because the data array fetched from the api is small it is not necessary to store this data globally. 

In fact, the GET request -> /api/users/:userID is entirely unecessary in this case because: 
  1. The data from GET -> /api/users/ is identical to the the previously mentioned GET request response. 
  2. The data set is small. If this data set was much larger than it would make sense to fetch data on a single user basis, but this then would also nullify the first request. ie, if the data is large, the first request would take too long and save too much data on the front end anyways. The first request endpoint would need to be paginated for this to be efficient. 

Therefore, this iteration will not call the second endpoint (/api/users/:userID), but will still display this url parameter in the url. 