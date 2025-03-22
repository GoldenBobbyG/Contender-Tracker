import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      const data = await searchGithub();
      setCandidates(data);
      setLoading(false);
    };

    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    const newSavedCandidates = [...savedCandidates, candidates[currentCandidateIndex]];
    setSavedCandidates(newSavedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(newSavedCandidates));
    setCurrentCandidateIndex(currentCandidateIndex + 1);
  };

  const handleSkipCandidate = () => {
    setCurrentCandidateIndex(currentCandidateIndex + 1);
  };

  const currentCandidate = candidates[currentCandidateIndex];

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
