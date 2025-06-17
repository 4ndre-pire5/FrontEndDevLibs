import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './reducers';

const store = configureStore({
    reducer: messageReducer,
})

export default store;