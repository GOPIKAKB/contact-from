import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
import SignUp from "./Component/SignUp/SignUp";
import { useSelector } from "react-redux";

function App() {
  const { user, accessToken } = useSelector(state => state.login)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        {user && accessToken ?
          <Route path='/profile' element={<Profile />} />
          :
          <Route path='/login' element={<Login />} />
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
