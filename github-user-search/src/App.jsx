import React, { useState } from "react";
import SearchBar from "./components/SearchBar"; // Import the SearchBar component
import fetchGitHubUser from "./services/githubService"; // Import the service

function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data); // Store the fetched data
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} /> {/* Use the SearchBar component */}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
