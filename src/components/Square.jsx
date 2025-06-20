export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-500 w-12 h-12 leading-9 text-lg m-1"
    >
      {value}
    </button>
  );
}
