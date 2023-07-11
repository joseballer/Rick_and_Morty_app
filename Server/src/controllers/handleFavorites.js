let myFavorites = [];
const postFav = (req, res) => {
  //req{ body: {id: name}}
  myFavorites.push(req.body);
  return res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const filtered = myFavorites.filter((fav) => Number(fav.id) !== Number(id));
  myFavorites = filtered;
  return res.json(myFavorites);
};
module.exports = { postFav, deleteFav };
