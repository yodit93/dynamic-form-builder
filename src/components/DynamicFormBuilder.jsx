import { useState } from 'react';
import FormFields from "./FormFields";
import NewForm from "./NewForm";
import { Row, Col, Button } from 'antd';
import RenderFormField from './RenderFormField';
import { Form } from 'antd';
import CustomizationForm from './CustomizationForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeField, editField } from '../Redux/formFieldsSlice';

const DynamicFormBuilder = () => {
  const dispatch = useDispatch();
  const {formFields} = useSelector((state) => state.formFields);
  const handleSelect = (fieldType) => {
    setSelectedFields([...selectedFields, fieldType]);
  };
  const handleRemove = (id) => {
    dispatch(removeField(id));
  };
  const handleEdit = (id) => {
    dispatch(editField(id));
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={4}>
        <FormFields setSelectedField={handleSelect} />
      </Col>
      <Col span={18}>
        <NewForm />
        <Form>
            {formFields.map((fieldType) => (
              <Form.Item key={fieldType.id}>
                  <RenderFormField fieldType={fieldType} />
                  <Button onClick={() => handleRemove(fieldType.id)}>-</Button>
                  <Button onClick={() => handleEdit(fieldType.id)}>Edit</Button>
                  {fieldType.edit && <CustomizationForm fieldType={fieldType} />}
              </Form.Item>
            ))}
            <Button type="primary">Save Form</Button>
        </Form>
      </Col>
    </Row>
  );
}

export default DynamicFormBuilder;
