import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Element {
  id: string;
  color: string;
}
type ElementState = Element[];
const initialState: ElementState = [];

const elementSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<Element>) => {
      state.unshift(action.payload);
    },
    removeElement: (state) => {
      state.pop();
    },
  },
});
export const { addElement, removeElement } = elementSlice.actions;
export default elementSlice.reducer;
