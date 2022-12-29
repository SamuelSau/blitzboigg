import React from 'react';

function SummonerProfile({ summonerData }) {
    const profileIcon = summonerData.profileIconId;
    const profileIconUrl = `https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${profileIcon}.png`;
  return (
    <div>
      <h2>Summoner name: {summonerData.name}</h2>
      <h2>Summoner level: {summonerData.summonerLevel}</h2>
      <img src={profileIconUrl} alt={`Profile icon ${profileIcon}`} />
      <p>Queue Type: {summonerData.queueType}</p>
      <p>Tier: {summonerData.tier}</p>
      <p>Rank: {summonerData.rank}</p>
      <p>Wins: {summonerData.wins}W</p>
      <p>Losses: {summonerData.losses}L</p>
    </div>
  );
}

export default SummonerProfile;