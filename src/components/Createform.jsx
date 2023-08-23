import { Form, Input, Button, Row, Col } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateForm = () => {
   const navigate = useNavigate();
   const [userInput, setUserInput] = useState({
    title: '',
    description: ''
});
console.log(userInput)
    const handleChange = (e) => {
        setUserInput({
            ...userInput,
           [e.target.name]: e.target.value,
        });
        localStorage.setItem('userInput', JSON.stringify(userInput));
    };
    const handleSubmit = () => {
        navigate('/form-builder');
    }
    return (
        <Row>
            <Col span={12}>
                <Form onFinish={handleSubmit}>
                    <Form.Item label="Title" rules={[{ required: true, message: 'Please enter a title' }]}>
                        <Input
                        name="title" 
                        value={userInput.title}
                        onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter a description' }]}>
                        <Input.TextArea
                        name="description"
                        value={userInput.description}
                        onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    <p>{userInput.title}</p>
                    <p>{userInput.description}</p>
                </Form>
            </Col>
        </Row> 
        
     );
}
 
export default CreateForm;