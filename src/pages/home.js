import NotesList from "../components/notesList";
import './home.css';

function Home() {
    return (
      <div className='home'>
        <h1>Home</h1>
        <NotesList />
      </div>
    );
}

export default Home;