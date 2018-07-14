Objective:
Trivia App is my individual project for the DC Flex Spring 2018 Cohort.
I am making an API to the openmovietrivia API on a backend express app.  This API is then served up via a JSON Response to my front end React App. 

Info:
Frontend Usage:
create-react-app
react-router-dom

Backend Usage:
express
nodemon
socket.io
axios

Dependencies:
Express
Axios
React
Redux
React-Redux
Nodemon
Create-React-App
Cors
Socket.io

Challenges:
1) Figuring out how to style a React Router <Link> when associating on a button element.
-answer: you wrap the <Link></Link> tags around the button and style the button element normally.
2) I had to refactor my entire question JSON data structure.  I ran into issues where I was
trying to manipulate JSX data outside of a render function.  Essentially, I was trying to build
and entire array of JSX data and serve that up individually to React, instead of manipulating
the data first and sending just the data to a React component.


Stretch: redux thunk
