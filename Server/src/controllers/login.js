const user = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  user.forEach((user) => {
    if (email === user.email && password === user.password) {
      return res.status(200).json({ access: true });
    }
  });
  return res.json({ access: false });
};

module.exports = login;
