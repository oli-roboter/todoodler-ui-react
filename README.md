# todo-ui-react
frontend in react for todoodler app

Frontend react application as part of the microservice architecture to be deployed on an aws server


//TO DO:
- TODO CARD and display in correct area of window depending on date
- PATCH TODO
- DELETE TODO

- Think of the best way to handle adding a todo and displaying on screen:
  -> Think about notification service if 2 users are using app at the same time

- BUG: when adding todo without changing date it displays on the correct columns but then on the wrong column after browser refresh

- Improvement: create Todo context containing users and todos to pass user colours and adding todo (otherwise will have to do lots of prop drilling with methods and user state)