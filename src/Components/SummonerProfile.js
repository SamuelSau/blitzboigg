import React from 'react';

function SummonerProfile({ summonerData }) {
	const profileIcon = summonerData.profileIconId;
	const profileIconUrl = `https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${profileIcon}.png`;
	return (
		<div
			style={{ backgroundColor: '#1f2937' }}
			className=' w-1/2 rounded-2xl mx-auto px-4 py-5 text-white font-sans'
		>
			<div className='m-10 absolute'>
				<img
					className='h-24 w-24 rounded-full p-5 mx-auto'
					src={profileIconUrl}
					alt={`Profile icon ${profileIcon}`}
				/>
				<div className='absolute bottom-0 right-0 m-3 font-bold bg-black rounded-full px-3 py-1 text-xs'>
					{summonerData.summonerLevel}
				</div>
			</div>
			<div className='text-right'>
				<h1 className='text-lg'>{summonerData.name}</h1>
				<p className=''>{summonerData.queueType}</p>
				<p className=''>{summonerData.tier}</p>
				<p className=''>{summonerData.rank}</p>
				<div className='text-sm'>
					<p className='bg-green'>{summonerData.wins}W</p>
					<p className='bg-red'> {summonerData.losses}L</p>
				</div>
			</div>
		</div>
	);
}

export default SummonerProfile;
