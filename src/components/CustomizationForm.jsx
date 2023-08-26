import React, { useState } from 'react';
import { Input, Button, Checkbox, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { updateField } from '../Redux/formFieldsSlice';


const CustomizationForm = ({fieldType}) => {
  const [customization, setCustomization] = useState({
    label: '',
    placeholder: '',
    options: [],
    validation: {required: false, minLength: 0, maxLength: 0},
    allowedFormats: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCustomization({
      ...customization,
      [e.target.name]: e.target.value,
    });
  };
  const handleSaveChange = (fieldType) => {
    dispatch(updateField({ fieldId: fieldType.id, customization: customization }));
    console.log(customization)
  };
  const handleOptionChange = (e) => {
    const newOptions = e.target.value.split(',');
    setCustomization({
      ...customization,
      options: newOptions,
    });
  };
  const handleValidationChange = (value, validationName) => {
    setCustomization({
      ...customization,
      validation: {
        ...customization.validation,
        [validationName]: value,
      },
    });
  };
  const handleCheckboxChange = (e) => {
    setCustomization({
      ...customization,
      validation: {
        ...customization.validation,
        [e.target.name]: e.target.checked,
      },
    });
  };
  
  const renderCustomizationOptions = () => {
    switch (fieldType.type) {
      case 'Input':
      case 'Email':
      case 'Password':
        return (
          <div className="edit-form-container">
            <div className="edit-form">
              <Input 
              name="label" 
              value={customization.label} 
              placeholder="Write label here"
              onChange={handleChange}
              />
              <Input 
              name="placeholder"
              value={customization.placeholder}
              onChange={handleChange}
              placeholder="Write placeholder here"/>
              <Checkbox
              name="required"
              checked={customization.validation.required}
              onChange={handleCheckboxChange}
              >
                Required</Checkbox>
                <Button type="primary" onClick={() => handleSaveChange(fieldType)}>Save Change</Button>
            </div>
            <div className="overlay"></div>
          </div>
        )
      case 'Text':
        return (
          <div className="edit-form-container">
            <div className="edit-form">       
              <Input 
              name="label" 
              value={customization.label} 
              placeholder="Write label here"
              onChange={handleChange}
              />
              <Input 
              name="placeholder"
              value={customization.placeholder}
              onChange={handleChange}
              placeholder="Write placeholder here"/>
              <Checkbox
              name="required"
              checked={customization.validation.required}
              onChange={handleCheckboxChange}
              >
                Required</Checkbox>
              <InputNumber
              name="minLength"
              value={customization.validation.minLength}
              onChange={(value) => handleValidationChange(value, 'minLength')}
              />
              <InputNumber
              name="maxLength"
              value={customization.validation.maxLength}
              onChange={(value) => handleValidationChange(value, 'maxLength')}
              />
              <Button type="primary" onClick={() => handleSaveChange(fieldType)}>Save Change</Button>
            </div>
            <div className="overlay"></div>
          </div>
        );
      case 'Number':
        return (
          <div className="edit-form-container">
            <div className="edit-form">
              <Input 
              name="label" 
              value={customization.label} 
              placeholder="Write label here"
              onChange={handleChange}
              />
              <Checkbox
              name="required"
              checked={customization.validation.required}
              onChange={handleCheckboxChange}
              >
                Required</Checkbox>
              <InputNumber
              name="minLength"
              value={customization.validation.minLength}
              onChange={(value) => handleValidationChange(value, 'minLength')}
              />
              <InputNumber
              name="maxLength"
              value={customization.validation.maxLength}
              onChange={(value) => handleValidationChange(value, 'maxLength')}
              />
              <Button type="primary" onClick={() => handleSaveChange(fieldType)}>Save Change</Button>
            </div>
            <div className="overlay"></div>
          </div>
        );
      case 'Checkbox':
        return (
          <div className="edit-form-container">
            <div className="edit-form">
            <Input 
              name="label" 
              value={customization.label} 
              placeholder="Write label here"
              onChange={handleChange}
              />
              <Input
              name="options"
              value={customization.options}
              onChange={handleOptionChange}
              placeholder="Write options here separated by comma"
              />
              <Checkbox
              name="required"
              checked={customization.validation.required}
              onChange={handleCheckboxChange}
              >
                Required</Checkbox>
              <Button type="primary" onClick={() => handleSaveChange(fieldType)}>Save Change</Button>
            </div>
            <div className="overlay"></div>
          </div>
        );
      case 'Select':
      case 'MultiSelect':
        return (
          <div className="edit-form-container">
            <div className="edit-form">
              <Input 
              name="label" 
              value={customization.label} 
              placeholder="Write label here"
              onChange={handleChange}
              />
              <Input 
              name="placeholder"
              value={customization.placeholder}
              onChange={handleChange}
              placeholder="Write placeholder here"/>
              <Checkbox
              name="required"
              checked={customization.validation.required}
              onChange={handleCheckboxChange}
              >
                Required</Checkbox>
              <Input
              name="options"
              value={customization.options}
              onChange={handleOptionChange}
              placeholder="Write options here separated by comma"
              />
              <Button type="primary" onClick={() => handleSaveChange(fieldType)}>Save Change</Button>
            </div>
            <div className="overlay"></div>
          </div>
        );
      case 'Radio':
        return (
          <div className="edit-form-container">
            <div className="edit-form">
              <Input 
              name="label" 
              value={customization.label} 
              placeholder="Write label here"
              onChange={handleChange}
              />
              <Input
              name="options"
              value={customization.options}
              onChange={handleOptionChange}
              placeholder="Write options here separated by comma"
              />
              <Checkbox
              name="required"
              checked={customization.validation.required}
              onChange={handleCheckboxChange}
              >
                Required</Checkbox>
              <Button type="primary" onClick={() => handleSaveChange(fieldType)}>Save Change</Button>
            </div>
            <div className="overlay"></div>
          </div>
        );
      case 'File Upload':
      case 'Image Upload':
      case 'Video Upload':
        return (
          <div className="edit-form-container">
          <div className="edit-form">
            <Input
            name="label"
            value={customization.label}
            onChange={handleChange}
            placeholder="Write label here"
            />
            <Input
            name="allowedFormats"
            value={customization.allowedFormats}
            onChange={handleChange}
            placeholder="Write allowed formats here separated by comma"
            />
            <Button type="primary" onClick={() => handleSaveChange(fieldType)}>Save Change</Button>
          </div>
          <div className="overlay"></div>
          </div>
        );
      case 'Date':
        return (
          <div className="edit-form-container">
            <div className="edit-form">
              <Input
              name="label"
              value={customization.label}
              onChange={handleChange}
              placeholder="Write label here"
              />
              <Checkbox
              name="required"
              checked={customization.validation.required}
              onChange={handleCheckboxChange}
              >
                Required</Checkbox>
              <Button type="primary" onClick={() => handleSaveChange(fieldType)}>Save Change</Button>
            </div>
            <div className="overlay"></div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return <div>{renderCustomizationOptions()}</div>;
};

export default CustomizationForm;
