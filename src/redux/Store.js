import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './cartslice'

const store=configureStore({
    reducer:{
        'cart':cartreducer
    }
   
});

export default store;