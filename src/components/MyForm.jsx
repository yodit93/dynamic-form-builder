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
                <Form action="https://formspree.io/f/mpzgdnpp" method="POST" onSubmit={handleSubmit}>
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