import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  formFields: [],
};

const formFieldsSlice = createSlice({
  name: 'formFields',
  initialState,
  reducers: {
    addField: (state, action) => {
      const newField = {
        id: uuidv4(),
        type: action.payload,
        customization: {},
        edit: false,
      };
      state.formFields.push(newField);
    },
    updateField: (state, action) => {
      const { fieldId, customization } = action.payload;
      state.formFields = state.formFields.map(field => {
        if (field.id === fieldId) {
          return { ...field, customization, edit: false };
        }
        return field;
      });
    },
    removeField: (state, action) => {
      const fieldId  = action.payload;
      console.log(fieldId)
      state.formFields = state.formFields.filter(field => field.id !== fieldId);
    },
    editField: (state, action) => {
      const fieldId  = action.payload;
      state.formFields = state.formFields.map(field => {
        if (field.id === fieldId) {
          return { ...field, edit: true };
        }
        return field;
      });  
    },  
  },
});

export const { updateField, addField, removeField, editField } = formFieldsSlice.actions;
export default formFieldsSlice.reducer;

