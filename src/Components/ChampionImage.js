import React from 'react';

function ChampionImage({ championName }) {
  
  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${championName}.png`;
  
  return <img src={imageUrl} alt={`${championName}`} className="w-16 h-16 rounded-full" />;
}

export default ChampionImage;