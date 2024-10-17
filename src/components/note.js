import React, { useState } from 'react';
import './note.css';


const Note = ({ note, onEdit }) => {
    return (
        <div className="note">
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button className="edit-button" onClick={() => onEdit(note)}>Edytuj</button>
        </div>
    );
};
export default Note;
