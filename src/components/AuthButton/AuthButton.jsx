import { NavLink } from "react-router-dom";
import {
  signInWithGoogle,
  signOut,
  useAuthState,
} from "../../utilities/firebase";

const SignInButton = () => (
  <button className="ms-auto btn btn-primary" onClick={signInWithGoogle}>
    Sign in
  </button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-primary" onClick={signOut}>
    Sign out
  </button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

export default AuthButton;
