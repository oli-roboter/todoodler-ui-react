import { isEmpty, isNil } from 'ramda';

const isLongerThan = (str, num) => str.length >= num;
const isNotEmpty = (str) => !isEmpty(str);
const isNotNill = (str) => !isNil(str);
// const isOnlyText = (str) =>

export default {
  isLongerThan, isNotEmpty, isNotNill, isEmpty,
};
