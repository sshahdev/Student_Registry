import { configureStore } from '@reduxjs/toolkit'
import studentSlice, { Students } from 'lib/student-slice'

// Define the structure of the Redux store state.
export interface StoreState {
	student: {
		students: Students[] // Array of student data
		currentStudent: Students | null | undefined
	}
}

export const store = configureStore({
	reducer: {
		student: studentSlice, // Combine with the studentSlice reducer
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
