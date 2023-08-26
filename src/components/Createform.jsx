import { Form, Input, Button, Row, Col } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
    localStorage.setItem('userInput', JSON.stringify(userInput));
  };

  const handleSubmit = () => {
    navigate('/form-builder');
  };

  return (
    <div className="create-form-cont">
      <h2 className="create-title">Start Creating your Form</h2>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Form onFinish={handleSubmit}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please enter a title' }]}
            >
              <Input
                name="title"
                value={userInput.title}
                onChange={handleChange}
                style={{ height: '50px' }}
              />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please enter a description' }]}
            >
              <Input.TextArea
                name="description"
                value={userInput.description}
                onChange={handleChange}
                style={{ height: '100px' }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Start
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CreateForm;
