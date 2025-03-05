import Logo from "../../assets/images/header-logo-kropp.png";
export const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header-logo">
        <img
          src={Logo}
          alt="Kropp logo"
          className="header-logo-image"
          width={135}
          height={25}
          loading="lazy"
        />
      </a>
      <nav className="header-menu">
        <ul className="header-menu-list">
          <li className="header-menu-item">
            <a href="/" className="header-menu-link is-current">
              Home
            </a>
          </li>
          <li className="header-menu-item">
            <a href="/" className="header-menu-link">
              Pages
            </a>
          </li>
          <li className="header-menu-item">
            <a href="/" className="header-menu-link">
              Portfolio
            </a>
          </li>
          <li className="header-menu-item">
            <a href="/" className="header-menu-link">
              Blog
            </a>
          </li>
          <li className="header-menu-item">
            <a href="/" className="header-menu-link">
              Shop
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="header-book-button button" type="button">
          Book now
        </button>
        <button className="header-burger-button" type="button" title="Open menu">
          <span className="visually-hidden">Open menu</span>
        <svg
        width="23"
        height="12"
        viewBox="0 0 23 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path className="line-black" d="M0.5 1H22.5" stroke="#000" strokeDasharray="22 22" />
        <path className="line-white" d="M0.5 1H22.5" stroke="white" strokeDasharray="5 12 12" />
        <path className="line-black" d="M0.5 6H22.5" stroke="#000" strokeDasharray="22 22" />
        <path className="line-white" d="M0.5 6H22.5" stroke="white" strokeDasharray="5 12 12" />
        <path className="line-black" d="M0.5 11H22.5" stroke="#000" strokeDasharray="22 22" />
        <path className="line-white" d="M0.5 11H22.5" stroke="white" strokeDasharray="5 12 12" />
        </svg>
        </button>
      </div>
    </header>
  );
};
