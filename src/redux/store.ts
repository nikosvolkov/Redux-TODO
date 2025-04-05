import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoReducer.ts'


const store = configureStore({
  reducer: todoReducer
})
export default store