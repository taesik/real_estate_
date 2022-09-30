import {BrowserRouter as Router,Routes, Route}  from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPasswrd from "./pages/ForgotPasswrd/ForgotPasswrd";
import Offers from "./pages/Offers/Offers";

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/sign-in'} element={<SignIn/>}/>
                <Route path={'/sign-up'} element={<SignUp/>}/>
                <Route path={'/forget-password'} element={<ForgotPasswrd/>}/>
                <Route path={'/offers'} element={<Offers/>}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
