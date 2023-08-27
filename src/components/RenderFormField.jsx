import { Input, Checkbox, Select, DatePicker, Radio, InputNumber, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
const RenderFormField = ({ fieldType }) => {
  console.log(fieldType);
    switch (fieldType.type) {
      case 'Input':
        return <div>
            <label>{fieldType.customization.label}</label>
            <Input placeholder={fieldType.customization.placeholder} {...(fieldType.customization.validation.required && { required: 'required' })}/>
          </div>;
      case 'Text':
        return <div>
            <label>{fieldType.customization.label}</label>
            <Input.TextArea
            rows={4} 
            placeholder={fieldType.customization.placeholder}
            {...(fieldType.customization.validation.required && { required: 'required' })}
            minLength={fieldType.customization.validation.minLength}
            maxLength={fieldType.customization.validation.maxLength}
            />
          </div>;
      case 'Checkbox':
        return <div>
          <label>{fieldType.customization.label}</label>
          <Checkbox.Group options={fieldType.customization.options} {...(fieldType.customization.validation.required && { required: 'required' })}/>
      </div>;
      case 'Select':
        return <div>
        <label>{fieldType.customization.label}</label>
        <Select placeholder="Select an option" {...(fieldType.customization.validation.required && { required: 'required' })}>
        {fieldType.customization.options && fieldType.customization.options.map((option) => (
          <Select.Option key={option} value={option}>{option}</Select.Option>
        ))}
        </Select>
    </div>;
      case 'Radio':
        return <div>
        <label>{fieldType.customization.label}</label>
        <Radio.Group options={fieldType.customization.options} {...(fieldType.customization.validation.required && { required: 'required' })}/>
    </div>;
      case 'Number':
      return <div>
      <label>{fieldType.customization.label}</label>
      <InputNumber  min={fieldType.customization.validation.minLength} max={fieldType.customization.validation.maxLength} {...(fieldType.customization.validation.required && { required: 'required' })}/>
  </div>;
    case 'Email':
      return <div>
      <label>{fieldType.customization.label}</label>
      <Input type="email" placeholder={fieldType.customization.placeholder} {...(fieldType.customization.validation.required && { required: 'required' })}/>
    </div>;
    case 'Password':
      return <div>
      <label>{fieldType.customization.label}</label>
      <Input.Password type="email" placeholder={fieldType.customization.placeholder} {...(fieldType.customization.validation.required && { required: 'required' })}/>
    </div>;
    case 'MultiSelect':
      return <div>
        <label>{fieldType.customization.label}</label>
        <Select placeholder="Select an option" mode="multiple" {...(fieldType.customization.validation.required && { required: 'required' })}>
        {fieldType.customization.options && fieldType.customization.options.map((option) => (
          <Select.Option key={option} value={option}>{option}</Select.Option>
        ))}
        </Select>
    </div>;
    case 'File Upload':
      return <Upload>
        <label>{fieldType.customization.label}</label>
      <Button icon={<UploadOutlined />}>Upload File</Button>
      {fieldType.customization.allowedFormats && <p>Allowed formats are only {fieldType.customization.allowedFormats}</p>}
    </Upload>;
    case 'Image Upload':
      return <Upload>
        <label>{fieldType.customization.label}</label>
      <Button icon={<UploadOutlined />}>Upload Image</Button>
    </Upload>;
    case 'Video Upload':
      return <Upload>
        <label>{fieldType.customization.label}</label>
      <Button icon={<UploadOutlined />}>Upload Video</Button>
    </Upload>;
      case 'Date':
        return <div>
            <label>{fieldType.customization.label}</label>
            <DatePicker {...(fieldType.customization.validation.required && { required: 'required' })}/>
          </div>;
      default:
        return null;
    }
};

RenderFormField.propTypes = {
  fieldType: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    customization: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
      validation: PropTypes.shape({
        required: PropTypes.bool,
        minLength: PropTypes.number,
        maxLength: PropTypes.number,
      }),
      allowedFormats: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default RenderFormField;