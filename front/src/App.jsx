import "./App.css";
import Header from "./components/primary/Header/Header.jsx";
import Home from "./views/Home/Home.jsx";
import NavBar from "./components/primary/NavBar/NavBar.jsx";
import Footer from "./components/primary/Footer/Footer.jsx";
import About from "./views/About/About.jsx";
import Profile from "./views/Profile/Profile.jsx";
import Appointments from "./views/Appointments/Appointments.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login.jsx";
import Register from "./views/Register/Register.jsx";
import NotFound from "./NotFound.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
