import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <SearchBar onSearch={onSearch} />
      <Link to='/home'> Home</Link>
      <Link to='/about'> About</Link>
      <Link to='/favorites'> Favorites</Link>
    </div>
  );
};

export default Nav;
