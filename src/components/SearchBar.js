import React from 'react';

const SearchBar = ({ query, setQuery }) => {
    return (
        <section className='search-bar'>
            <input
                type='text'
                placeholder='Cari berdasarkan judul ...'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
        </section>
    );
};

export default SearchBar;
