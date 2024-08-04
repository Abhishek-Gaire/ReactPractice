import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";

function Header() {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");

  function goToSearchPage(e) {
    e.preventDefault();
    navigate(`/search?searchItem=${searchItem}`);
  }

  return (
    <header>
      <div className="nav-container">
        <span id="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </span>
        <nav>
          <form onSubmit={goToSearchPage}>
            <input
              type="text"
              placeholder="Search..."
              id="searchBar"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button type="submit" id="searchBtn" onClick={goToSearchPage} />
            <i className="bx bx-search"></i>
          </form>
        </nav>
      </div>
    </header>
  );
}

export default Header;
