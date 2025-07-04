import FormFields from "./FormFields";
import NewForm from "./NewForm";
import { Button } from 'antd';
import RenderFormField from './RenderFormField';
import { Form } from 'antd';
import CustomizationForm from './CustomizationForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeField, editField } from '../Redux/formFieldsSlice';
import { useNavigate } from "react-router-dom";

const DynamicFormBuilder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {formFields} = useSelector((state) => state.formFields);
  
  const handleRemove = (id) => {
    dispatch(removeField(id));
  };
  const handleEdit = (id) => {
    dispatch(editField(id));
  }
  const handleSaveForm = () => {
    localStorage.setItem('formFields', JSON.stringify(formFields));
    navigate('/my-form');
  };

  return (
    <div className="dynamic-form">
      <div className="form-fields">
        <FormFields />
      </div>
      <div className="preview-form">
        <NewForm />
        <Form>
            {formFields.map((fieldType) => (
              <Form.Item key={fieldType.id}>
                <div className="each-field">
                  <RenderFormField fieldType={fieldType} />
                  <Button onClick={() => handleRemove(fieldType.id)}>-</Button>
                  <Button onClick={() => handleEdit(fieldType.id)}>Edit</Button>
                </div>
                {fieldType.edit && <CustomizationForm fieldType={fieldType} />}
              </Form.Item>
            ))}
            <Button className="save-form-btn" type="primary" onClick={handleSaveForm}>Save Form</Button>
        </Form>
      </div>
    </div>
  );
}

export default DynamicFormBuilder;
