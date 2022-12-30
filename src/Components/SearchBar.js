import React, { useState } from 'react';

function SearchBar({onSubmit}) {
  const [summonerName, setSummonerName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(summonerName);
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto py-3 px-4 bg-yellow-300">
      <label className="block font-bold text-xl mb-2 400 font-serif">
        BlitzBoiGG
        <input
          className="border rounded-full py-2 px-3 w-full"
          type="text"
          value={summonerName}
          onChange={(event) => setSummonerName(event.target.value)}
          placeholder="Enter Summoner Name..."
        />
      </label>
      <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-x-2 hover:scale-110 shadow-2x1" type="submit">Submit</button>
    </form>
  );
}

export default SearchBar;