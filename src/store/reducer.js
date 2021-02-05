import {createSlice} from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'feature',
    initialState: [
        
    ],
    reducers: {

        engineAdded: (feature, action) => {
            feature.push({
                id: ++lastId,
                name: action.payload.name,
                resolved: false
            })
        },

        detailAdded: (feature, action) => {
            feature.push({
                id: ++lastId,
                name: action.payload.name,
                resolved: false
            })

            
        },

        soundAdded: (feature, action) => {
            feature.push({
                id: ++lastId,
                name: action.payload.name,
                resolved: false
            })


        },

        spoilerAdded: (feature, action) => {

            feature.push({
                id: ++lastId,
                name: action.payload.name,
                resolved: false
            })


        }




    }


})
console.log(slice)

export const {engineAdded, detailAdded, soundAdded, spoilerAdded} = slice.actions
export default slice.reducer