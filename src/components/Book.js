import "../styles/Book.css";
export default function Book(props) {
  return (
    <div className="book" id={props.id}>
      <div className="bookName">Name: {props.name}</div>
      <div className="bookNumPages">Number of Pages: {props.numPages}</div>
    </div>
  );
}
