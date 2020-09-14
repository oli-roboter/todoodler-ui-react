export default function makeUserColours(coloursArr, usersArr) {
  const userColours = {};
  usersArr.forEach((user, idx) => { userColours[user.username] = coloursArr[idx]; });
  return userColours;
}
