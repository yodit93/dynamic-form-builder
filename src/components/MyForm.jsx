import { useSelector } from "react-redux";
import {Form} from 'antd';
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
                    </Form.Item>
                    ))}
                </Form>
            </div>
        </div>
        
     );
}
 
export default MyForm;