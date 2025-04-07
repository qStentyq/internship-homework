
import './ProfileCard.css'

type ProfileCardProps = {
  name: string;
    position: string;
    location: string;
    imageUrl: string;
    contacts: string[];}

export default function ProfileCard( {name, position, location, imageUrl = '', contacts} : ProfileCardProps) {
  return (
    <div>
       
        <div className="card">
            <img className="image" src={imageUrl ? imageUrl : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"} alt="Profile" />
            <h2>{name}</h2>
            <p>{position}</p>
            <p>Location: {location}</p>
            <button>{contacts[0]}</button>
        </div>
    </div>
  )
}
