# Backend
Stepaw Backend Routes

User Routes

1.For getting all the users: GET request

  route: http://ec2-35-167-39-253.us-west-2.compute.amazonaws.com/user/users
  
2. Creating a new User & for updating the user: POST request

  route: http://ec2-35-167-39-253.us-west-2.compute.amazonaws.com/user/users
  
  CURL request: curl -X POST -H "Content-Type: application/json" -d '{"UserID": 5, "UserName": "Post", "FirstName": "Post content.", 
  "LastName": "Thomas", "EmailID": "glenkt@gmail.com", "BluetoothID": "2133"}' http://ec2-35-167-39-253.us-west-2.compute.amazonaws.com/user/users
  
3. Get User by ID: GET Request

  route: route: http://ec2-35-167-39-253.us-west-2.compute.amazonaws.com/user/5
  
4. For deleting all the test data: DELETE Request

  route: route: route: http://ec2-35-167-39-253.us-west-2.compute.amazonaws.com/user/users/deleteAll

Pet Routes

1.For getting all the pet: GET request

  route: http://ec2-35-167-39-253.us-west-2.compute.amazonaws.com/user/pets
  
2. Creating a new Pet & for updating the pet: POST request

  route: http://ec2-35-167-39-253.us-west-2.compute.amazonaws.com/user/pets
  
3. Get Pet by ID: GET Request

  route: route: http://ec2-35-167-39-253.us-west-2.compute.amazonaws.com/user/pets/5
  
4. For deleting all the test data: DELETE Request

  route: route: route: http://ec2-35-167-39-253.us-west-2.compute.amazonaws.com/user/pets/deleteAll
