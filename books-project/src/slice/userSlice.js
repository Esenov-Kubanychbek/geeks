import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: [
        {id: 1, name: 'kuba', surName: 'Esenbaev'},
        {id: 2, name: 'kubanych', surName: 'Esenbaev'},
    ],
    reducers: {
        addUser: (state, action) => {
            const newUser = action.payload;
            return[...state, newUser]
        }
    }
})

export const { addUser } = usersSlice.actions
export default usersSlice.reducer;