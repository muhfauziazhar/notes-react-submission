import React from 'react';
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

const NoteItem = ({ id, title, createdAt, body }) => {
    return (
        <article className='note-item'>
            <h3 className='note-item__title'>
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className='note-item__createdAt'>
                {showFormattedDate(createdAt)}
            </p>
            <p className='note-item__body'>{parser(body)}</p>
        </article>
    );
};

export default NoteItem;
