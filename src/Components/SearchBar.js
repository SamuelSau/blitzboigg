import React, { useState } from 'react';

function SearchBar({onSubmit}) {
  const [summonerName, setSummonerName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(summonerName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Summoner name:
        <input
          type="text"
          value={summonerName}
          onChange={(event) => setSummonerName(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchBar;