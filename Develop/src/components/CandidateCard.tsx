//import type React from 'react';

type CandidateCardProps = {
    name: string;
    login: string;
    location: string;
    email: string;
    company: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    index: number;
    setIndex: (index: number) => void;
};

const CandidateCard = ({
    name,
    login,
    location,
    email,
    company,
    bio,
    avatar_url,
    html_url,
    index,
    setIndex,
}: CandidateCardProps) => {
    const saveCandidate = () => {
        const candidates = JSON.parse(localStorage.getItem('candidates') || '[]');
        candidates.push({ name, location, email, company, bio, avatar_url, html_url });
        localStorage.setItem('candidates', JSON.stringify(candidates));
        setIndex(index + 1);
    }
    return (
        <main>
            <div className="card">
                <img src={avatar_url} alt={name} />
                <div className="card-body">
                    <h2>{login} (Name: {name} )</h2>
                    <p>Location: {location}</p>
                    <p>Email: {email}</p>
                    <p>Company: {company}</p>
                    <p>Bio: {bio}</p>
                    <a href={html_url} target="_blank" rel="noreferrer">
                        View Profile
                    </a>
                </div>
            </div>
            <div className='icons'>
                <img className="icons" src="./minusSymbol.jpg" alt="minus" onClick={()=>setIndex(index+1)}/>
                <img className="icons" src="./plusSymbol.jpg" alt="plus" onClick={saveCandidate} />
            </div>
        </main>
    );
}

export default CandidateCard;