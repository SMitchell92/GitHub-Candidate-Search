import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';


const SavedCandidates = () => {
  const [candidates, setCandidate] = useState<Candidate[]>([]);
  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('candidates') || '[]');
    setCandidate(candidates
    );
  }
  , []);
  if (candidates.length === 0) {
    return (
      <h1>No Candidates Saved</h1>
    );
  }
  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates.map((candidate, index) => (
        <div className="table" key={index}>
          <h2>{candidate.name}</h2>
          <p>{candidate.location}</p>
          <p>{candidate.email}</p>
          <p>{candidate.company}</p>
          <p>{candidate.bio}</p>
          <img className='icons' src={candidate.avatar_url} alt={candidate.name} />
          <a href={candidate.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      ))}
    </>
  );
};

export default SavedCandidates;
