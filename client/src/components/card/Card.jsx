import style from "./Card.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
 
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites});
    }
  };
  
  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt="Rick" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
