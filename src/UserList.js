// UserList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from './usersSlice';


const UserList = () => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId));
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => handleDeleteUser(user.id)}>Delete User</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
