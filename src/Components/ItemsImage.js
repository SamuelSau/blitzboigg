import React from 'react';

function ItemsImage({ item0, item1, item2, item3, item4, item5, item6 }) {
  
    const imageUrls = [
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item0}.png`,
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item1}.png`,
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item2}.png`,
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item3}.png`,
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item4}.png`,
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item5}.png`,
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item6}.png`,
    ];
  
  return( 
    <div>
        {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Item ${index}`} />
        ))}
    </div>
  );
}

export default ItemsImage;