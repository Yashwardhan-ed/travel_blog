//App.js

import TopBar from './components/topbar/topBar';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Write from './components/write/write';
import Single from "./components/home/single/single"
import Settings from './components/settings/settings';
import './App.css'

function App() {
	return (
		<>
			<div className="App">
				<TopBar />
				<Settings />
			</div>
			
		</>
	);
}

export default App;
