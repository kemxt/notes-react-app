import Note from './note.js'
import './note.css'
import './notesList.css'
import React, { useState } from 'react';
import Modal from './modal.js';

const NotesList = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: 'Notatka 1', description: 'Opis notatki 1' },
        { id: 2, title: 'Notatka 2', description: 'Opis notatki 2' },
    ]);
    const [selectedNote, setSelectedNote] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const handleClick = (note) => {
        setSelectedNote(note);
        setIsModalOpen(true);
    }

    const handleSave = (updatedNote) => {
        setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedNote(null);
    };
    return (
        <div className='noteList'>
        {isModalOpen ? (
            <Modal note={selectedNote} onSave={handleSave} onClose={handleCloseModal} />
        ) : (
            <div className='notes'>
                {notes.map(note => (
                    <Note key={note.id} note={note} onEdit={handleClick} />
                ))}
            </div>
        )}
    </div>
    );
};

export default NotesList;
