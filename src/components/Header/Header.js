import { Link } from 'react-router-dom';

import './Header.css';

function Header({ isOpen, onClose, loggedIn }) {
  const styleLink = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <header className="header">
      <div className="header__content">
        <p className="header__title font-large">
          <Link to="/" style={styleLink}>
            ONLINE STORE
          </Link>
        </p>
        <div className="header__nav-block">
          {loggedIn ? (
            <Link to="/signin" style={styleLink}>
              <p className="header__nav font-medium">Sign in</p>
            </Link>
          ) : (
            <Link to="/profile" style={styleLink}>
              <p className="header__nav font-medium">Profile</p>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
