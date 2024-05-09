import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './pages/homePage/anonHomePage.tsx';
import UserPage from './pages/userPage/userPage.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/user/:username" element={<UserPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
