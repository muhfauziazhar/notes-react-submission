import React from 'react';
import NoteItem from './NoteItem';

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

export default NotesList;
