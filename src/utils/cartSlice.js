import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  
    name:"cart",
    initialState:{items :[]},
    reducers:{

      addItem : (state , action)=>{
        console.log(action.payload);
        state.items.push(action.payload);
      } ,
      
      removeItem: (state, action) => {
        const itemIdToRemove = action.payload.id; // Get the ID from the action
        state.items = state.items.filter((item) => {
          const itemId = item?.card?.info?.id; // Get the unique ID from the item
          return itemId !== itemIdToRemove; // Keep all items except the one with the matching ID
        });
      },
      clearCart :(state)=>{
        state.items.length = 0;
      }
    }
})

export const{addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;