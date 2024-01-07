// usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: 1, name: 'John Doe', notes: ['Note 1', 'Note 2'] },
        { id: 2, name: 'Jane Smith', notes: ['Note 3'] },
    ],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action) {
            const newUser = {
                id: state.users.length + 1, // Generate a new ID (this is just an example)
                name: action.payload.name,
                notes: action.payload.notes || [], // You can add notes if needed
            };
            state.users.push(newUser);
        },
        deleteUser(state, action) {
            const userId = action.payload;
            state.users = state.users.filter((user) => user.id !== userId);
        },
    },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
