import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import User from "./pages/User.jsx";
import OwnerPage from "./pages/OwnerPage.jsx";






const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/owner" element={<OwnerPage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
