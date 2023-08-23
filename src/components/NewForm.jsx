import { Form } from 'antd';
const NewForm = () => {
  const userInput = JSON.parse(localStorage.getItem('userInput'));
  console.log(userInput);
    return (
      <Form>
        <h1>{userInput.title}</h1>
        <p>{userInput.description}</p>
      </Form>
    );
}
 
export default NewForm;