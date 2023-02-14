import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonType from '../components/ButtonType';
import { addNote } from '../utils';

const AddNewNote = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.innerHTML);
    };

    const onClickSimpan = () => {
        addNote({ title, body });
        navigate('/');
    };

    return (
        <section className='add-new-page'>
            <div className='add-new-page__input'>
                <input
                    className='add-new-page__input__title'
                    placeholder='Catatan rahasia'
                    value={title}
                    onChange={handleTitleChange}
                />
                <div
                    className='add-new-page__input__body'
                    contentEditable
                    data-placeholder='Sebenarnya saya adalah ....'
                    onInput={handleBodyChange}
                ></div>
            </div>
            <div className='add-new-page__action'>
                <ButtonType type={'Simpan'} onClick={onClickSimpan} />
            </div>
        </section>
    );
};

export default AddNewNote;
