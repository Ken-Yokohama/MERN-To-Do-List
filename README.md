# MERN-To-Do-List
Full Stack To Do List Application using MongoDB, Express, React and NodeJS

### Brief Summary
This To-Do List is a Full-Stack Web Application created using React in the Frontend, Node & Express for the Backend and MongoDb for the Database. Here, users are able to Create, Read, Update and Delete tasks as well view all their completed task and undo any tasks they accidentally completed. Components are styled using Material UI Themes which also features Dark Mode for a better user experience.

### Links:
- [Live Preview of Front-End](https://ken-yokohama.github.io/MERN-To-Do-List/)
- [Live Preview of Back-End](https://ken-yokohama-mern-to-do-list.herokuapp.com/getToDos)


### Features:
- Dark and Light Mode
- Fully Responsive Mobile First Design
- Collapsable Display for Tasks
- Completed and Unfinished Tasks Organization

### Technologies & Templates Used
| Technologies | Usage                                      |
| ----------------- | ------------------------------------------------ |
| Material UI | CSS Components, Styles, Icons & Dark Theme       |
| ExpressJs    | Rest Api     |
| NodeJs    | Back End Environment     |
| Mongoose    | ODM for MongoDb     |
| MongoDb    | Database     |
| Redux    | State Management   |
| Axios    | Api HTTP Protocols  |
| Npm GH-Pages | Web Hosting |
### How to run locally

- Running Express Server
```
git clone https://github.com/Ken-Yokohama/MERN-To-Do-List.git

cd Server
nodemon index.js
```

- Running React Front-End
```
git clone https://github.com/Ken-Yokohama/MERN-To-Do-List.git

cd Client
npm start
```
Note: You'll have to create your own MongoDb Atlas Project and then input your URI in a .env file
