import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate[]>([]);
  const [index, setIndex] = useState(0);
  const [userDetails, setUserDetails] = useState<Candidate>({
    name: '',
    location: '',
    email: '',
    company: '',
    bio: '',
    avatar_url: '',
    html_url: '',
    login: '',
  });
  console.log(candidate)
  useEffect(() => {
    searchGithub().then((data) => setCandidate(data));
  }, []);
  useEffect(() => {
    if (candidate.length > 0 && 31 > index) {
      searchGithubUser(candidate[index].login).then((data) => setUserDetails(data));
    } else if (index > 31) {
      return
      <h1> Candidate roster exhausted, please hit refresh</h1>
    }
  }, [candidate, index]);
  console.log(userDetails);
  return (<div><h1>Candidate Search</h1>
    <main>
      <CandidateCard
        login={userDetails.login || 'N/A'}
        name={userDetails.name || 'N/A'}
        location={userDetails.location || 'N/A'}
        email={userDetails.email || 'N/A'}
        company={userDetails.company || 'N/A'}
        bio={userDetails.bio || 'N/A'}
        avatar_url={userDetails.avatar_url || 'N/A'}
        html_url={userDetails.html_url || 'N/A'}
        index={index}
        setIndex={setIndex}
      />
    </main>
  </div>
  );
};

export default CandidateSearch;
