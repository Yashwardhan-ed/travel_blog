import TopBar from './components/topbar/topBar';
import Home from './components/home/Home';
import Write from './components/write/write';
import Single from "./components/home/single/single";
import Settings from './components/settings/settings';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recommendation from './components/recommendation/Recommendation';
import UserProvider from './components/login/userContext/userContext';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App p-3 m-3 rounded-xl bg-[#] shadow-[0_0_2px_#634200]">
        <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recommendations" element={<Recommendation />} />
          </Routes>
          <SideBar />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;