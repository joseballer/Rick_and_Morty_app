import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <nav className={style.navContainer}>
      <div className={style.linksContainer}>
        <div className={style.link}><Link to="/home">Home</Link></div>
        <div className={style.link}><Link to="/about">About</Link></div>
        <div className={style.link}><Link to="/favorites">Favorites</Link></div>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
