import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";import {useState} from "react";
import MainContext from "./context/MainContext";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreatePost from "./pages/CreatePost";

function App() {
    const [getUser, setUser] = useState()
    const [getPosts, setPosts] = useState([])
    // let userCreated = false

    return (
        <div className="App">
            <MainContext.Provider value={{getUser, setUser, getPosts, setPosts}}>
                    <Router>
                        <div className='toolbar flex spb'>
                            <div>
                                <Link to={'/loginPage'}><button className="mg10">Login</button></Link>
                                <Link to={'/registerPage'}><button className="mg10">Register</button></Link>
                            </div>
                            <Link to={'/'}><button className="mg10">Home Page</button></Link>
                        </div>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/registerPage" element={<RegisterPage/>}/>
                            <Route path="/loginPage" element={<LoginPage/>}/>
                            <Route path="/createPost" element={<CreatePost/>}/>
                        </Routes>
                    </Router>
            </MainContext.Provider>
        </div>
    );
}

export default App;
