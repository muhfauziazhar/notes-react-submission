import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

const NotesList = ({ notes }) => {
    return (
        <section className='notes-list'>
            {notes &&
                notes.map((note, index) => {
                    return (
                        <NoteItem
                            key={`key-${index}-${note.id}`}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            createdAt={note.createdAt}
                        />
                    );
                })}
        </section>
    );
};

NotesList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    ),
};

export default NotesList;
