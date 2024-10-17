
import React, { useState } from 'react';
import './modal.css'; 

const Modal = ({ note, onSave, onClose }) => {
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);

    const handleSave = () => {
        onSave({ ...note, title, description });
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edytuj Notatke</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Tytuł"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Opis"
                />
                <button onClick={handleSave}>Zapisz</button>
                <button onClick={onClose}>Anuluj</button>
            </div>
        </div>
    );
};

export default Modal;
