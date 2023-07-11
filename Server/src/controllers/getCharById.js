require("dotenv").config();
const axios = require("axios");
const { URL } = process.env;

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}/${id}`)
    .then((response) => {
      const { status, name, species, origin, image, gender } = response.data;
      name
        ? res.status(200).json({ status, name, species, origin, image, gender })
        : res.status(404).json({ message: "Character not found" });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};
module.exports = getCharById;
