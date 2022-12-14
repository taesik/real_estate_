import {BrowserRouter as Router,Routes, Route}  from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPasswrd from "./pages/ForgotPasswrd/ForgotPasswrd";
import Offers from "./pages/Offers/Offers";
import Header from "./components/Header/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/profile'} element={<PrivateRoute/>}>
                    <Route path={'/profile'} element={<Profile/>}/>
                </Route>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/sign-in'} element={<SignIn/>}/>
                <Route path={'/sign-up'} element={<SignUp/>}/>
                <Route path={'/forgot-password'} element={<ForgotPasswrd/>}/>
                <Route path={'/offers'} element={<Offers/>}/>
            </Routes>
        </Router>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>
  );
}

export default App;
