import { useSelector, useDispatch } from "react-redux";
import Cards from "../cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";



const Favorites = ({ myFavorites }) => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false)
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  }
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    
  }
  return (
    <div>
      <div>
        <select name="order" onChange={handleOrder}>
          <option value='A'>Ascendente</option>
          <option value='D'>Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter}>
          <option value='All'>All</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
        </select>
      </div>
      <div>
        <Cards characters={favorites} />
      </div>
    </div>
  );
};

export default Favorites;
