import moment from 'moment';

const dateLimits = {
  now: moment(), // change to today
  limit1: moment().add(7, 'days'),
  limit2: moment().add(14, 'days'),
};

export default function timeSlotCalculator(todos) {
  const overdue = todos.filter((todo) => dateLimits.now > moment(todo.dueDate));

  const due1 = todos.filter((todo) => dateLimits.now <= moment(todo.dueDate)
    && moment(todo.dueDate) < dateLimits.limit1);

  const due2 = todos.filter((todo) => dateLimits.limit1 <= moment(todo.dueDate)
    && moment(todo.dueDate) < dateLimits.limit2);

  const due3 = todos.filter((todo) => dateLimits.limit2 < moment(todo.dueDate));

  return {
    overdue, due1, due2, due3,
  };
}
