import { useState, useEffect } from 'react';
import { searchGithub} from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    name: '',
    location: '',
    email: '',
    company: '',
    bio: '',
    avatar: '',
    html_url: '',
  });
  useEffect(() => {
    searchGithub().then((data) => setCandidate(data));
  }, []);
  useEffect(() => {
    console.log(candidate);
  } , [candidate]);
  return(<div><h1>CandidateSearch</h1>
  <main>
    <CandidateCard
      name={candidate.name}
      location={candidate.location}
      email={candidate.email}
      company={candidate.company}
      bio={candidate.bio}
      avatar={candidate.avatar}
      html_url={candidate.html_url}
    />
  </main>
  </div>
  );
};

CandidateSearch()
export default CandidateSearch;
