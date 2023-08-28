import { Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addField } from '../Redux/formFieldsSlice';
import { useRef } from 'react';
const FormFields = () => {
    const dispatch = useDispatch();
    const formList = useRef(null);
    const handleSelect = (field) => {
        dispatch(addField(field));
        formList.current.classList.remove('show');
    };
    const handleShow = () => {
        formList.current.classList.add('show');    
     };
    const handleHide = () => {
        formList.current.classList.remove('show');
    };  
    return (
        <>
            <Button className="field-add-btn" type="primary" htmlType="submit" onClick={handleShow}>
                <PlusOutlined />
            </Button>
            <div className="toggle-event" ref={formList}>
                <div className="close-btn" onClick={handleHide}>&#10005;</div>
                <ul className="form-list" direction="vertical">
                    <li onClick={() => handleSelect('Input')}>Input</li>
                    <li onClick={() => handleSelect('Text')}>Text</li>
                    <li onClick={() => handleSelect('Checkbox')}>Checkbox</li>
                    <li onClick={() => handleSelect('Select')}>Select</li>
                    <li onClick={() => handleSelect('Email')}>Email</li>
                    <li onClick={() => handleSelect('Password')}>Password</li>
                    <li onClick={() => handleSelect('Radio')}>Radio</li>
                    <li onClick={() => handleSelect('Number')}>Number</li>
                    <li onClick={() => handleSelect('MultiSelect')}>MultiSelect</li>
                    <li onClick={() => handleSelect('File Upload')}>File Upload</li>
                    <li onClick={() => handleSelect('Image Upload')}>Image Upload</li>
                    <li onClick={() => handleSelect('Video Upload')}>Video Upload</li>
                    <li onClick={() => handleSelect('Date')}>Date</li>
                </ul>
            </div>   
        </>
        
        
     );
}
 
export default FormFields;