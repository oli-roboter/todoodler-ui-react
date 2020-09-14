/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
import moment from 'moment';

function buildChangeHistory(state, changes) {
  const events = [];
  for (const [key, value] of Object.entries(changes)) {
    const event = {
      field: key,
      from: state[key],
      to: value,
    };
    events.push(event);
  }
  return events;
}

function updateState(state, changes) {
  const updatedState = { ...state };
  changes.forEach((change) => updatedState[change.field] = change.to);
  return updatedState;
}

export default function writeHistory(history) {
  const initialState = history[0];
  const changes = history.slice(1);
  const events = [];
  let state = {};

  for (let i = 0; i < changes.length; i++) {
    const currentState = i === 0 ? initialState : state;

    const modification = {
      author: changes[i].author,
      date: moment(changes[i].modifiedOn).format('DD/mm/yy, hh:mm:ss'),
      changes: buildChangeHistory(currentState, changes[i].changes),
    };
    state = updateState(currentState, modification.changes);
    events.push(modification);
  }
  return events;
}
