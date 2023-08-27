const NewForm = () => {
  const userInput = JSON.parse(localStorage.getItem('userInput'));
    return (
      <div>
        {!userInput && <h1>Start creating your form</h1>}
        {userInput && <h1>{userInput.title}</h1>}
        {userInput && <p>{userInput.description}</p>}
      </div>    
    );
}
 
export default NewForm;