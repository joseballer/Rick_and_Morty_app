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
  const URL = "http://localhost:3001/rickandmorty";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // function login(userData) {
  //  const { email, password } = userData;
  //  const URL = 'http://localhost:3001/rickandmorty/login/';
  //  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(data);
  //     access && navigate('/home');
  //  });
  const login = async (userData) => {
    const { email, password } = userData;
    try {
      const response = await axios.get(
        `${URL}/login/?email=${email}&password=${password}`
      );
      const { access } = response.data;
      setAccess(response.data);
      // Si el valor de access es verdadero, navegamos a la página de inicio
      if (access) {
        navigate("/home");
      }
    } catch (error) {
      // Manejo de errores
    }
  };

  // const onSearch = (id) => {
  //   axios(`${URL}/character/${id}`)
  //     .then(({ data }) => {
  //       if (characters.find((char) => char.id === data.id)) {
  //         return window.alert("¡Ya has elegido este personaje!");
  //       } else if (data.name) {
  //         setCharacters([...characters, data]);
  //       } else {
  //         window.alert("No se encontro el personaje");
  //       }
  //     })
  //     .catch((err) => {
  //       window.alert("Este id no existe");
  //     });
  // };
  const onSearch = async (id) => {
    try {
      // Realizamos una solicitud GET a la URL con el ID especificado
      const {data} = await axios(`${URL}/character/${id}`);
      // Verificamos si el personaje ya está presente en el arreglo characters
      if (characters.find((char) => char.id === data.id)) {
        // Si el personaje ya está presente, mostramos una alerta
        window.alert("¡Ya has elegido este personaje!");
      } else if (data.name) {
        // Si el objeto de respuesta tiene una propiedad name, agregamos el personaje al arreglo characters
        setCharacters([...characters, data]);
      } else {
        // Si el objeto de respuesta no tiene una propiedad name, mostramos una alerta
        window.alert("No se encontro el personaje");
      }
    } catch (error) {
      // Si ocurre algún error durante la solicitud, mostramos una alerta
      window.alert("Este id no existe");
    }
  }
  

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
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
