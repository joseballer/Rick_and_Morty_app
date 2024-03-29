import { useState } from "react";



const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setId(value);
  };
  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
};
export default SearchBar;