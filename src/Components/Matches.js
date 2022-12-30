import React from 'react';
import RuneImage from './RuneImage';
import ChampionImage from './ChampionImage';
import ItemsImage from './ItemsImage';
import SummonerSpellsImages from './SummonerSpellsImages';

function Matches({ matchDetailsArray }) {
	return (
		<div style={{ backgroundColor: '#1f2937' }} className='text-white p-4 mt-5 flex flex-col-reverse'>
			{matchDetailsArray.map((match) => {
				return (
					<div key={match.gameCreation}>
						<div>{match.championName}</div>
						<div className="rounded-full">
					<ChampionImage
						championName={match.championName}
					/>
				</div>
						<p>Champion Level: {match.champLevel}</p>
						<div>Kills: {match.kills}</div>
						<p>Deaths: {match.deaths}</p>
						<p>Assists: {match.assists}</p>
						<p>
							Items:{' '}
							<ItemsImage
								item0={match.item0}
								item1={match.item1}
								item2={match.item2}
								item3={match.item3}
								item4={match.item4}
								item5={match.item5}
								item6={match.item6}
							/>
						</p>
						<p>
							Total Damage Dealt to Champions:{' '}
							{match.totalDamageDealtToChampions}
						</p>
						<p>Total Minions Killed: {match.totalMinionsKilled}</p>
						<h2>
							Primary rune: <RuneImage runeId={match.primaryRune} />
						</h2>
						<h2>
							Secondary rune: <RuneImage runeId={match.secondaryRune} />
						</h2>
						<h2>
							<SummonerSpellsImages
								summoner1Id={match.summoner1Id}
								summoner2Id={match.summoner2Id}
							/>
						</h2>
						<p>Baron Kills: {match.baronKills}</p>
						<p>Dragon Kills: {match.dragonKills}</p>
						<p>Rift Herald Kills: {match.riftHeraldKills}</p>
						<p>Inhibitor Kills: {match.inhibitorKills}</p>
						<p>Tower Kills: {match.towerKills}</p>
						<p>Result: {match.win ? 'Victory' : 'Loss'}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Matches;
