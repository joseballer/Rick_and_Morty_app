import "./App.css";
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
   
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (characters.find((char) => char.id === data.id)) {
          return window.alert("¡Ya has elegido este personaje!");
        }
        else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡Personaje no encontrado!");
        }
      });
  };

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
