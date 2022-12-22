import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Summoners({ summonerName }) {
	const [summoners, setSummoners] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchSummoners() {
			try {
				const response = await fetch(
					`http://localhost:3000/summoners/${summonerName}`
				);
				const data = await response.json();
				setSummoners(data);
				console.log(data);
			} catch (error) {
				setError(error);
			}
		}

		fetchSummoners();
	}, [summonerName]);

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	if (summoners === null) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{
				<div>
					<h2>Summoner name: {summoners.name}</h2>
					<h2>Summoner level: {summoners.summonerLevel}</h2>
					<p>Profile Icon: {summoners.profileIconId}</p>
					<p>Queue Type: {summoners.queueType}</p>
					<p>Tier: {summoners.tier}</p>
					<p>Rank: {summoners.rank}</p>
					<p>Wins: {summoners.wins}</p>
					<p>Losses: {summoners.losses}</p>
					
				</div>
			}
		</div>
	);
}

Summoners.propTypes = {
	summonerName: PropTypes.string,
};

Summoners.defaultProps = {
	summonerName: '',
};

export default Summoners;
