import {createSlice} from "@reduxjs/toolkit";

const reqDataSlice = createSlice({
    name: 'reqData',
    initialState:
        {
            reqItems: [],
            subTotal: 0,
            displaySubtotal:false
        }
    ,
    reducers: {
        subTotal(state) {
            state.subTotal =
                state.reqItems.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0)
        },
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.reqItems.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.reqItems.push(newItem)
            }
            else {
                existingItem.name = newItem.name
                existingItem.quantity = newItem.quantity
                existingItem.price = newItem.price
                existingItem.total = newItem.total
            }


        }
    }

})
export const reqDataActions = reqDataSlice.actions;
export default reqDataSlice;