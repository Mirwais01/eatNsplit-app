export default function Button({ children, onClickBtn }) {
  return (
    <button
      onClick={onClickBtn}
      className="bg-orange-400 font-bold hover:bg-orange-300 px-5 py-2 rounded-md"
    >
      {children}
    </button>
  );
}
