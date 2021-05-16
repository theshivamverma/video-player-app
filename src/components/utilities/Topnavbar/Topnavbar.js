import { Link } from "react-router-dom";
import { useAuth } from "../../auth"

export default function Topnavbar({ setLeftMenu }) {

  const { login, user, userLogout } = useAuth()

  return (
    <nav className="nav top-fixed p-1 box-shadow-down">
      <h1 className="font-size-m">Indie Songs</h1>
      <button
        className="btn btn-icon btn-menu"
        onClick={() => setLeftMenu(true)}
      >
        <i className="fas fa-bars icon-med"></i>
      </button>
      <div class="profile">
       { !login ?
        <>
          <Link to="/login">
            <button className="btn btn-link">Login / Register</button>
          </Link>
        </> : 
        <>
          <p className="medium font-size-sm">Hi {user && user.username} !</p>
          <button className="btn btn-link" onClick={() => userLogout()}>
            Logout
          </button>
        </>}
      </div>
    </nav>
  );
}
