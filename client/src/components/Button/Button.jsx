const Button = ({ text, onClick }) => {
  return (
    <button
      className="p-1 px-5 border-red-700 border-2 bg-red-500 rounded-full text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  onClick: null,
};
export default Button;
