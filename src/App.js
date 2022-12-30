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

	return (
		<div className="bg-yellow-400">
			<SearchBar onSubmit={handleSubmit} />
			{summonersData ? <Summoners summonersData={summonersData} /> : null}
		</div>
	);
}

export default App;
