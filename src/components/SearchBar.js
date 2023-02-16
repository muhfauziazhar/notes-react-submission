import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../GlobalContext';
import { locale } from '../constants/localizations';

const SearchBar = ({ query, onChange }) => {
    const { state } = useContext(GlobalContext);
    const { lang } = state;
    return (
        <section className='search-bar'>
            <input
                type='text'
                placeholder={locale[lang].searchPlaceholder}
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
