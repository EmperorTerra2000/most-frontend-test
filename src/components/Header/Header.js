import './Header.css';

function Header({ isOpen, onClose, loggedIn }) {
  return (
    <header className="header">
      <div className="header__content">
        <p className="header__title font-large">ONLINE STORE</p>
        <div className="header__nav-block">
          {loggedIn ? (
            <p className="header__nav font-medium">Sign in</p>
          ) : (
            <p className="header__nav font-medium">Profile</p>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
