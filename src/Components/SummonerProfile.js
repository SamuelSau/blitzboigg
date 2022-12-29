import React from 'react';

function SummonerProfile({ summonerData }) {
  return (
    <div>
      <h2>Summoner name: {summonerData.name}</h2>
      <h2>Summoner level: {summonerData.summonerLevel}</h2>
      <p>Profile Icon: {summonerData.profileIconId}</p>
      <p>Queue Type: {summonerData.queueType}</p>
      <p>Tier: {summonerData.tier}</p>
      <p>Rank: {summonerData.rank}</p>
      <p>Wins: {summonerData.wins}</p>
      <p>Losses: {summonerData.losses}</p>
    </div>
  );
}

export default SummonerProfile;