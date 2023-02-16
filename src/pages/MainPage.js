import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ButtonType from '../components/ButtonType';
import NoteListEmpty from '../components/NoteListEmpty';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes, getArchivedNotes } from '../utils';
import PropTypes from 'prop-types';
import { GlobalContext } from '../GlobalContext';
import { locale } from '../constants/localizations';

const MainPage = ({ isArchived }) => {
    const { state } = useContext(GlobalContext);
    const { lang } = state;
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('keyword') || '');

    useEffect(() => {
        get_listNotes(isArchived);
    }, [isArchived, query]);

    const get_listNotes = (isArchived) => {
        isArchived
            ? getArchivedNotes().then((res) => {
                  setNotes(
                      res.data.filter((note) =>
                          note.title
                              .toLowerCase()
                              .includes(query?.toLowerCase())
                      )
                  );
              })
            : getActiveNotes().then((res) => {
                  setNotes(
                      res.data.filter((note) =>
                          note.title
                              .toLowerCase()
                              .includes(query?.toLowerCase())
                      )
                  );
              });
    };

    const handleFilterChange = (event) => {
        setQuery(event.target.value);
        setSearchParams({ keyword: event.target.value });
    };

    return notes ? (
        <section>
            <h2>
                {isArchived
                    ? lang && locale[lang].archivePageTitle
                    : lang && locale[lang].homePageTitle}
            </h2>
            <SearchBar query={query} onChange={handleFilterChange} />
            <NotesList notes={notes} />
            {notes.length === 0 && <NoteListEmpty />}
            {isArchived ? (
                <></>
            ) : (
                <div className='homepage__action'>
                    <ButtonType
                        type={'Add'}
                        onClick={() => navigate('/notes/new')}
                    />
                </div>
            )}
        </section>
    ) : (
        <h1>Loading...</h1>
    );
};

MainPage.propTypes = {
    isArchived: PropTypes.bool.isRequired,
};

export default MainPage;
