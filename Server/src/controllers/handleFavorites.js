
let myFavorites = [];

// Define a function to handle adding a new favorite item
const postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.json(myFavorites);
};

// Define a function to handle deleting a favorite item
const deleteFav = (req, res) => {
 
  const { id } = req.params;
  const filtered = myFavorites.filter((fav) => Number(fav.id) !== Number(id));
  myFavorites = filtered;
  return res.json(myFavorites);
};

module.exports = { postFav, deleteFav };
