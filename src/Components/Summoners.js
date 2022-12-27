import React from 'react';

function Summoners({ summonersData }) {
	console.log(summonersData)
	if (summonersData === null) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{
				<div>
					<h2>Summoner name: {summonersData.name}</h2>
					<h2>Summoner level: {summonersData.summonerLevel}</h2>
					<p>Profile Icon: {summonersData.profileIconId}</p>
					<p>Queue Type: {summonersData.queueType}</p>
					<p>Tier: {summonersData.tier}</p>
					<p>Rank: {summonersData.rank}</p>
					<p>Wins: {summonersData.wins}</p>
					<p>Losses: {summonersData.losses}</p>
				</div>
			}
		</div>
	);
}

export default Summoners;
