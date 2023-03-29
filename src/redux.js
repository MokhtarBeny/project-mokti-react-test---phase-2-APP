import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "slice1",
    initialState: {
        liste: [
            
        ],
        recherche: ""
    },
    reducers: {
        load: (state, action) => {
            state.liste = action.payload;

        },
        add: (state, action) => {
            state.liste.push(action.payload)
        },
        setSearch: (state, action) => {
            state.recherche = action.payload
        }
    }
})

export const { load, add, setSearch } = slice.actions;

export const store = configureStore({
    reducer: {
        data: slice.reducer
    }
})