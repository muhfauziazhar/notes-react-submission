import React from 'react';

const SearchBar = ({ query, onChange }) => {
    return (
        <section className='search-bar'>
            <input
                type='text'
                placeholder='Cari berdasarkan judul ...'
                value={query}
                onChange={(event) => onChange(event)}
            />
        </section>
    );
};

export default SearchBar;
