import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="title">Library</div>
      <button className="signIn" onClick={() => this.props.login()}>
        Sign in
      </button>
    </div>
  );
}
