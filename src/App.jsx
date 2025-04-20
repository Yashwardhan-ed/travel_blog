//App.js

import TopBar from './components/topbar/topBar';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Write from './components/write/write';
import Single from "./components/home/single/single"
import Settings from './components/settings/settings';
import Login from './components/login/Login';
import Register from './components/register/Register';
import './App.css'

function App() {
	return (
		<>
			<div className="App">
				<TopBar />
				<Register />
			</div>
			
		</>
	);
}

export default App;
