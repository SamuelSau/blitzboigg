import React from 'react';

function SummonerProfile({ summonerData }) {
	const profileIcon = summonerData.profileIconId;
	const profileIconUrl = `https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${profileIcon}.png`;
	return (
		<div style={{ backgroundColor: '#1f2937' }} className=' w-1/2 rounded-2xl text-white font-sans font-bold'>
			<div className='relative ml-10 '>
				<img
					className='h-24 w-24 rounded-full p-5'
					src={profileIconUrl}
					alt={`Profile icon ${profileIcon}`}
				/>
				<h2 className='absolute bottom-0 left-0 m-2 font-bold text-sm'>
					{summonerData.summonerLevel}
				</h2>
			</div>
			<h1 className='ml-10 flex'>{summonerData.name}</h1>
			<p className='ml-10 flex'>{summonerData.queueType}</p>
			<p className='ml-10 flex'>{summonerData.tier}</p>
			<p className='ml-10 flex'>{summonerData.rank}</p>
			<p className='ml-10 flex'>{summonerData.wins}W</p>
			<p className='ml-10 flex'> {summonerData.losses}L</p>
		</div>
	);
}

export default SummonerProfile;
