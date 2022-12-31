import React from 'react';
import RuneImage from './RuneImage';
import ChampionImage from './ChampionImage';
import ItemsImage from './ItemsImage';
import SummonerSpellsImages from './SummonerSpellsImages';

function Matches({ matchDetailsArray }) {
	return (
		<div
			style={{ backgroundColor: '#1f2937' }}
			className='text-gray-300 p-4 mt-5 flex flex-col text-2xl mx-9 rounded-2xl'
		>
			{matchDetailsArray.map((match) => {
				return (
					<div className='flex p-4 justify-start border-2 rounded-2xl m-2 lg:flex-row'>
						<div className='m-5 text-md font-bold'>
							{Math.floor(match.gameDuration / 60)} mins
						</div>
						<div className='flex-col text-xs'>
							<div className='mb-3'>{match.gameMode}</div>
							<div className='mb-3'>{match.gameType}</div>
							<div className='mb-3'>{match.role}</div>
						</div>
						<div className='flex flex-col'>
							<div>
								<div className='absolute'>
									<ChampionImage championName={match.championName} />
								</div>
								<div className=' bg-black rounded-full h-7 w-7 flex justify-center items-center absolute'>
									{match.champLevel}
								</div>
							</div>
							<div className='flex ml-14 my-5 text-lg justify-start align-top'>
								{match.kills}/{match.deaths}/{match.assists}
							</div>
						</div>
						<div className='w-4 h-4 flex flex-col'>
							<div className=''>
								<SummonerSpellsImages
									summoner1Id={match.summoner1Id}
									summoner2Id={match.summoner2Id}
								/>
							</div>
						</div>
						<div className='w-16 ml-4 flex flex-col'>
							<div className=''>
								<RuneImage runeId={match.primaryRune} />
							</div>
							<div className=''>
								<RuneImage runeId={match.secondaryRune} />
							</div>
						</div>
						<div className='ml-auto'>
							<ItemsImage
								item0={match.item0}
								item1={match.item1}
								item2={match.item2}
								item3={match.item3}
								item4={match.item4}
								item5={match.item5}
								item6={match.item6}
							/>
						</div>
						<div className='flex justify-start align-text-bottom text-lg ml-64'>
							<div className='mr-4'>
								{match.totalDamageDealtToChampions} DMG
							</div>
							<div className='mr-4'>{match.totalMinionsKilled} CS</div>
							<div className='mr-4'>Baron: {match.baronKills}</div>
							<div className='mr-3'>Dragon: {match.dragonKills}</div>
							<div className='mr-3'>Rift Herald:{match.riftHeraldKills}</div>
							<div className='mr-3'>Inhibitor: {match.inhibitorKills}</div>
							<div className='mr-3'>Tower: {match.towerKills}</div>
							
						</div>
						<div
								style={{ color: match.win ? 'green' : 'red' }}
								className='text-2xl font-bold absolute'
							>
								{match.win ? 'Victory' : 'Defeat'}
							</div>
					</div>
				);
			})}
		</div>
	);
}

export default Matches;
