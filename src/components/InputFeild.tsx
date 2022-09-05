import './InputFeild.css';

const InputFeild = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter a task" className="input__box" />
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
