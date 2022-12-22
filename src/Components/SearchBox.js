import React, { useState } from 'react';

function SearchBox() {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Perform the search here
	};

	return (
        <form onSubmit={handleSubmit} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto my-10">
          <div className="flex items-center justify-center border-b border-teal-500 py-2 bg-gray-600 rounded-full h-16 min-h-16">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold text-4xl h-full min-h-full"
              type="text"
              placeholder="Search..."
              aria-label="Search"
              value={searchTerm}
              onChange={handleChange}
            />
            <button
              className="flex-shrink-0 bg-gray-600 hover:bg-gray-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-full shadow-lg h-full min-h-full"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      );
    }
export default SearchBox;
