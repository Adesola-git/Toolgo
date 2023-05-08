import backImage from "./img/home_Img.jpg"
import './App.css';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Episodes from './pages/episodes';
import Community from './pages/community';

function App() {
return (
	<div style={{backgroundColor:"black"}}>
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home/>} />
    	<Route path='/episodes' element={<Episodes />} />
		<Route path='/community' element={<Community/>} />
	</Routes>
	</Router>
	</div>
	
);
}

export default App;
