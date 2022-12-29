import React from 'react';

import precision from '../runesImages/precision.png';
import domination from '../runesImages/domination.png';
import sorcery from '../runesImages/sorcery.png';
import inspiration from '../runesImages/inspiration.png';
import resolve from '../runesImages/resolve.png';

function RuneImage({ runeId }) {
  let image;

  switch (runeId) {
    case 8000:
      image = precision;
      break;
    case 8100:
      image = domination;
      break;
    case 8200:
      image = sorcery;
      break;
    case 8300:
      image = inspiration;
      break;
    case 8400:
      image = resolve;
      break;
    default:
      image = null;
  }

  return image ? <img src={image} alt={`Rune ${runeId}`} /> : null }
  export default RuneImage