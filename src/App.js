import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
import SignUp from "./Component/SignUp/SignUp";
import { useSelector } from "react-redux";
import Header from "./Component/Header/Header";

function App() {
  const { user, accessToken } = useSelector(state => state.login)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />

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
