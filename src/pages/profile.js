import { useParams } from "react-router-dom";
import './profile.css'

function Profile () {
    const { id } = useParams();
    return (
        <div className="profile">
            <h1>Profile id: {id}</h1>
        </div>
    )
}

export default Profile;