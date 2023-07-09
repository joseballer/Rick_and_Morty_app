import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <SearchBar onSearch={onSearch} />
      <Link to='/'> Home</Link>
      <Link to='/about'> About</Link>
    </div>
  );
};

export default Nav;
