import React, { useEffect, useState } from 'react';
import ButtonType from '../components/ButtonType';
import { useParams, useNavigate } from 'react-router-dom';
import {
    showFormattedDate,
    getNote,
    archiveNote,
    unarchiveNote,
    deleteNote,
} from '../utils';
import parser from 'html-react-parser';

const NoteDetail = () => {
    const navigate = useNavigate();
    const [note, setNote] = useState({});
    const params = useParams();

    useEffect(() => {
        getNote(params.id).then((res) => setNote(res.data));
    }, [params.id]);

    const onClickArsip = (isArchive, id) => {
        isArchive ? unarchiveNote(id) : archiveNote(id);
        navigate('/');
    };

    const onClickHapus = (id) => {
        deleteNote(id);
        navigate('/');
    };

    return (
        note && (
            <section className='detail-page'>
                <h3 className='detail-page__title'>{note.title}</h3>
                <p className='detail-page__createdAt'>
                    {showFormattedDate(note.createdAt)}
                </p>
                <div className='detail-page__body'>
                    {note.body?.includes('</') ? parser(note.body) : note.body}
                </div>
                <div className='detail-page__action'>
                    <ButtonType
                        page='detail-page'
                        type='Archive'
                        onClick={() => onClickArsip(note.archived, params.id)}
                    />
                    <ButtonType
                        page='detail-page'
                        type='Delete'
                        onClick={() => onClickHapus(params.id)}
                    />
                </div>
            </section>
        )
    );
};

export default NoteDetail;
