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
        console.log(data)
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
			<h1>Summoners</h1>
			{summoners.map((summoner) => (
				<div key={summoner.rank}>
					<h2>{summoner.name}</h2>
					<p>Level: {summoner.level}</p>
				</div>
			))}
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
