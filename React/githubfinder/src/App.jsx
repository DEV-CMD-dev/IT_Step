import { useState } from 'react'
import './App.css'
import Finder from './Finder'
import UserCard from './UserCard'

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <Finder setUserData={setUserData} />
      {userData && (
        <UserCard
          login={userData.login}
          url={userData.html_url}
          photo={userData.avatar_url}
          followers={userData.followers}
          public_repos={userData.public_repos}
        />
      )}
    </>
  )
}

export default App;
