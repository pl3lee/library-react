import "../styles/Main.css";
import Book from "./Book";
import uniqid from "uniqid";
export default function Main(props) {
  return (
    <div className="main">
      <Book name="testBook1" numPages={100} id={uniqid()} />
      <Book name="testBook2" numPages={200} id={uniqid()} />
    </div>
  );
}
