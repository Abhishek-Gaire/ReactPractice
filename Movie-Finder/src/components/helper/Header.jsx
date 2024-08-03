import Logo from "../../assets/logo.png";
function Header() {
  return (
    <header>
      <div className="nav-container">
        <span id="logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </span>
        <nav>
          <form>
            <input type="text" placeholder="Search..." id="searchBar" />
            <button type="submit" id="searchBtn" />
            <i className="bx bx-search"></i>
          </form>
        </nav>
      </div>
    </header>
  );
}

export default Header;
