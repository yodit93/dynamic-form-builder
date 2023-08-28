import { useSelector } from "react-redux";
import {Button, Form} from 'antd';
import RenderFormField from "./RenderFormField";
import NewForm from "./NewForm";
import { useForm } from '@formspree/react';
const MyForm = () => {
    const {formFields} = useSelector((state) => state.formFields);
    const [state, handleSubmit] = useForm("mpzgdnpp");
    if (state.succeeded) {
        return <p>Thanks for submitting!</p>;
    } 
    return (
        <div className="my-form-cont">
            <div className="preview-form">
                <NewForm />
                <Form onFinish={handleSubmit}>
                    {formFields.map((fieldType) => (
                    <Form.Item key={fieldType.id}>
                        <RenderFormField fieldType={fieldType} />
                    </Form.Item>
                    ))}
                    {formFields.length > 0 && <Button type="primary">Submit</Button>}
                </Form>
            </div>
        </div>
        
     );
}
 
export default MyForm;