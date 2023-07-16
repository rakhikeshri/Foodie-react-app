import {configureStore} from '@reduxjs/toolkit'
import coordsReducer from './features/coordsSlice'
import cartReducer from './features/cartSlice'

const store =  configureStore({
    reducer:{
        coords: coordsReducer,
        cart: cartReducer
    }
})

export default store;