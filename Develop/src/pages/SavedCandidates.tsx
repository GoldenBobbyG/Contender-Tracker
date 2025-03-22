import {useState, useEffect} from 'react';
import Candidate from '../interfaces/Candidate.interface';


const SavedCandidates = () => {
  const  [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(storedCandidates);
  }
  , []);
  
  if (savedCandidates.length === 0) {
    return <div>No Candidates Saved.</div>;
  }
  
  return (
    <>
      <h1>Potential Candidates</h1>

      <div className="candidate-grid">
       {savedCandidates.map((candidate) => (
          <div className= "candidate-card" key={candidate.login}>
            <img src={candidate.avatar_url}
            alt={`${candidate.login} avatar`} 
            className="candidate-avatar" />
      
      <h2>{candidate.login}</h2>

      <p>
        <strong>Location:</strong> {candidate.location || "Not Available"}
      </p>
      <p>
        <strong>Email:</strong> {candidate.email || "Not Available"}
      </p>
      <p>
        <strong>Company:</strong> {candidate.company || "Not Available"}
      </p>
      <p>
        <strong>Bio:</strong> {candidate.bio || "Not Available"}
      </p>

      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  

      ))}
      </div>
    </>
  );
};

export default SavedCandidates;
