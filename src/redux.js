import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "slice1",
    initialState: {
        liste: [
            // {
            //     id: 1,
            //     nom: "test",
            //     prix: 666
            // },
            // {
            //     id: 2,
            //     nom: "test2",
            //     prix: 44
            // }
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