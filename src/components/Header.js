import "../styles/Header.css";

export default function Header(props) {
  function signIn() {
    props.login();
  }
  return (
    <div className="header">
      <div className="title">Library</div>
      <button className="signIn" onClick={signIn}>
        Sign in
      </button>
    </div>
  );
}
