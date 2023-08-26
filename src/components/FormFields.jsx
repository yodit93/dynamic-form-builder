import { Space } from 'antd';
import { useDispatch } from 'react-redux';
import { addField } from '../Redux/formFieldsSlice';
const FormFields = () => {
    const dispatch = useDispatch();
    const handleSelect = (field) => {
        dispatch(addField(field));
    };  
    return (    
        <Space direction="vertical">
            <span onClick={() => handleSelect('Input')}>Add Input Field</span>
            <span onClick={() => handleSelect('Text')}>Add Text Field</span>
            <span onClick={() => handleSelect('Checkbox')}>Add Checkbox</span>
            <span onClick={() => handleSelect('Select')}>Add Selection</span>
            <span onClick={() => handleSelect('Email')}>Email</span>
            <span onClick={() => handleSelect('Password')}>Password</span>
            <span onClick={() => handleSelect('Radio')}>Radio</span>
            <span onClick={() => handleSelect('Number')}>Number</span>
            <span onClick={() => handleSelect('MultiSelect')}>MultiSelect</span>
            <span onClick={() => handleSelect('File Upload')}>File Upload</span>
            <span onClick={() => handleSelect('Image Upload')}>Image Upload</span>
            <span onClick={() => handleSelect('Video Upload')}>Video Upload</span>
            <span onClick={() => handleSelect('Date')}>Add Date</span>
        </Space>
     );
}
 
export default FormFields;