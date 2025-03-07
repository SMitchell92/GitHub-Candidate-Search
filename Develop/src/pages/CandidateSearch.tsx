import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
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
  //console.log(candidates)
  useEffect(() => {
    searchGithub().then((data) => setCandidates(data));
  }, []);

  useEffect(() => {
    //console.log(index);
    if (index >= candidates.length) { return; }

    searchGithubUser(candidates[index].login).then((data) => setUserDetails(data));
  }, [candidates, index]);

  //console.log(userDetails);
  return (<div><h1>Candidate Search</h1>
    <main>
      {index< candidates.length?
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
        numCandidates={candidates.length}
      />
      :<p>No remaining candidates, please hit refresh to load more</p>}
    </main>
  </div>
  );
};

export default CandidateSearch;
