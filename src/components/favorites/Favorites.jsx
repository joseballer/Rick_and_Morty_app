import { useSelector } from "react-redux";
import Card from "../card/Card";

const Favorites = (onClose) => {
  const favorites = useSelector((state) => state.myFavorites);
  return (
    <div>
      {favorites.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <Card
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin.name}
          image={image}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
