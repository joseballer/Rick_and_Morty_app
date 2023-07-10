import "./App.css";
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "email@email.com";
  const PASSWORD = "1Password";
  const URL = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onSearch = (id) => {
    axios(`${URL}/${id}`)
      .then(({ data }) => {
        if (characters.find((char) => char.id === data.id)) {
          return window.alert("¡Ya has elegido este personaje!");
        } else if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert("No se encontro el personaje");
        }
      })
      .catch((err) => {
        window.alert("Este id no existe");
      });
  };

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
      </Routes>
    </div>
  );
}

export default App;
