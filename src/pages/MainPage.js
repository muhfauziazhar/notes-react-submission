import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ButtonType from '../components/ButtonType';
import NoteListEmpty from '../components/NoteListEmpty';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes, getArchivedNotes } from '../utils';

const MainPage = ({ title, isArchived }) => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        isArchived
            ? setNotes(
                  getArchivedNotes().filter((note) =>
                      note.title.toLowerCase().includes(query?.toLowerCase())
                  )
              )
            : setNotes(
                  getActiveNotes().filter((note) =>
                      note.title.toLowerCase().includes(query?.toLowerCase())
                  )
              );
    }, [isArchived, query]);

    return (
        <section>
            <h2>{title}</h2>
            <SearchBar query={query} setQuery={setQuery} />
            <NotesList notes={notes} />
            {notes.length === 0 && <NoteListEmpty />}
            {isArchived ? (
                <></>
            ) : (
                <div className='homepage__action'>
                    <ButtonType
                        page={'homepage'}
                        type={'Add'}
                        onClick={() => navigate('/notes/new')}
                    />
                </div>
            )}
        </section>
    );
};

export default MainPage;