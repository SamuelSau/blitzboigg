import React from 'react';
import RuneImage from './RuneImage'

function Matches({ matchDetailsArray }) {
  return (
    <div>
      {
        matchDetailsArray.map((match) => {
          return (
            <div key={match.gameCreation}>
              <h2>Champion Name: {match.championName}</h2>
              <p>Champion Level: {match.champLevel}</p>
              <p>Kills: {match.kills}</p>
              <p>Deaths: {match.deaths}</p>
              <p>Assists: {match.assists}</p>
              <p>Total Damage Dealt to Champions: {match.totalDamageDealtToChampions}</p>
              <p>Total Minions Killed: {match.totalMinionsKilled}</p>
              <h2>Primary rune: <RuneImage runeId={match.primaryRune} /></h2>
      <h2>Secondary rune: <RuneImage runeId={match.secondaryRune} /></h2>
              <p>Baron Kills: {match.baronKills}</p>
              <p>Dragon Kills: {match.dragonKills}</p>
              <p>Rift Herald Kills: {match.riftHeraldKills}</p>
              <p>Inhibitor Kills: {match.inhibitorKills}</p>
              <p>Tower Kills: {match.towerKills}</p>
              <p>Result: {match.win ? "Victory" : "Loss"}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Matches;