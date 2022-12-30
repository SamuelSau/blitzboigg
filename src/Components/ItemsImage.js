import React from 'react';

function ItemsImage({ item0, item1, item2, item3, item4, item5, item6 }) {
	const imageUrl0 = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item0}.png`;
	const imageUrl1 = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item1}.png`;
	const imageUrl2 = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item2}.png`;
	const imageUrl3 = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item3}.png`;
	const imageUrl4 = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item4}.png`;
	const imageUrl5 = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item5}.png`;
	const imageUrl6 = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item6}.png`;

	return (
		<div className='flex h-12 w-12'>
			<div className='border-black'><img src={imageUrl0} alt={`item0`} /></div>
			<img src={imageUrl1} alt={`item1`} />
			<img src={imageUrl2} alt={`item2`} />
			<img src={imageUrl3} alt={`item3`} />
			<img src={imageUrl4} alt={`item4`} />
			<img src={imageUrl5} alt={`item5`} />
			<img src={imageUrl6} alt={`item6`} />
		</div>
	);
}

export default ItemsImage;
