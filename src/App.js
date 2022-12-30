import './index.css';
import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Summoners from './Components/Summoners';

function App() {
	const [summonersData, setSummonersData] = useState(null);

	const handleSubmit = (summonerName) => {
		fetch(`http://localhost:3000/summoners/${summonerName}`, {
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

	const profileIcon = summonersData?.profileIconId;
 	const profileIconUrl = `https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${profileIcon}.png`;

	return (
		<div className="bg-center bg-fixed blur-100 opacity-90" style={{ backgroundImage: `url(${profileIconUrl})` }}>
			<SearchBar onSubmit={handleSubmit} />
			{summonersData ? <Summoners summonersData={summonersData} /> : null}
		</div>
	);
}

export default App;
