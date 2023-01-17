import { Route, Routes } from "react-router-dom";
import { Dashboard, Home, Login } from "./pages";

function App() {
  return (
    <Routes>
      <Route name="Home" path='/' element={<Home/>}></Route>
      <Route name="Login" path='/login' element={<Login/>}></Route>
      <Route name="Dashboard" path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
  );
}

export default App;