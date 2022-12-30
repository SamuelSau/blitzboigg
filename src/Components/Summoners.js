import React from 'react';
import Matches from './Matches';
import SummonerProfile from './SummonerProfile';

function Summoners({ summonersData }) {
	
	if (summonersData === null) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<SummonerProfile summonerData={summonersData} />
			<Matches matchDetailsArray={summonersData.matchDetailsArray} />
		</div>
	);
}

export default Summoners;
