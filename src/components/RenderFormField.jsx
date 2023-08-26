import { Input, Checkbox, Select, DatePicker, Radio, InputNumber, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const RenderFormField = ({ fieldType }) => {
  console.log(fieldType);
    switch (fieldType.type) {
      case 'Input':
        return <div>
            <label>{fieldType.customization.label}</label>
            <Input placeholder={fieldType.customization.placeholder} />
          </div>;
      case 'Text':
        return <div>
            <label>{fieldType.customization.label}</label>
            <Input.TextArea  rows={4} placeholder={fieldType.customization.placeholder} />
          </div>;
      case 'Checkbox':
        return <div>
          <label>{fieldType.customization.label}</label>
          <Checkbox.Group options={fieldType.customization.options} />
      </div>;
      case 'Select':
        return <div>
        <label>{fieldType.customization.label}</label>
        <Select placeholder="Select an option">
        {fieldType.customization.options && fieldType.customization.options.map((option) => (
          <Select.Option key={option} value={option}>{option}</Select.Option>
        ))}
        </Select>
    </div>;
      case 'Radio':
        return <div>
        <label>{fieldType.customization.label}</label>
        <Radio.Group options={fieldType.customization.options} />
    </div>;
      case 'Number':
      return <div>
      <label>{fieldType.customization.label}</label>
      <InputNumber  min={0} max={100} />
  </div>;
    case 'Email':
      return <div>
      <label>{fieldType.customization.label}</label>
      <Input type="email" placeholder={fieldType.customization.placeholder} />
    </div>;
    case 'Password':
      return <div>
      <label>{fieldType.customization.label}</label>
      <Input.Password type="email" placeholder={fieldType.customization.placeholder} />
    </div>;
    case 'MultiSelect':
      return <div>
        <label>{fieldType.customization.label}</label>
        <Select placeholder="Select an option" mode="multiple">
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
            <DatePicker />
          </div>;
      default:
        return null;
    }
};

export default RenderFormField;