# Study Buddies

## About 
Study Buddies is dedicated to bettering the lives of CU Boulder CSCI students. First, users can either login into an existing account or create a new account. When creating a new account, users are able to choose which courses they are currently taking. Then, users can post the location that they are at and what they are working on for a specific course. After, they can email other people working on similar assignments to potentially meet up with them and study together. 
## Requirements 
You will need to do the following if you would like our application to work on your local machine: 
1) ```npm install``` in serverSide directory 
2) ```npm install``` in clientSide directory 
3) create an empty ```'studybuddies'``` database in PostgreSQL
4) Within ```serverSide/knexfile.js``` change ```user: 'postgres'``` and  ```//password: ''``` to your credentials 
5) ```knex migrate:latest``` in serverSide directory 
6) ```knex seed:run``` in serverSide directory 
7) ```npm start``` in serverSide directory to launch application
8) ```npm test``` in clientSide directory AFTER ```npm start``` in serverSide directory to run tests 
### **_A much quicker and easier alternative is to visit our Heroku deployment of our application_**
## Organization/Structure
1) The entirety of this application was written in Javascript, HTML, and CSS and utilizes PostgreSQL, React, and Node.js
2) The two servers for this application are divided between two directories, clientSide and serverSide which contain the source code for each side respectively
3) clientSide/public/ contains an index.html that allows us to launch our application and includes the title/logo for our application 
4) clientSide/src/ includes all of our react components as well as CSS files and data files necessary for said components 
5) serverSide/auth/ includes all of the HTTP requests for login and signup authentication using our database 
6) serverSide/data/ includes all of the HTTP requests for user data 
7) serverSide/db/ includes all of the code to create and seed tables within our databse as well as all of the seed data
## Deployment 
https://study-buddies-app.herokuapp.com/ 
### **_Note: If Heroku app delays with loading or gives you an error, this is because the application is in a sleep state. Reload the page after 30 seconds if this occurs._**
## Authors
* **Justin Adkins** - [GitHub](https://github.com/jadkins89) 
* **Parikshit Bhetwal** - [GitHub](https://github.com/pbhetwal)
* **Jamison McGinley** - [GitHub](https://github.com/jamc3951) 
* **Jennifer Gurtler** - [GitHub](https://github.com/jegu5171)
* **Shania Roy** - [GitHub](https://github.com/shro5435)
* **Julien Rumsey** - [GitHub](https://github.com/julienrumsey)
