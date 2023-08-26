const NewForm = () => {
  const userInput = JSON.parse(localStorage.getItem('userInput'));
    return (
      <div>
        <h1>{userInput.title}</h1>
        <p>{userInput.description}</p>
      </div>    
    );
}
 
export default NewForm;