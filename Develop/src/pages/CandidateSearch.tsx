import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
// This is a simple component that fetches candidate data from the GitHub API and displays it to the user. 
// The user can save or skip candidates. 
// The saved candidates are stored in the local storage.
const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
// The useEffect hook is used to fetch the candidate data from the GitHub API when the component is mounted.
  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      const data = await searchGithub();
      setCandidates(data);
      setLoading(false);
    };

    fetchCandidates();
  }, []);
// The handleSaveCandidate function is called when the user clicks the Save button.
// It saves the current candidate to the savedCandidates state and local storage.
  const handleSaveCandidate = () => {
    const newSavedCandidates = [...savedCandidates, candidates[currentCandidateIndex]];
    setSavedCandidates(newSavedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(newSavedCandidates));
    setCurrentCandidateIndex(currentCandidateIndex + 1);
  };
// The handleSkipCandidate function is called when the user clicks the Skip button.
  const handleSkipCandidate = () => {
    setCurrentCandidateIndex(currentCandidateIndex + 1);
  };

  const currentCandidate = candidates[currentCandidateIndex];
// The component displays the candidate data along with Save and Skip buttons.
// If there are no more candidates available, a message is displayed to the user.
  return (
    <div>
      <h1>Candidate Search</h1>
      {loading ? (
        <p>Loading...</p>
      ) : currentCandidate ? (
        <div>
          <div>
            <img src={currentCandidate.avatar_url} alt={currentCandidate.login} />
            <p>Name: {currentCandidate.login}</p>
            <p>Location: {currentCandidate.location || "Not Available"}</p>
            <p>Email: {currentCandidate.email || "Not Available"}</p>
            <p>Company: {currentCandidate.company || "Not Available"}</p>
            <p>Bio: {currentCandidate.bio || "Not Available"}</p>
            <p>Profile: <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a></p>
          </div>
          <button onClick={handleSaveCandidate}>Save+</button>
          <button onClick={handleSkipCandidate}>Skip-</button>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;
