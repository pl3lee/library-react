import Header from "./Header";
import "../styles/App.css";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import Main from "./Main";
function App() {
  async function signIn() {
    // TODO 1: Sign in Firebase with credential from the Google user.
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  // Signs-out of Friendly Chat.
  function signOutUser() {
    signOut(getAuth());
  }

  // Initiate firebase auth
  function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  // Returns the signed-in user's profile Pic URL.
  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || "/images/profile_placeholder.png";
  }

  // Returns the signed-in user's display name.
  function getUserName() {
    return getAuth().currentUser.displayName;
  }

  // Returns true if a user is signed-in.
  function isUserSignedIn() {
    return !!getAuth().currentUser;
  }
  function authStateObserver(user) {
    if (user) {
      // User is signed in!
      // Get the signed-in user's profile pic and name.
      var profilePicUrl = getProfilePicUrl();
      var userName = getUserName();
    } else {
    }
  }

  return (
    <div className="App">
      <Header login={signIn} />
      <Main></Main>
    </div>
  );
}

export default App;
