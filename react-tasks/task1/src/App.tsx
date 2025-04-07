

import './App.css'
import ProfileCard from './components/ProfileCard/ProfileCard'

function App() {


  return (
    <div className="cards">
   <ProfileCard name='Vladimir' position='Frontend Developer' location='Chisinau, MD' contacts={['Vladimir.Perepelita@endava.com', '+37378626587']} imageUrl={''}/>
   <ProfileCard name='Yurii' position='.NET Developer' location='Chisinau, MD' contacts={['Iurii99@endava.com', '+373882345']} imageUrl={''}/>
   <ProfileCard name='John' position='DevOps' location='Atlanta, US' contacts={['JohnWalker@endava.com', '+1 374 834 8832']} imageUrl={''}/>
    </div>
  )
}

export default App
