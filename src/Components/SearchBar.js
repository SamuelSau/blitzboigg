import React, { useState } from 'react';

function SearchBar({onSubmit}) {
  const [summonerName, setSummonerName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(summonerName);
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto py-3 px-4 flex h-12">
      <label className="block font-bold text-xl mb-2 400 font-serif">
        <input
          className=" border rounded-l-full py-2 px-3 w-full text-black"
          type="text"
          value={summonerName}
          onChange={(event) => setSummonerName(event.target.value)}
          placeholder="Enter Summoner Name..."
        />
      </label>
      <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r-full h-12" type="submit">Submit</button>
    </form>
  );
}

export default SearchBar;