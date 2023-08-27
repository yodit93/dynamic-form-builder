import { useSelector } from "react-redux";
import {Button, Form} from 'antd';
import RenderFormField from "./RenderFormField";
import NewForm from "./NewForm";
const MyForm = () => {
    const {formFields} = useSelector((state) => state.formFields);
    const handleSubmit = (e) => {
        console.log(e.target);
    }
    return (
        <div className="my-form-cont">
            <div className="preview-form">
                <NewForm />
                <Form>
                    {formFields.map((fieldType) => (
                    <Form.Item key={fieldType.id}>
                        <RenderFormField fieldType={fieldType} />
                    </Form.Item>
                    ))}
                    <Button type="primary" onClick={handleSubmit}>Submit</Button>
                </Form>
            </div>
        </div>
        
     );
}
 
export default MyForm;