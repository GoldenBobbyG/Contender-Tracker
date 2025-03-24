import {useState, useEffect} from 'react';
import Candidate from '../interfaces/Candidate.interface';

// This component displays the saved candidates to the user.
// The saved candidates are retrieved from local storage and displayed in a table.
// If there are no saved candidates, a message is displayed to the user.
const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
// The useEffect hook is used to retrieve the saved candidates from local storage when the component is mounted.
  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(storedCandidates);
  }, []);

  if (savedCandidates.length === 0) {
    return <div>No Candidates Saved.</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Potential Candidates</h1>

      <table className="candidate-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Login</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.login}>
                <td>
                <img
                  src={candidate.avatar_url}
                  alt={`${candidate.login} avatar`}
                  className="candidate-avatar"
                  style={{ width: '75px', height: '75px' }}
                />
                </td>
              <td>{candidate.login}</td>
              <td>{candidate.location || "Not Available"}</td>
              <td>{candidate.email || "Not Available"}</td>
              <td>{candidate.company || "Not Available"}</td>
              <td>{candidate.bio || "Not Available"}</td>
              <td>
                <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                  View GitHub Profile
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;
