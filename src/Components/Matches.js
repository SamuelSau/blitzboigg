import React from 'react';
import RuneImage from './RuneImage';
import ChampionImage from './ChampionImage';
import ItemsImage from './ItemsImage';
import SummonerSpellsImages from './SummonerSpellsImages';

function Matches({ matchDetailsArray }) {
	return (
		<div
			style={{ backgroundColor: '#1f2937' }}
			className='text-white p-4 mt-5 flex flex-col text-xs mx-9 rounded-2xl'
		>
			{matchDetailsArray.map((match) => {
				return (
					<div
						key={match.gameCreation}
						className='flex p-4 justify-start border-2 rounded-2xl m-2 lg:flex-row'
					>
						<div className='m-4 text-md font-bold'>
							{Math.floor(match.gameDuration / 60)} mins
						</div>
						<div>
							<div className='absolute'>
								<ChampionImage championName={match.championName} />
							</div>
							<div className=' bg-black rounded-full h-5 w-5 flex justify-center items-center absolute'>
								{match.champLevel}
							</div>
						</div>
						<div className='flex m-3 text-md'>
							<div className=''>{match.kills}/</div>
							<div className=''>{match.deaths}/</div>
							<div className=''>{match.assists}</div>
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
						<div className='flex justify-start align-text-bottom text-lg ml-80'>
							<div className='mr-4'>
								{match.totalDamageDealtToChampions} DMG
							</div>
							<div className='mr-4'>{match.totalMinionsKilled} CS</div>
							<div className='mr-4'>Baron:{match.baronKills}</div>
							<div className='mr-3'>Dragon:{match.dragonKills}</div>
							<div className='mr-3'>
								Rift Herald:{match.riftHeraldKills}
							</div>
							<div className='mr-3'>
								Inhibitor:{match.inhibitorKills}
							</div>
							<div className='mr-3'>Tower: {match.towerKills}</div>
							<div
								style={{ color: match.win ? 'green' : 'red' }}
								className='text-lg font-bold ml-6'
							>
								{match.win ? 'Victory' : 'Defeat'}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Matches;
