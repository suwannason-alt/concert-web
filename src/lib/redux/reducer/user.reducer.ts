import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    role: 'Admin'
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
        }
    }
})

export const {
    setRole
} = userSlice.actions;

export default userSlice.reducer