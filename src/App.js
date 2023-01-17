import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";

function App() {
  return (
    <Routes>
      <Route name="Home" path='/' element={<Home/>}></Route>
      <Route name="Login" path='/login' element={<Login/>}></Route>
    </Routes>
  );
}

export default App;