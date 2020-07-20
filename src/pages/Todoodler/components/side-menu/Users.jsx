/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { getWorkGroupUsers } from '../../../../services/api/users';
import User from './User';

export default function Users({ filter }) {
  const [users, setUsers] = useState([]);

  // use useEffect to retrieve users from Db by Group
  useEffect(() => {
    getWorkGroupUsers().then((dbUsers) => {
      setUsers(dbUsers.data.data.users);
    });
  }, []);

  return (
    <>
      {users.map(({ _id, username }) => <User key={_id} username={username} filter={filter} />)}
    </>
  );
}
