import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  const profiles = [
    {
      name: "Vladimir",
      position: "Frontend Developer",
      location: "Chisinau, MD",
      contacts: {
        email: "Vladimir.Perepelita@endava.com",
        phone: "+37378626587",
      },
    },
    {
      name: "Yurii",
      position: ".NET Developer",
      location: "Chisinau, MD",
      contacts: {
        email: "Iurii99@endava.com",
        phone: "+373882345",
      },
    },
    {
      name: "John",
      position: "DevOps",
      location: "Atlanta, US",
      contacts: {
        email: "JohnWalker@endava.com",
        phone: "+1 374 834 8832",
      },
    },
  ];

  return (
    <div className='cards'>
      {profiles.map((profile, index) => {
        return (
          <ProfileCard
            key={index}
            name={profile.name}
            location={profile.location}
            position={profile.position}
            contacts={[profile.contacts.email, profile.contacts.phone]}
          />
        );
      })}
    </div>
  );
}

export default App;
