import './App.css';
import React from 'react';
import NotesList from './components/notesList.js';

function App() {
  return (
    <div className='app'>
    <h1>Moje notatki</h1>
    <NotesList />
  </div>
  );
}

export default App;
