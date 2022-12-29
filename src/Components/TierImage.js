import React from 'react';

import bronze from '../tierImages/bronze.png';
import silver from '../tierImages/silver.png';
import gold from '../tierImages/gold.png';
import platinum from '../tierImages/platinum.png';
import diamond from '../tierImages/diamond.png';
import master from '../tierImages/master.png';
import grandmaster from '../tierImages/grandmaster.png';
import challenger from '../tierImages/challenger.png';

function TierImage({ tier }) {
  let image;

  switch (tier) {
    case 'BRONZE':
      image = bronze;
      break;
    case 'SILVER':
      image = silver;
      break;
    case 'GOLD':
      image = gold;
      break;
    case 'PLATINUM':
      image = platinum;
      break;
    case 'DIAMOND':
      image = diamond;
      break;
    case 'MASTER':
      image = master;
      break;
    case 'GRANDMASTER':
      image = grandmaster;
      break;
    case 'CHALLENGER':
      image = challenger;
      break;
    default:
      image = null;
  }

  return image ? <img src={image} alt={`Tier ${tier}`} /> : null;
}

export default TierImage;