import {
    getAllNotes,
    getActiveNotes,
    getArchivedNotes,
    deleteNote,
    editNote,
    getNote,
    archiveNote,
    unarchiveNote,
    addNote,
} from './local-data';

const showFormattedDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(date).toLocaleDateString('id-ID', options);
};

export {
    showFormattedDate,
    getAllNotes,
    getActiveNotes,
    getArchivedNotes,
    deleteNote,
    editNote,
    getNote,
    archiveNote,
    unarchiveNote,
    addNote,
};
