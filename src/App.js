import './index.css';
import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Summoners from './Components/Summoners';
import Footer from './Components/Footer';

function App() {
	const [summonersData, setSummonersData] = useState(null);

	const handleSubmit = (summonerName) => {
		fetch(`https://blitzboiggbackend.herokuapp.com`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setSummonersData(data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const profileIcon = summonersData ? summonersData.profileIconId : null;
	const profileIconUrl = profileIcon
		? `https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${profileIcon}.png`
		: null;

	return (
		<>
			<div className='bg-blue-400'>
				<SearchBar onSubmit={handleSubmit} />
			</div>
			<div className='w-full h-full bg-center bg-fixed' style={{ backgroundImage: `url(${profileIconUrl})` }}>
				{summonersData ? <Summoners summonersData={summonersData} /> : null}
			</div>
			<div><Footer /></div>
		</>	
		
	);
}

export default App;
