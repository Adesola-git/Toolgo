import React from 'react';
import image from "../img/home_new1.jpg"
import './page.css';

const Home = () => {
return (
	<div style={{backgroundImage:`url(${image})`}} className='page-background'>
	<h1 className='demo-content'>POWER BOOK TWO</h1>
	<p className='para'>A sequel to the series "Power." On his own for the first time, Tariq St. Patrick Tariq navigates his new life, in which his desire to shed his father's legacy comes up against the mounting pressure to save his family. Along the way, Tariq gets entangled in the affairs of the cutthroat Tejada family, adding further complications as he tries to balance his drug operations with his education, love life, family affairs, and mounting pressure from Cooper Saxe. He divides his time between school and hustling to pay for his mother's defense attorney, but when he runs out of options, Tariq turns to a familiar drug game.</p>
	</div>
);
};

export default Home;
