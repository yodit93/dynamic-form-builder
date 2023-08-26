import { useSelector } from "react-redux";
import {Form, Button} from 'antd';
import RenderFormField from "./RenderFormField";
import NewForm from "./NewForm";
const MyForm = () => {
    const {formFields} = useSelector((state) => state.formFields);
    return (
        <div className="my-form-cont">
            <div className="preview-form">
                <NewForm />
                <Form>
                    {formFields.map((fieldType) => (
                    <Form.Item key={fieldType.id}>
                        <RenderFormField fieldType={fieldType} />
                        <Button onClick={() => handleRemove(fieldType.id)} style={{margin: '1rem'}}>-</Button>
                        <Button onClick={() => handleEdit(fieldType.id)}>Edit</Button>
                        {fieldType.edit && <CustomizationForm fieldType={fieldType} />}
                    </Form.Item>
                    ))}
                </Form>
            </div>
        </div>
        
     );
}
 
export default MyForm;