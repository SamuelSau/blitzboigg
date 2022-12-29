import React from 'react';
import Matches from './Matches';
import SummonerProfile from './SummonerProfile';
import TierImage from './TierImage';

function Summoners({ summonersData }) {
	console.log(summonersData);
	if (summonersData === null) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<SummonerProfile summonerData={summonersData} />
			<TierImage tier={summonersData.tier} />
			<Matches matchDetailsArray={summonersData.matchDetailsArray} />
		</div>
	);
}

export default Summoners;
