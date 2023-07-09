import { useSelector } from "react-redux";
import Card from "../card/Card";

const Favorites = ({ myFavorites }) => {
  const favorites = useSelector((state) => state.myFavorites);
  return (
    <div>
      {favorites.map(({ id, name, status, species, gender, image }) => {
        return (
          <Card
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
