
const { Router } = require("express");
const router = Router();
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const getCharById = require("../controllers/getCharById");

//routes and handeler functions
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/favorites", postFav);
router.delete("/favorites/:id", deleteFav);


module.exports = router;
