import moment from 'moment';

const dateLimits = {
  now: moment(), // change to today
  limit1: moment().add(7, 'days'),
  limit2: moment().add(14, 'days'),
  limit3: moment().add(30, 'days'),
};

export default function timeSlotCalculator(todos) {
  const orderedTodos = [...todos];
  orderedTodos.sort((a, b) => b.dueDate - a.dueDate);

  const overdue = [];
  const due1 = [];
  const due2 = [];
  const due3 = [];
  const due4 = [];

  orderedTodos.forEach((todo) => {
    if (dateLimits.now > moment(todo.dueDate)) {
      overdue.push(todo);
    } else if (dateLimits.limit3 < moment(todo.dueDate)) {
      due4.push(todo);
    } else if (dateLimits.limit2 < moment(todo.dueDate)) {
      due3.push(todo);
    } else if (dateLimits.limit1 < moment(todo.dueDate)) {
      due2.push(todo);
    } else if (dateLimits.now < moment(todo.dueDate)) {
      due1.push(todo);
    } else {
      console.error("Can't fit todo in any time bracker");
    }
  });

  return {
    overdue, due1, due2, due3, due4,
  };
}
