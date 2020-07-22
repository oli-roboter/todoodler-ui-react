export default function colorInjector(coloursArr) {
  const inUsers = (users) => users.map((user, idx) => {
    user.colour = coloursArr[idx];
    return user;
  });

  const inTodos = (todos, users) => {
    const userColours = {};
    users.forEach((user) => { userColours[user.username] = user.colour; });

    const todosWithColour = todos.map(({ assignedTo, ...todo }) => {
      todo.colour = userColours[assignedTo];
      return { assignedTo, ...todo };
    });
    return todosWithColour;
  };

  return { inUsers, inTodos };
}
