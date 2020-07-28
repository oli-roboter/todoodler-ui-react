import { isEmpty, isNill } from "ramda";

const isLongerThan = (str, num) => str.length >= num;
const isNotEmpty = (str) => !isEmpty(str);
// const isOnlyText = (str) =>

export default {
  isLongerThan, isNotEmpty,
}