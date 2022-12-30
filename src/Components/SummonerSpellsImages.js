import React from 'react';

const summonerSpells = {
    21: 'SummonerBarrier',
    1: 'SummonerBoost',
    14: 'SummonerDot',
    3: 'SummonerExhaust',
    4: 'SummonerFlash',
    6: 'SummonerHaste',
    7: 'SummonerHeal',
    13: 'SummonerMana',
    31: 'SummonerPoroThrow',
    11: 'SummonerSmite',
    39: 'SummonerSnowURFSnowball_Mark',
    32: 'SummonerSnowball',
    12: 'SummonerTeleport',
    54: 'Summoner_UltBookPlaceholder',
    55: 'Summoner_UltBookSmitePlaceholder'
  };

function SummonerSpellsImages({ summoner1Id, summoner2Id }) {
	const summonerSpell1 = summonerSpells[summoner1Id]
	const summonerSpell2 = summonerSpells[summoner2Id]

	return (
		<div className='h-8 w-8'>
			<img
				src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/${summonerSpell1}.png`}
				alt='Summoner spell 1'
			/>
			<img
				src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/${summonerSpell2}.png`}
				alt='Summoner spell 2'
			/>
		</div>
	);
}

export default SummonerSpellsImages;
