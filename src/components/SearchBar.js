import React from 'react';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBar;
